"use client";

import { CAMERAS, MAP_PINS, pinColor, type MapPin } from "@/data/suirei";

type Props = {
  activePin?: string | null;
  compact?: boolean;
};

function labelOf(pin: MapPin) {
  if (pin.id === "Z01") return { x: 45, y: 41.5, anchor: "middle" as const };
  if (pin.id === "Z02") return { x: 88, y: 49.5, anchor: "middle" as const };
  if (pin.top < 12) return { x: pin.left - 4, y: 12, anchor: "end" as const };
  if (pin.left < 16) return { x: pin.left + 4, y: pin.top + 0.6, anchor: "start" as const };
  if (pin.left > 82) return { x: pin.left - 4, y: pin.top - 3.2, anchor: "end" as const };
  return { x: pin.left, y: pin.top - 3.4, anchor: "middle" as const };
}

export function GymMap({ activePin = null, compact = false }: Props) {
  return (
    <svg className={compact ? "mapSvg mapSvgCompact" : "mapSvg"} viewBox="0 0 100 100" role="img" aria-label="翠嶺市総合体育館の場所・設備の配置図">
      <rect x="6" y="20" width="88" height="72" rx="1.5" fill="#f7f8fa" stroke="#e4e8ee" />
      <rect x="24" y="30" width="42" height="38" fill="#eef1f4" stroke="#e4e8ee" />
      <rect x="66" y="32" width="18" height="24" fill="#f4f6f8" stroke="#e4e8ee" />
      <rect x="82" y="52" width="12" height="16" fill="#eef1f4" stroke="#e4e8ee" />
      <rect x="6" y="40" width="14" height="14" fill="#f4f6f8" stroke="#e4e8ee" />
      <rect x="58" y="74" width="22" height="14" fill="#f4f6f8" stroke="#e4e8ee" />
      <rect x="6" y="62" width="12" height="14" fill="#f4f6f8" stroke="#e4e8ee" />
      {MAP_PINS.map((pin) => {
        const color = pinColor(pin.judgment);
        const dim = activePin && activePin !== pin.id ? 0.28 : 1;
        const named = compact
          ? activePin === pin.id
          : pin.id === "Z01" || pin.id === "Z02" || activePin === pin.id;
        const label = labelOf(pin);
        return (
          <a key={pin.id} href={pin.href} aria-label={pin.name}>
            <g opacity={dim}>
              <circle
                cx={pin.left}
                cy={pin.top}
                r={pin.id === "Z01" || pin.id === "Z02" ? 2.1 : 1.5}
                fill={pin.dashed ? "none" : color}
                stroke={color}
                strokeDasharray={pin.dashed ? "1.2 0.8" : undefined}
                strokeWidth="0.7"
              />
              {named ? (
                <text x={label.x} y={label.y} textAnchor={label.anchor} fontSize="2.6" fill="#1c2430">
                  {pin.name}
                </text>
              ) : null}
            </g>
          </a>
        );
      })}
      {CAMERAS.map((cam) => {
        const on = !activePin || activePin === cam.pinId;
        const points =
          cam.id === "N02"
            ? "50,8 48.4,11.2 51.6,11.2"
            : cam.id === "E01"
              ? "96,56 92.8,54.4 92.8,57.6"
              : "4,46 7.2,44.4 7.2,47.6";
        const idX = cam.id === "E01" ? 86 : cam.id === "W03" ? 8 : 50;
        const idY = cam.id === "N02" ? 16 : cam.top + 5;
        return (
          <g key={cam.id} opacity={on ? 1 : 0.28}>
            <polygon points={points} fill="#5b4db7" />
            {activePin === cam.pinId ? (
              <text x={idX} y={idY} textAnchor="middle" fontSize="2.3" fill="#5b4db7">
                {cam.id}
              </text>
            ) : null}
          </g>
        );
      })}
    </svg>
  );
}
