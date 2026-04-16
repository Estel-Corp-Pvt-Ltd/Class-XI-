// Tiny Python-like interpreter for classroom use.
// Supports a learning-safe subset: assignment, arithmetic, print(),
// if/elif/else, for i in range(), while, functions, lists, strings, f-strings,
// len(), sum(), min(), max(), range(), str(), int(), float(), bool(), input (prompted once).
//
// It is NOT a full Python — it's designed so Class 11 students can see code
// work without a 10MB Pyodide download. Anything not supported prints a
// friendly error. All execution runs in an isolated scope; no DOM/network.

export type RunResult = { output: string; error?: string };

type Scope = Record<string, unknown>;

const MAX_STEPS = 50000;

class RunError extends Error {}

type Line = { indent: number; text: string; lineNumber: number };

function splitLines(code: string): Line[] {
  return code.split("\n").map((raw, i) => {
    const trimmed = raw.replace(/\t/g, "    ");
    const indent = trimmed.match(/^ */)?.[0].length ?? 0;
    const text = trimmed.trim();
    return { indent, text, lineNumber: i + 1 };
  });
}

function stripComment(s: string): string {
  let inSingle = false;
  let inDouble = false;
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (c === "'" && !inDouble) inSingle = !inSingle;
    else if (c === '"' && !inSingle) inDouble = !inDouble;
    else if (c === "#" && !inSingle && !inDouble) return s.slice(0, i).trim();
  }
  return s;
}

type Token =
  | { kind: "num"; value: number }
  | { kind: "str"; value: string }
  | { kind: "name"; value: string }
  | { kind: "op"; value: string }
  | { kind: "fstr"; parts: (string | Token[])[] };

function tokenize(src: string): Token[] {
  const tokens: Token[] = [];
  let i = 0;
  const KEYWORDS = new Set([
    "True", "False", "None", "and", "or", "not", "in", "is",
  ]);
  while (i < src.length) {
    const c = src[i];
    if (c === " " || c === "\t") {
      i++;
      continue;
    }
    // f-string
    if ((c === "f" || c === "F") && (src[i + 1] === '"' || src[i + 1] === "'")) {
      const quote = src[i + 1];
      i += 2;
      const parts: (string | Token[])[] = [];
      let buf = "";
      while (i < src.length && src[i] !== quote) {
        if (src[i] === "{") {
          if (src[i + 1] === "{") {
            buf += "{";
            i += 2;
            continue;
          }
          if (buf) parts.push(buf);
          buf = "";
          i++;
          let expr = "";
          let depth = 1;
          while (i < src.length && depth > 0) {
            if (src[i] === "{") depth++;
            else if (src[i] === "}") {
              depth--;
              if (depth === 0) break;
            }
            expr += src[i];
            i++;
          }
          i++;
          parts.push(tokenize(expr));
        } else if (src[i] === "\\" && i + 1 < src.length) {
          const esc = src[i + 1];
          buf +=
            esc === "n" ? "\n" :
            esc === "t" ? "\t" :
            esc === "\\" ? "\\" :
            esc === quote ? quote :
            esc;
          i += 2;
        } else {
          buf += src[i];
          i++;
        }
      }
      if (buf) parts.push(buf);
      i++;
      tokens.push({ kind: "fstr", parts });
      continue;
    }
    if (c === '"' || c === "'") {
      let s = "";
      i++;
      while (i < src.length && src[i] !== c) {
        if (src[i] === "\\" && i + 1 < src.length) {
          const esc = src[i + 1];
          s +=
            esc === "n" ? "\n" :
            esc === "t" ? "\t" :
            esc === "\\" ? "\\" :
            esc === c ? c :
            esc;
          i += 2;
        } else {
          s += src[i];
          i++;
        }
      }
      i++;
      tokens.push({ kind: "str", value: s });
      continue;
    }
    if (/[0-9]/.test(c) || (c === "." && /[0-9]/.test(src[i + 1] ?? ""))) {
      let num = "";
      while (i < src.length && /[0-9.]/.test(src[i])) {
        num += src[i];
        i++;
      }
      tokens.push({ kind: "num", value: parseFloat(num) });
      continue;
    }
    if (/[A-Za-z_]/.test(c)) {
      let name = "";
      while (i < src.length && /[A-Za-z0-9_]/.test(src[i])) {
        name += src[i];
        i++;
      }
      if (KEYWORDS.has(name)) {
        tokens.push({ kind: "op", value: name });
      } else {
        tokens.push({ kind: "name", value: name });
      }
      continue;
    }
    // two-char ops
    const two = src.slice(i, i + 2);
    if (["==", "!=", "<=", ">=", "**", "//", "+=", "-=", "*=", "/="].includes(two)) {
      tokens.push({ kind: "op", value: two });
      i += 2;
      continue;
    }
    if ("+-*/%()[],:<>=".includes(c)) {
      tokens.push({ kind: "op", value: c });
      i++;
      continue;
    }
    throw new RunError(`Unexpected character '${c}'`);
  }
  return tokens;
}

