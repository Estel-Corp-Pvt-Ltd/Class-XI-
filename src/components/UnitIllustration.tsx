"use client";

type Props = { kind: string; className?: string };

export default function UnitIllustration({ kind, className = "" }: Props) {
  switch (kind) {
    case "unit1":
      return <RobotBrain className={className} />;
    case "unit2":
      return <Rocket className={className} />;
    case "unit3":
      return <PythonSnake className={className} />;
    case "unit4":
      return <BuildingBlocks className={className} />;
    case "unit5":
      return <ChartBars className={className} />;
    case "unit6":
      return <Gears className={className} />;
    case "unit7":
      return <SpeechBubble className={className} />;
    case "unit8":
      return <Balance className={className} />;
    case "unit9":
      return <NeuralIcon className={className} />;
    default:
      return null;
  }
}

function RobotBrain({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className}>
      <rect x="20" y="25" width="60" height="55" rx="12" fill="#ff6b6b" stroke="#1a1a1a" strokeWidth="3" />
      <circle cx="35" cy="45" r="6" fill="#fff" stroke="#1a1a1a" strokeWidth="2" />
      <circle cx="35" cy="45" r="3" fill="#1a1a1a">
        <animate attributeName="cx" values="33;37;33" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="65" cy="45" r="6" fill="#fff" stroke="#1a1a1a" strokeWidth="2" />
      <circle cx="65" cy="45" r="3" fill="#1a1a1a">
        <animate attributeName="cx" values="63;67;63" dur="3s" repeatCount="indefinite" />
      </circle>
      <path d="M 38 65 Q 50 72 62 65" fill="none" stroke="#1a1a1a" strokeWidth="3" strokeLinecap="round" />
      <line x1="50" y1="25" x2="50" y2="15" stroke="#1a1a1a" strokeWidth="3" />
      <circle cx="50" cy="13" r="4" fill="#ffd36b" stroke="#1a1a1a" strokeWidth="2">
        <animate attributeName="r" values="4;5;4" dur="1.5s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

function Rocket({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className}>
      <path d="M 50 15 Q 65 30 65 55 L 65 70 L 35 70 L 35 55 Q 35 30 50 15 Z" fill="#b794f6" stroke="#1a1a1a" strokeWidth="3" />
      <circle cx="50" cy="40" r="7" fill="#fff" stroke="#1a1a1a" strokeWidth="2" />
      <circle cx="50" cy="40" r="3" fill="#6ab7ff" />
      <path d="M 35 60 L 25 75 L 35 70 Z" fill="#ff6b6b" stroke="#1a1a1a" strokeWidth="2" />
      <path d="M 65 60 L 75 75 L 65 70 Z" fill="#ff6b6b" stroke="#1a1a1a" strokeWidth="2" />
      <path d="M 45 70 L 50 88 L 55 70 Z" fill="#ffd36b" stroke="#1a1a1a" strokeWidth="2">
        <animate attributeName="d" values="M 45 70 L 50 88 L 55 70 Z; M 45 70 L 50 95 L 55 70 Z; M 45 70 L 50 88 L 55 70 Z" dur="0.4s" repeatCount="indefinite" />
      </path>
    </svg>
  );
}

function PythonSnake({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className}>
      <path d="M 25 35 Q 50 25 75 35 Q 75 50 50 50 Q 25 50 25 65 Q 50 75 75 65" fill="none" stroke="#6ab7ff" strokeWidth="10" strokeLinecap="round" />
      <path d="M 25 35 Q 50 25 75 35 Q 75 50 50 50 Q 25 50 25 65 Q 50 75 75 65" fill="none" stroke="#ffd36b" strokeWidth="10" strokeLinecap="round" strokeDasharray="15 60">
        <animate attributeName="stroke-dashoffset" values="0;-75" dur="3s" repeatCount="indefinite" />
      </path>
      <circle cx="75" cy="65" r="4" fill="#1a1a1a" />
      <circle cx="72" cy="63" r="1" fill="#fff" />
    </svg>
  );
}

