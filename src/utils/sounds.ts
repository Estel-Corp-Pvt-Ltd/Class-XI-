"use client";

// Tiny Web Audio API sound library. No assets — generated on the fly.
// Sounds are short, classroom-friendly, and never autoplay.

let ctx: AudioContext | null = null;
let muted = false;

function getCtx(): AudioContext | null {
  if (typeof window === "undefined") return null;
  if (!ctx) {
    const AC = window.AudioContext ?? (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AC) return null;
    ctx = new AC();
  }
  if (ctx.state === "suspended") ctx.resume().catch(() => {});
  return ctx;
}

function blip(freq: number, duration: number, type: OscillatorType = "sine", gain = 0.15) {
  if (muted) return;
  const c = getCtx();
  if (!c) return;
  const osc = c.createOscillator();
  const g = c.createGain();
  osc.type = type;
  osc.frequency.value = freq;
  g.gain.setValueAtTime(0, c.currentTime);
  g.gain.linearRampToValueAtTime(gain, c.currentTime + 0.01);
  g.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + duration);
  osc.connect(g);
  g.connect(c.destination);
  osc.start();
  osc.stop(c.currentTime + duration);
}

export function playClick() {
  blip(680, 0.07, "square", 0.08);
}

export function playCorrect() {
  blip(660, 0.12, "sine", 0.18);
  setTimeout(() => blip(880, 0.16, "sine", 0.18), 90);
}

export function playWrong() {
  blip(220, 0.16, "sawtooth", 0.12);
  setTimeout(() => blip(180, 0.18, "sawtooth", 0.1), 100);
}

export function playComplete() {
  const notes = [523, 659, 784, 1047];
  notes.forEach((n, i) => setTimeout(() => blip(n, 0.22, "triangle", 0.18), i * 90));
}

export function playWhoosh() {
  if (muted) return;
  const c = getCtx();
  if (!c) return;
  const buffer = c.createBuffer(1, 0.25 * c.sampleRate, c.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < data.length; i++) {
    data[i] = (Math.random() * 2 - 1) * (1 - i / data.length) * 0.3;
  }
  const src = c.createBufferSource();
  const g = c.createGain();
  const filter = c.createBiquadFilter();
  filter.type = "bandpass";
  filter.frequency.value = 800;
  src.buffer = buffer;
  src.connect(filter);
  filter.connect(g);
  g.gain.value = 0.3;
  g.connect(c.destination);
  src.start();
}

export function setMuted(m: boolean) {
  muted = m;
  if (typeof window !== "undefined") {
    window.localStorage.setItem("ai-sparks-muted", m ? "1" : "0");
  }
}

export function isMuted() {
  if (typeof window === "undefined") return false;
  return window.localStorage.getItem("ai-sparks-muted") === "1";
}

if (typeof window !== "undefined") {
  muted = isMuted();
}