// Pratt-style recursive descent
class Parser {
  pos = 0;
  constructor(private tokens: Token[]) {}

  peek(offset = 0) {
    return this.tokens[this.pos + offset];
  }
  eat() {
    return this.tokens[this.pos++];
  }
  match(kind: string, value?: string) {
    const t = this.peek();
    if (!t) return false;
    if (t.kind !== kind) return false;
    if (value !== undefined && (t as { value: unknown }).value !== value) return false;
    return true;
  }
  expect(kind: string, value?: string): Token {
    if (!this.match(kind, value)) {
      throw new RunError(`Expected ${value ?? kind}`);
    }
    return this.eat();
  }

  parseExpr(): Expr {
    return this.parseOr();
  }
  parseOr(): Expr {
    let left = this.parseAnd();
    while (this.match("op", "or")) {
      this.eat();
      const right = this.parseAnd();
      left = { type: "bin", op: "or", left, right };
    }
    return left;
  }
  parseAnd(): Expr {
    let left = this.parseNot();
    while (this.match("op", "and")) {
      this.eat();
      const right = this.parseNot();
      left = { type: "bin", op: "and", left, right };
    }
    return left;
  }
  parseNot(): Expr {
    if (this.match("op", "not")) {
      this.eat();
      const val = this.parseNot();
      return { type: "unary", op: "not", val };
    }
    return this.parseCompare();
  }
  parseCompare(): Expr {
    let left = this.parseAddSub();
    while (true) {
      const t = this.peek();
      if (t && t.kind === "op" && ["==", "!=", "<", ">", "<=", ">=", "in"].includes(t.value)) {
        this.eat();
        const right = this.parseAddSub();
        left = { type: "bin", op: t.value, left, right };
      } else break;
    }
    return left;
  }
  parseAddSub(): Expr {
    let left = this.parseMulDiv();
    while (true) {
      const t = this.peek();
      if (t && t.kind === "op" && (t.value === "+" || t.value === "-")) {
        this.eat();
        const right = this.parseMulDiv();
        left = { type: "bin", op: t.value, left, right };
      } else break;
    }
    return left;
  }
  parseMulDiv(): Expr {
    let left = this.parseUnary();
    while (true) {
      const t = this.peek();
      if (t && t.kind === "op" && ["*", "/", "//", "%"].includes(t.value)) {
        this.eat();
        const right = this.parseUnary();
        left = { type: "bin", op: t.value, left, right };
      } else break;
    }
    return left;
  }
  parseUnary(): Expr {
    if (this.match("op", "-")) {
      this.eat();
      return { type: "unary", op: "-", val: this.parseUnary() };
    }
    if (this.match("op", "+")) {
      this.eat();
      return this.parseUnary();
    }
    return this.parsePower();
  }
  parsePower(): Expr {
    const left = this.parseAtom();
    if (this.match("op", "**")) {
      this.eat();
      const right = this.parseUnary();
      return { type: "bin", op: "**", left, right };
    }
    return left;
  }
  parseAtom(): Expr {
    const t = this.eat();
    if (!t) throw new RunError("Unexpected end of expression");
    let node: Expr;
    if (t.kind === "num") node = { type: "lit", value: t.value };
    else if (t.kind === "str") node = { type: "lit", value: t.value };
    else if (t.kind === "fstr") {
      const parts = t.parts.map((p) =>
        typeof p === "string"
          ? ({ type: "lit", value: p } as Expr)
          : new Parser(p).parseExpr()
      );
      node = { type: "fstr", parts };
    } else if (t.kind === "op" && t.value === "True") node = { type: "lit", value: true };
    else if (t.kind === "op" && t.value === "False") node = { type: "lit", value: false };
    else if (t.kind === "op" && t.value === "None") node = { type: "lit", value: null };
    else if (t.kind === "op" && t.value === "(") {
      const e = this.parseExpr();
      this.expect("op", ")");
      node = e;
    } else if (t.kind === "op" && t.value === "[") {
      const items: Expr[] = [];
      if (!this.match("op", "]")) {
        items.push(this.parseExpr());
        while (this.match("op", ",")) {
          this.eat();
          if (this.match("op", "]")) break;
          items.push(this.parseExpr());
        }
      }
      this.expect("op", "]");
      node = { type: "list", items };
    } else if (t.kind === "name") {
      node = { type: "name", name: t.value };
    } else {
      throw new RunError(`Unexpected token ${JSON.stringify(t)}`);
    }

    // Postfix: call, index, attribute access (we ignore attribute).
    while (true) {
      if (this.match("op", "(")) {
        this.eat();
        const args: Expr[] = [];
        if (!this.match("op", ")")) {
          args.push(this.parseExpr());
          while (this.match("op", ",")) {
            this.eat();
            if (this.match("op", ")")) break;
            args.push(this.parseExpr());
          }
        }
        this.expect("op", ")");
        node = { type: "call", callee: node, args };
      } else if (this.match("op", "[")) {
        this.eat();
        const idx = this.parseExpr();
        this.expect("op", "]");
        node = { type: "index", target: node, idx };
      } else break;
    }
    return node;
  }
}

