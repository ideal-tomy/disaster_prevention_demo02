"use client";

import { useState } from "react";
import { CorrelationCaption, CorrelationGraph } from "@/components/CorrelationGraph";
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
      </div>
      <div className="incidentGrid">
        <div className="timeline">
          {INCIDENT.frames.map((frame) => (
            <article key={frame.id} className={frame.id === "b3" ? "tlNow" : undefined}>
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
                note={frame.id === "b3" ? frame.note : undefined}
                box={frame.box}
                label={frame.label}
              />
            </article>
          ))}
          <article className="card">
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
            <GymMap activePin={activePin} compact />
          </article>
          <article className="card">
            <CorrelationGraph />
            <CorrelationCaption />
          </article>
          <article className="card">
            <p className="conclusion">{INCIDENT.conclusion}</p>
            <ol className="actions">
              {INCIDENT.actions.map((action) => (
                <li key={action}>{action}</li>
              ))}
            </ol>
            <p>
              <StatusPill kind={INCIDENT.judgment} />
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
