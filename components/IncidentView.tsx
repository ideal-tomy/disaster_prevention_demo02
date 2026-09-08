"use client";

import { useState } from "react";
import { GymMap } from "@/components/GymMap";
import { StatusPill } from "@/components/StatusPill";
import { StillFrame } from "@/components/StillFrame";
import { INCIDENT } from "@/data/suirei";

export function IncidentView() {
  const [activePin, setActivePin] = useState<string | null>(null);

  return (
    <section>
      <div className="pageHead">
        <h2>インシデント</h2>
        <p>抽出した静止画と、平常時の点検</p>
      </div>
      <div className="incidentGrid">
        <div className="timeline">
          {INCIDENT.frames.map((frame) => (
            <article key={frame.id}>
              <button type="button" className="tlBtn" onClick={() => setActivePin(frame.pinId)}>
                <span className="tlTime">
                  <strong className="num">{frame.time}</strong> {frame.ago} · {frame.label}
                </span>
              </button>
              <StillFrame
                src={frame.file}
                fileName={frame.fileName}
                cameraId={frame.cameraId}
                caption={frame.caption}
                note={frame.note}
                box={frame.box}
                label={frame.label}
              />
            </article>
          ))}
          <article className="card">
            <label>平常時</label>
            <ul className="recordList">
              {INCIDENT.records.map((row) => (
                <li key={row.id}>
                  <button type="button" className="tlBtn" onClick={() => setActivePin(row.pinId)}>
                    {row.text}
                  </button>
                </li>
              ))}
            </ul>
          </article>
        </div>
        <div className="sideStack">
          <article className="card">
            <label>棟の場所</label>
            <GymMap activePin={activePin} compact />
          </article>
          <article className="card">
            <label>相関</label>
            <div className="graph" aria-hidden>
              <span className="node" style={{ left: 8, top: 18 }}>
                搬入口
              </span>
              <span className="node" style={{ left: 8, top: 148 }}>
                北側入口
              </span>
              <span className="node" style={{ right: 8, top: 18 }}>
                非常口
              </span>
              <span className="node" style={{ right: 8, top: 148 }}>
                点検記録
              </span>
              <span className="node nodeCenter">総合</span>
            </div>
            <p className="hint">
              {INCIDENT.confidence}% {INCIDENT.confidenceNote}
            </p>
            <p>{INCIDENT.conclusion}</p>
          </article>
          <article className="card">
            <label>推奨アクション</label>
            <ol className="actions">
              {INCIDENT.actions.map((action) => (
                <li key={action}>{action}</li>
              ))}
            </ol>
            <p>
              判定: <StatusPill kind={INCIDENT.judgment} />
            </p>
            <p>アリーナは使える</p>
            <p style={{ color: "var(--muted)" }}>確認してください</p>
          </article>
        </div>
      </div>
    </section>
  );
}