type Expr =
  | { type: "lit"; value: number | string | boolean | null }
  | { type: "name"; name: string }
  | { type: "bin"; op: string; left: Expr; right: Expr }
  | { type: "unary"; op: string; val: Expr }
  | { type: "call"; callee: Expr; args: Expr[] }
  | { type: "list"; items: Expr[] }
  | { type: "index"; target: Expr; idx: Expr }
  | { type: "fstr"; parts: Expr[] };

function parseExpr(src: string): Expr {
  const tokens = tokenize(src);
  const p = new Parser(tokens);
  const e = p.parseExpr();
  if (p.pos !== tokens.length) throw new RunError("Unexpected extra tokens");
  return e;
}

function toBool(v: unknown): boolean {
  if (v === null || v === undefined) return false;
  if (typeof v === "boolean") return v;
  if (typeof v === "number") return v !== 0;
  if (typeof v === "string") return v.length > 0;
  if (Array.isArray(v)) return v.length > 0;
  return true;
}

function pyRepr(v: unknown): string {
  if (v === null) return "None";
  if (typeof v === "boolean") return v ? "True" : "False";
  if (typeof v === "string") return v;
  if (Array.isArray(v)) return "[" + v.map(pyRepr).join(", ") + "]";
  return String(v);
}

function pyStr(v: unknown): string {
  return pyRepr(v);
}

