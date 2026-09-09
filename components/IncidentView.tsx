"use client";

import { useState } from "react";
import Link from "next/link";
import { CorrelationCaption, CorrelationGraph } from "@/components/CorrelationGraph";
import { GymMap } from "@/components/GymMap";
import { StatusPill } from "@/components/StatusPill";
import { StillFrame } from "@/components/StillFrame";
import { INCIDENT } from "@/data/suirei";

export function IncidentView({ from }: { from?: string }) {
  const [activePin, setActivePin] = useState<string | null>(null);
  const back = from === "assistant" ? { href: "/console/assistant", label: "AIアシスタント" } : null;

  return (
    <section>
      <div className="pageHead">
        <h2>要対応事項</h2>
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
                  {row.id === "gen" ? (
                    <p>
                      <Link className="linkish" href="/console/facilities?view=upkeep&zone=Z05&equip=K-G3&from=incident">
                        K-G3
                      </Link>
                    </p>
                  ) : null}
                  {row.id === "exit" ? (
                    <p>
                      <Link className="linkish" href="/console/facilities?view=upkeep&zone=Z04&equip=K-F4&from=incident">
                        K-F4
                      </Link>
                    </p>
                  ) : null}
                </li>
              ))}
            </ul>
          </article>
        </div>
        <div className="sideStack">
          <article className="card">
            <GymMap activePin={activePin} compact />
          </article>
          <details className="card corrFold">
            <summary>関連付け</summary>
            <div className="corrBody">
              <CorrelationGraph />
              <CorrelationCaption />
            </div>
          </details>
          <article className="card">
            <p className="conclusion">{INCIDENT.conclusion}</p>
            <h3>確認・対応すること</h3>
            <ol className="actions">
              {INCIDENT.actions.map((action) => (
                <li key={action.text}>
                  <Link className="linkish" href={action.href}>
                    {action.text}
                  </Link>
                </li>
              ))}
            </ol>
            <p>
              体育館全体：<StatusPill kind={INCIDENT.judgment} />
            </p>
            {back ? (
              <p>
                <Link className="linkish" href={back.href}>
                  {back.label}
                </Link>
              </p>
            ) : null}
          </article>
        </div>
      </div>
    </section>
  );
}