function BuildingBlocks({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className}>
      <rect x="20" y="55" width="25" height="25" fill="#ffd36b" stroke="#1a1a1a" strokeWidth="3" />
      <rect x="50" y="55" width="25" height="25" fill="#6ed3b3" stroke="#1a1a1a" strokeWidth="3" />
      <rect x="35" y="28" width="25" height="25" fill="#ff6b6b" stroke="#1a1a1a" strokeWidth="3">
        <animate attributeName="y" values="28;20;28" dur="2s" repeatCount="indefinite" />
      </rect>
      <circle cx="47" cy="20" r="5" fill="#6ab7ff" stroke="#1a1a1a" strokeWidth="2">
        <animate attributeName="cy" values="20;10;20" dur="2s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

function ChartBars({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className}>
      <line x1="15" y1="80" x2="85" y2="80" stroke="#1a1a1a" strokeWidth="3" />
      <line x1="15" y1="20" x2="15" y2="80" stroke="#1a1a1a" strokeWidth="3" />
      <rect x="22" y="55" width="12" height="25" fill="#6ab7ff" stroke="#1a1a1a" strokeWidth="2">
        <animate attributeName="y" values="80;55;55" dur="1.2s" fill="freeze" />
        <animate attributeName="height" values="0;25;25" dur="1.2s" fill="freeze" />
      </rect>
      <rect x="38" y="40" width="12" height="40" fill="#ff6b6b" stroke="#1a1a1a" strokeWidth="2">
        <animate attributeName="y" values="80;40;40" dur="1.4s" fill="freeze" />
        <animate attributeName="height" values="0;40;40" dur="1.4s" fill="freeze" />
      </rect>
      <rect x="54" y="30" width="12" height="50" fill="#6ed3b3" stroke="#1a1a1a" strokeWidth="2">
        <animate attributeName="y" values="80;30;30" dur="1.6s" fill="freeze" />
        <animate attributeName="height" values="0;50;50" dur="1.6s" fill="freeze" />
      </rect>
      <rect x="70" y="45" width="12" height="35" fill="#ffd36b" stroke="#1a1a1a" strokeWidth="2">
        <animate attributeName="y" values="80;45;45" dur="1.8s" fill="freeze" />
        <animate attributeName="height" values="0;35;35" dur="1.8s" fill="freeze" />
      </rect>
    </svg>
  );
}

function Gears({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className}>
      <g transform="translate(38,45)">
        <g>
          <path d="M 0 -18 L 4 -18 L 4 -14 L 0 -14 Z M 12.73 -12.73 L 15.55 -9.9 L 12.73 -7.07 L 9.9 -9.9 Z M 18 0 L 18 4 L 14 4 L 14 0 Z M 12.73 12.73 L 15.55 15.55 L 12.73 18.38 L 9.9 15.55 Z M 0 14 L 4 14 L 4 18 L 0 18 Z M -12.73 12.73 L -9.9 15.55 L -12.73 18.38 L -15.55 15.55 Z M -18 0 L -14 0 L -14 4 L -18 4 Z M -12.73 -12.73 L -9.9 -9.9 L -12.73 -7.07 L -15.55 -9.9 Z" fill="#ff8fa3" stroke="#1a1a1a" strokeWidth="2" />
          <circle r="11" fill="#ff8fa3" stroke="#1a1a1a" strokeWidth="2" />
          <circle r="4" fill="#1a1a1a" />
          <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="6s" repeatCount="indefinite" />
        </g>
      </g>
      <g transform="translate(68,62)">
        <g>
          <circle r="8" fill="#6ed3b3" stroke="#1a1a1a" strokeWidth="2" />
          <circle r="2.5" fill="#1a1a1a" />
          <rect x="-1.5" y="-13" width="3" height="4" fill="#6ed3b3" stroke="#1a1a1a" strokeWidth="1.5" />
          <rect x="-1.5" y="9" width="3" height="4" fill="#6ed3b3" stroke="#1a1a1a" strokeWidth="1.5" />
          <rect x="9" y="-1.5" width="4" height="3" fill="#6ed3b3" stroke="#1a1a1a" strokeWidth="1.5" />
          <rect x="-13" y="-1.5" width="4" height="3" fill="#6ed3b3" stroke="#1a1a1a" strokeWidth="1.5" />
          <animateTransform attributeName="transform" type="rotate" from="360" to="0" dur="4s" repeatCount="indefinite" />
        </g>
      </g>
    </svg>
  );
}