function evalExpr(e: Expr, scope: Scope, output: string[], ctx: Ctx): unknown {
  if (ctx.steps++ > MAX_STEPS) throw new RunError("Too many steps (infinite loop?)");
  switch (e.type) {
    case "lit":
      return e.value;
    case "name": {
      if (e.name in scope) return scope[e.name];
      if (e.name in BUILTINS) return BUILTINS[e.name];
      throw new RunError(`Name '${e.name}' is not defined`);
    }
    case "list":
      return e.items.map((i) => evalExpr(i, scope, output, ctx));
    case "index": {
      const t = evalExpr(e.target, scope, output, ctx);
      const i = evalExpr(e.idx, scope, output, ctx) as number;
      if (Array.isArray(t) || typeof t === "string") {
        const idx = i < 0 ? t.length + i : i;
        return (t as unknown[] | string)[idx];
      }
      throw new RunError("Cannot index this value");
    }
    case "unary": {
      const v = evalExpr(e.val, scope, output, ctx);
      if (e.op === "-") return -(v as number);
      if (e.op === "not") return !toBool(v);
      throw new RunError(`Unknown unary op ${e.op}`);
    }
    case "bin": {
      if (e.op === "and") {
        const l = evalExpr(e.left, scope, output, ctx);
        if (!toBool(l)) return l;
        return evalExpr(e.right, scope, output, ctx);
      }
      if (e.op === "or") {
        const l = evalExpr(e.left, scope, output, ctx);
        if (toBool(l)) return l;
        return evalExpr(e.right, scope, output, ctx);
      }
      const l = evalExpr(e.left, scope, output, ctx) as number;
      const r = evalExpr(e.right, scope, output, ctx) as number;
      switch (e.op) {
        case "+":
          if (typeof l === "string" || typeof r === "string") return String(l) + String(r);
          if (Array.isArray(l) && Array.isArray(r)) return [...l, ...r];
          return (l as number) + (r as number);
        case "-": return (l as number) - (r as number);
        case "*":
          if (typeof l === "string" && typeof r === "number") return (l as string).repeat(r);
          if (typeof r === "string" && typeof l === "number") return (r as string).repeat(l);
          return (l as number) * (r as number);
        case "/": {
          if ((r as number) === 0) throw new RunError("Division by zero");
          return (l as number) / (r as number);
        }
        case "//": {
          if ((r as number) === 0) throw new RunError("Division by zero");
          return Math.floor((l as number) / (r as number));
        }
        case "%": return (l as number) % (r as number);
        case "**": return (l as number) ** (r as number);
        case "==": return l === r;
        case "!=": return l !== r;
        case "<": return (l as number) < (r as number);
        case ">": return (l as number) > (r as number);
        case "<=": return (l as number) <= (r as number);
        case ">=": return (l as number) >= (r as number);
        case "in": {
          if (Array.isArray(r)) return (r as unknown[]).includes(l);
          if (typeof r === "string") return (r as string).includes(String(l));
          return false;
        }
      }
      throw new RunError(`Unknown binary op ${e.op}`);
    }
    case "fstr":
      return e.parts
        .map((p) => pyStr(evalExpr(p, scope, output, ctx)))
        .join("");
    case "call": {
      const args = e.args.map((a) => evalExpr(a, scope, output, ctx));
      if (e.callee.type === "name") {
        const fn = scope[e.callee.name] ?? BUILTINS[e.callee.name];
        if (typeof fn === "function") {
          return (fn as (...args: unknown[]) => unknown).call({ output }, ...args);
        }
        throw new RunError(`'${e.callee.name}' is not a function`);
      }
      const fn = evalExpr(e.callee, scope, output, ctx);
      if (typeof fn === "function") return (fn as (...args: unknown[]) => unknown)(...args);
      throw new RunError("Not callable");
    }
  }
}

type Ctx = { steps: number };

