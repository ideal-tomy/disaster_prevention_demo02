"use client";

import { INCIDENT } from "@/data/suirei";

export function CorrelationGraph() {
  return (
    <svg className="corrSvg" viewBox="0 0 240 150" aria-hidden>
      <line x1="120" y1="75" x2="48" y2="28" stroke="#e4e8ee" strokeWidth="1.2" />
      <line x1="120" y1="75" x2="192" y2="28" stroke="#e4e8ee" strokeWidth="1.2" />
      <line x1="120" y1="75" x2="48" y2="122" stroke="#e4e8ee" strokeWidth="1.2" />
      <line x1="120" y1="75" x2="192" y2="122" stroke="#e4e8ee" strokeWidth="1.2" />
      <rect x="78" y="62" width="84" height="26" rx="4" fill="#f3f1fb" />
      <text x="120" y="79" textAnchor="middle" fontSize="11" fill="#5b4db7">
        総合体育館
      </text>
      <rect x="8" y="14" width="80" height="22" rx="4" fill="#fff" stroke="#e4e8ee" />
      <text x="48" y="29" textAnchor="middle" fontSize="10" fill="#1c2430">
        搬入口
      </text>
      <rect x="152" y="14" width="80" height="22" rx="4" fill="#fff" stroke="#e4e8ee" />
      <text x="192" y="29" textAnchor="middle" fontSize="10" fill="#1c2430">
        非常口
      </text>
      <rect x="8" y="110" width="80" height="22" rx="4" fill="#fff" stroke="#e4e8ee" />
      <text x="48" y="125" textAnchor="middle" fontSize="10" fill="#1c2430">
        北側入口
      </text>
      <rect x="152" y="110" width="80" height="22" rx="4" fill="#fff" stroke="#e4e8ee" />
      <text x="192" y="125" textAnchor="middle" fontSize="10" fill="#1c2430">
        点検記録
      </text>
    </svg>
  );
}

export function CorrelationCaption() {
  return (
    <p className="corrCap">
      関連付け：{INCIDENT.confidence}%（デモ値）。{INCIDENT.confidenceNote}
    </p>
  );
}
