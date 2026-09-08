"use client";

import { CAMERAS, MAP_PINS, pinColor, type Judgment } from "@/data/suirei";

type Props = {
  activePin?: string | null;
  compact?: boolean;
};

function colorOf(j: Judgment) {
  return pinColor(j);
}

export function GymMap({ activePin = null, compact = false }: Props) {
  return (
    <svg className={compact ? "mapSvg mapSvgCompact" : "mapSvg"} viewBox="0 0 100 100" role="img" aria-label="翠嶺市総合体育館の模式">
      <rect x="8" y="16" width="84" height="72" rx="2" fill="#f7f8fa" stroke="#e4e8ee" />
      <rect x="28" y="28" width="40" height="42" fill="#eef1f4" stroke="#e4e8ee" />
      <rect x="68" y="32" width="16" height="22" fill="#f7f8fa" stroke="#e4e8ee" />
      <text x="50" y="12" textAnchor="middle" fontSize="3.2" fill="#5e6a78">
        北
      </text>
      {MAP_PINS.map((pin) => {
        const color = colorOf(pin.judgment);
        const dim = activePin && activePin !== pin.id ? 0.35 : 1;
        return (
          <a key={pin.id} href={pin.href} aria-label={pin.name}>
            <g opacity={dim}>
              <circle
                cx={pin.left}
                cy={pin.top}
                r={pin.id === "Z01" || pin.id === "Z02" ? 2.2 : 1.6}
                fill={pin.dashed ? "none" : color}
                stroke={color}
                strokeDasharray={pin.dashed ? "1.2 0.8" : undefined}
                strokeWidth="0.7"
              />
              <text x={pin.left + 2.4} y={pin.top + 1} fontSize="2.6" fill="#1c2430">
                {pin.name}
              </text>
            </g>
          </a>
        );
      })}
      {CAMERAS.map((cam) => {
        const dim = activePin && activePin !== cam.pinId ? 0.35 : 1;
        return (
          <text key={cam.id} x={cam.left} y={cam.top} fontSize="2.4" fill="#5b4db7" opacity={dim}>
            {cam.id}
          </text>
        );
      })}
    </svg>
  );
}
