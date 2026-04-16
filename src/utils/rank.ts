export type Rank = {
  id: string;
  name: string;
  emoji: string;
  color: string;
  minXp: number;
};

export const XP_PER_LESSON = 100;

export const RANKS: Rank[] = [
  { id: "rookie",   name: "Rookie",      emoji: "🌱", color: "#9ca3af", minXp: 0 },
  { id: "bronze",   name: "Bronze",      emoji: "🥉", color: "#c48a56", minXp: 300 },
  { id: "silver",   name: "Silver",      emoji: "🥈", color: "#a8b2bd", minXp: 700 },
  { id: "gold",     name: "Gold",        emoji: "🥇", color: "#ffc84a", minXp: 1200 },
  { id: "platinum", name: "Platinum",    emoji: "🏆", color: "#6ed3b3", minXp: 1800 },
  { id: "diamond",  name: "Diamond",     emoji: "💎", color: "#6ab7ff", minXp: 2400 },
];

export function rankFor(xp: number): Rank {
  let current = RANKS[0];
  for (const r of RANKS) if (xp >= r.minXp) current = r;
  return current;
}

export function nextRank(xp: number): Rank | null {
  for (const r of RANKS) if (xp < r.minXp) return r;
  return null;
}