function SpeechBubble({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className}>
      <path d="M 15 25 Q 15 18 22 18 L 78 18 Q 85 18 85 25 L 85 55 Q 85 62 78 62 L 45 62 L 32 75 L 35 62 L 22 62 Q 15 62 15 55 Z" fill="#6ab7ff" stroke="#1a1a1a" strokeWidth="3" />
      <circle cx="35" cy="40" r="3" fill="#fff">
        <animate attributeName="r" values="3;4;3" dur="0.8s" repeatCount="indefinite" begin="0s" />
      </circle>
      <circle cx="50" cy="40" r="3" fill="#fff">
        <animate attributeName="r" values="3;4;3" dur="0.8s" repeatCount="indefinite" begin="0.25s" />
      </circle>
      <circle cx="65" cy="40" r="3" fill="#fff">
        <animate attributeName="r" values="3;4;3" dur="0.8s" repeatCount="indefinite" begin="0.5s" />
      </circle>
    </svg>
  );
}

function Balance({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className}>
      <line x1="50" y1="20" x2="50" y2="80" stroke="#1a1a1a" strokeWidth="4" />
      <rect x="40" y="78" width="20" height="6" fill="#1a1a1a" />
      <g>
        <line x1="22" y1="35" x2="78" y2="35" stroke="#1a1a1a" strokeWidth="4" />
        <line x1="22" y1="35" x2="22" y2="50" stroke="#1a1a1a" strokeWidth="2" strokeDasharray="2 2" />
        <line x1="78" y1="35" x2="78" y2="50" stroke="#1a1a1a" strokeWidth="2" strokeDasharray="2 2" />
        <path d="M 14 50 L 30 50 L 26 60 L 18 60 Z" fill="#ff6b6b" stroke="#1a1a1a" strokeWidth="2" />
        <path d="M 70 50 L 86 50 L 82 60 L 74 60 Z" fill="#6ed3b3" stroke="#1a1a1a" strokeWidth="2" />
        <animateTransform attributeName="transform" type="rotate" values="-6 50 35; 6 50 35; -6 50 35" dur="3s" repeatCount="indefinite" />
      </g>
      <circle cx="50" cy="20" r="6" fill="#ffd36b" stroke="#1a1a1a" strokeWidth="2" />
    </svg>
  );
}

function NeuralIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className}>
      <line x1="25" y1="30" x2="50" y2="30" stroke="#1a1a1a" strokeWidth="2" />
      <line x1="25" y1="30" x2="50" y2="50" stroke="#1a1a1a" strokeWidth="2" />
      <line x1="25" y1="30" x2="50" y2="70" stroke="#1a1a1a" strokeWidth="2" />
      <line x1="25" y1="70" x2="50" y2="30" stroke="#1a1a1a" strokeWidth="2" />
      <line x1="25" y1="70" x2="50" y2="50" stroke="#1a1a1a" strokeWidth="2" />
      <line x1="25" y1="70" x2="50" y2="70" stroke="#1a1a1a" strokeWidth="2" />
      <line x1="50" y1="30" x2="75" y2="50" stroke="#1a1a1a" strokeWidth="2" />
      <line x1="50" y1="50" x2="75" y2="50" stroke="#1a1a1a" strokeWidth="2" />
      <line x1="50" y1="70" x2="75" y2="50" stroke="#1a1a1a" strokeWidth="2" />
      <circle cx="25" cy="30" r="7" fill="#ff6b6b" stroke="#1a1a1a" strokeWidth="2">
        <animate attributeName="r" values="7;9;7" dur="1.6s" repeatCount="indefinite" begin="0s" />
      </circle>
      <circle cx="25" cy="70" r="7" fill="#ff6b6b" stroke="#1a1a1a" strokeWidth="2">
        <animate attributeName="r" values="7;9;7" dur="1.6s" repeatCount="indefinite" begin="0.2s" />
      </circle>
      <circle cx="50" cy="30" r="7" fill="#6ab7ff" stroke="#1a1a1a" strokeWidth="2" />
      <circle cx="50" cy="50" r="7" fill="#6ab7ff" stroke="#1a1a1a" strokeWidth="2" />
      <circle cx="50" cy="70" r="7" fill="#6ab7ff" stroke="#1a1a1a" strokeWidth="2" />
      <circle cx="75" cy="50" r="7" fill="#6ed3b3" stroke="#1a1a1a" strokeWidth="2">
        <animate attributeName="r" values="7;9;7" dur="1.6s" repeatCount="indefinite" begin="0.4s" />
      </circle>
    </svg>
  );
}