const BUILTINS: Record<string, unknown> = {
  print(this: { output: string[] }, ...args: unknown[]) {
    this.output.push(args.map(pyStr).join(" "));
    return null;
  },
  len(v: unknown) {
    if (typeof v === "string" || Array.isArray(v)) return v.length;
    throw new RunError("len() needs string or list");
  },
  range(a: number, b?: number, step?: number) {
    const out: number[] = [];
    if (b === undefined) {
      for (let i = 0; i < a; i++) out.push(i);
    } else {
      const s = step ?? 1;
      if (s > 0) for (let i = a; i < b; i += s) out.push(i);
      else for (let i = a; i > b; i += s) out.push(i);
    }
    return out;
  },
  sum(arr: number[]) {
    return arr.reduce((a, b) => a + b, 0);
  },
  min(...args: unknown[]) {
    const arr = args.length === 1 && Array.isArray(args[0]) ? (args[0] as number[]) : (args as number[]);
    return Math.min(...arr);
  },
  max(...args: unknown[]) {
    const arr = args.length === 1 && Array.isArray(args[0]) ? (args[0] as number[]) : (args as number[]);
    return Math.max(...arr);
  },
  abs(x: number) {
    return Math.abs(x);
  },
  round(x: number, d = 0) {
    const m = 10 ** d;
    return Math.round(x * m) / m;
  },
  str(x: unknown) {
    return pyStr(x);
  },
  int(x: unknown) {
    if (typeof x === "string") return parseInt(x, 10);
    return Math.trunc(x as number);
  },
  float(x: unknown) {
    if (typeof x === "string") return parseFloat(x);
    return Number(x);
  },
  bool(x: unknown) {
    return toBool(x);
  },
  list(x: unknown) {
    if (Array.isArray(x)) return [...x];
    if (typeof x === "string") return (x as string).split("");
    throw new RunError("list() needs iterable");
  },
  sorted(x: unknown) {
    if (!Array.isArray(x)) throw new RunError("sorted() needs list");
    const copy = [...(x as number[])];
    copy.sort((a, b) => (typeof a === "number" ? a - b : String(a).localeCompare(String(b))));
    return copy;
  },
};

// Execute a block of code. Returns the output string.
export function runPython(code: string): RunResult {
  const output: string[] = [];
  const scope: Scope = {};
  const ctx: Ctx = { steps: 0 };
  try {
    const lines = splitLines(code).map((l) => ({ ...l, text: stripComment(l.text) }));
    execBlock(lines, 0, 0, scope, output, ctx);
    return { output: output.join("\n") };
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    return {
      output: output.join("\n") + (output.length ? "\n" : "") + `Error: ${msg}`,
      error: msg,
    };
  }
}

function findBlockEnd(lines: Line[], start: number, indent: number): number {
  let i = start;
  while (i < lines.length) {
    const l = lines[i];
    if (l.text === "") {
      i++;
      continue;
    }
    if (l.indent <= indent) break;
    i++;
  }
  return i;
}

function execBlock(
  lines: Line[],
  start: number,
  indent: number,
  scope: Scope,
  output: string[],
  ctx: Ctx
): void {
  let i = start;
  while (i < lines.length) {
    const l = lines[i];
    if (l.text === "") {
      i++;
      continue;
    }
    if (l.indent < indent) return;
    if (l.indent > indent) {
      throw new RunError(`Unexpected indent on line ${l.lineNumber}`);
    }
    i = execLine(lines, i, scope, output, ctx);
  }
}

