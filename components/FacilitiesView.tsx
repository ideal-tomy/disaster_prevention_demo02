"use client";

import { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { StatusPill } from "@/components/StatusPill";
import { dueLabel, ZONES, type Zone } from "@/data/suirei";

type View = "upkeep" | "open";

const GROUP_AT: Record<string, string> = {
  Z01: "競技場",
  Z02: "動線",
  Z05: "機械",
  Z08: "躯体",
  Z09: "館内",
  Z12: "屋上・空調",
  Z15: "備品・外構",
  Z18: "動線"
};

function Mark({ zone, view }: { zone: Zone; view: View }) {
  const kind = view === "upkeep" ? zone.due : zone.judgment;
  if (kind === "none" || kind === "unknown") return <span className="mark markDashed" />;
  const color =
    kind === "usable" || kind === "recorded"
      ? "var(--ok)"
      : kind === "unusable" || kind === "overdue"
        ? "var(--stop)"
        : "var(--warn)";
  return <span className="mark" style={{ background: color }} />;
}

export function FacilitiesView({ view, zoneId }: { view: View; zoneId?: string }) {
  const router = useRouter();
  const [open, setOpen] = useState<Zone | null>(null);

  useEffect(() => {
    if (!zoneId) return;
    const zone = ZONES.find((item) => item.id === zoneId);
    if (zone?.click === "drawer") setOpen(zone);
  }, [zoneId]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const go = (next: View) => {
    router.push(next === "upkeep" ? "/console/facilities?view=upkeep" : "/console/facilities?view=open");
  };

  return (
    <section>
      <div className="pageHead">
        <h2>設備・場所</h2>
      </div>
      <div className="toolbar">
        <div
          className="seg"
          role="group"
          aria-label="保全と開館"
          onKeyDown={(event) => {
            if (event.key === "ArrowRight") go("open");
            if (event.key === "ArrowLeft") go("upkeep");
          }}
        >
          <button type="button" aria-pressed={view === "upkeep"} onClick={() => go("upkeep")}>
            保全
          </button>
          <button type="button" aria-pressed={view === "open"} onClick={() => go("open")}>
            開館
          </button>
        </div>
      </div>
      <div className="tableWrap">
        <table className="fac">
          <thead>
            <tr>
              <th>場所</th>
              <th>種別</th>
              <th>業者</th>
              {view === "upkeep" ? <th>期限</th> : <th>判定</th>}
              {view === "open" ? <th>理由</th> : null}
            </tr>
          </thead>
          <tbody>
            {ZONES.map((zone) => (
              <Fragment key={zone.id}>
                {GROUP_AT[zone.id] ? (
                  <tr className="groupRow">
                    <td colSpan={view === "open" ? 5 : 4}>{GROUP_AT[zone.id]}</td>
                  </tr>
                ) : null}
                <tr
                  className={[open?.id === zone.id ? "current" : "", zone.due === "overdue" ? "overdue" : ""]
                    .filter(Boolean)
                    .join(" ")}
                  onClick={() => {
                    if (zone.click === "incident") router.push("/console/incident");
                    else setOpen(zone);
                  }}
                >
                  <td>
                    <Mark zone={zone} view={view} />
                    {zone.name}
                  </td>
                  <td className="fadeCell">{zone.kind}</td>
                  <td className="fadeCell">{zone.vendor}</td>
                  {view === "upkeep" ? (
                    <td className="dueCell num">{dueLabel(zone.due)}</td>
                  ) : (
                    <>
                      <td className="fadeCell">
                        <StatusPill kind={zone.judgment} />
                      </td>
                      <td className="fadeCell">{zone.reason}</td>
                    </>
                  )}
                </tr>
              </Fragment>
            ))}
          </tbody>
        </table>
      </div>
      {open ? (
        <>
          <button type="button" className="drawerBackdrop" aria-label="閉じる" onClick={() => setOpen(null)} />
          <aside className="drawer" role="dialog" aria-label={open.name}>
            <button type="button" className="btn btnGhost" onClick={() => setOpen(null)}>
              閉じる
            </button>
            <h3>{open.name}</h3>
            <p className="pathLine">{open.path}</p>
            <StatusPill kind={open.judgment} />
            <div className="kv">
              <span>業者</span>
              <div>{open.vendor}</div>
              <span>保全</span>
              <div>{dueLabel(open.due)}</div>
              <span>根拠</span>
              <div>{open.basis}</div>
              <span>ナレッジ</span>
              <div>{open.knowledge}</div>
              <span>記録日</span>
              <div className="num">{open.recordDate}</div>
              <span>確認者</span>
              <div>{open.confirmer}</div>
              <span>写真</span>
              <div>{open.photo}</div>
            </div>
          </aside>
        </>
      ) : null}
    </section>
  );
}