function execLine(
  lines: Line[],
  i: number,
  scope: Scope,
  output: string[],
  ctx: Ctx
): number {
  const line = lines[i];
  const text = line.text;

  // if / elif / else
  if (text.startsWith("if ") && text.endsWith(":")) {
    const cond = text.slice(3, -1);
    const bodyStart = i + 1;
    const blockIndent = line.indent + 2;
    const bodyEnd = findBlockEnd(lines, bodyStart, line.indent);
    const condVal = toBool(evalExpr(parseExpr(cond), scope, output, ctx));
    let taken = condVal;
    if (condVal) {
      execBlock(lines, bodyStart, nextIndent(lines, bodyStart, blockIndent), scope, output, ctx);
    }
    let j = bodyEnd;
    while (j < lines.length && lines[j].indent === line.indent && (lines[j].text.startsWith("elif ") || lines[j].text === "else:")) {
      const branch = lines[j];
      const branchBodyStart = j + 1;
      const branchEnd = findBlockEnd(lines, branchBodyStart, branch.indent);
      if (!taken) {
        if (branch.text === "else:") {
          execBlock(
            lines,
            branchBodyStart,
            nextIndent(lines, branchBodyStart, branch.indent + 2),
            scope,
            output,
            ctx
          );
          taken = true;
        } else {
          const c = branch.text.slice(5, -1);
          if (toBool(evalExpr(parseExpr(c), scope, output, ctx))) {
            execBlock(
              lines,
              branchBodyStart,
              nextIndent(lines, branchBodyStart, branch.indent + 2),
              scope,
              output,
              ctx
            );
            taken = true;
          }
        }
      }
      j = branchEnd;
    }
    return j;
  }

  if (text.startsWith("while ") && text.endsWith(":")) {
    const cond = text.slice(6, -1);
    const bodyStart = i + 1;
    const bodyEnd = findBlockEnd(lines, bodyStart, line.indent);
    let guard = 0;
    while (toBool(evalExpr(parseExpr(cond), scope, output, ctx))) {
      if (guard++ > MAX_STEPS) throw new RunError("Infinite loop detected");
      execBlock(
        lines,
        bodyStart,
        nextIndent(lines, bodyStart, line.indent + 2),
        scope,
        output,
        ctx
      );
    }
    return bodyEnd;
  }

  if (text.startsWith("for ")) {
    const m = text.match(/^for\s+(\w+)\s+in\s+(.+):$/);
    if (!m) throw new RunError(`Bad for-loop: ${text}`);
    const varName = m[1];
    const iterable = evalExpr(parseExpr(m[2]), scope, output, ctx);
    const bodyStart = i + 1;
    const bodyEnd = findBlockEnd(lines, bodyStart, line.indent);
    const items = Array.isArray(iterable)
      ? iterable
      : typeof iterable === "string"
      ? (iterable as string).split("")
      : [];
    for (const item of items) {
      scope[varName] = item;
      execBlock(
        lines,
        bodyStart,
        nextIndent(lines, bodyStart, line.indent + 2),
        scope,
        output,
        ctx
      );
    }
    return bodyEnd;
  }

  if (text.startsWith("def ")) {
    const m = text.match(/^def\s+(\w+)\s*\((.*)\)\s*:$/);
    if (!m) throw new RunError(`Bad def: ${text}`);
    const fnName = m[1];
    const params = m[2]
      .split(",")
      .map((p) => p.trim())
      .filter((p) => p.length > 0);
    const bodyStart = i + 1;
    const bodyEnd = findBlockEnd(lines, bodyStart, line.indent);
    const fnLines = lines.slice(bodyStart, bodyEnd);
    const fnIndent = nextIndent(lines, bodyStart, line.indent + 2);
    scope[fnName] = (...args: unknown[]) => {
      const inner: Scope = { ...scope };
      params.forEach((p, idx) => (inner[p] = args[idx]));
      const innerOut: string[] = [];
      let returned: unknown = null;
      try {
        execBlock(fnLines, 0, fnIndent, inner, innerOut.length ? innerOut : output, ctx);
      } catch (e) {
        if (e instanceof ReturnSignal) returned = e.value;
        else throw e;
      }
      return returned;
    };
    return bodyEnd;
  }

  if (text.startsWith("return")) {
    const rest = text.slice(6).trim();
    const value = rest ? evalExpr(parseExpr(rest), scope, output, ctx) : null;
    throw new ReturnSignal(value);
  }

  // Assignment
  const assignMatch = text.match(/^(\w+)\s*(=|\+=|-=|\*=|\/=)\s*(.+)$/);
  if (assignMatch && !["==", "!=", "<=", ">="].some((op) => text.includes(op + " "))) {
    const [, name, op, rhs] = assignMatch;
    const value = evalExpr(parseExpr(rhs), scope, output, ctx);
    if (op === "=") scope[name] = value;
    else {
      const cur = scope[name] as number;
      if (op === "+=") scope[name] = (cur as number) + (value as number);
      else if (op === "-=") scope[name] = (cur as number) - (value as number);
      else if (op === "*=") scope[name] = (cur as number) * (value as number);
      else if (op === "/=") scope[name] = (cur as number) / (value as number);
    }
    return i + 1;
  }

  // Bare expression (function call etc.)
  evalExpr(parseExpr(text), scope, output, ctx);
  return i + 1;
}

class ReturnSignal {
  constructor(public value: unknown) {}
}

function nextIndent(lines: Line[], start: number, fallback: number): number {
  for (let i = start; i < lines.length; i++) {
    if (lines[i].text !== "") return lines[i].indent;
  }
  return fallback;
}
