"use client";

import { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { StatusPill } from "@/components/StatusPill";
import { EquipmentTimeline } from "@/components/EquipmentTimeline";
import {
  EMPTY_ZONE_NOTE,
  FACILITY,
  dueLabel,
  equipmentForZone,
  eventsFor,
  knowledgeLabel,
  recordEventsForZone,
  ZONES,
  type Zone
} from "@/data/suirei";

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

export function FacilitiesView({
  view,
  zoneId,
  equipId,
  from
}: {
  view: View;
  zoneId?: string;
  equipId?: string;
  from?: string;
}) {
  const router = useRouter();
  const [open, setOpen] = useState<Zone | null>(null);

  useEffect(() => {
    if (!zoneId) return;
    const zone = ZONES.find((item) => item.id === zoneId);
    if (zone?.click === "drawer") setOpen(zone);
    if (equipId) {
      const equip = equipmentForZone(zoneId).find((row) => row.id === equipId) ?? equipmentForZone(zoneId)[0];
      if (equip && zone?.click === "incident") setOpen(zone);
    }
  }, [zoneId, equipId]);

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

  const back =
    from === "incident"
      ? { href: "/console/incident", label: "要対応事項" }
      : from === "review"
        ? { href: "/console/review", label: "画像確認" }
        :     from === "documents"
      ? { href: "/console/documents", label: "点検・開館前の記録" }
      : from === "assistant"
        ? { href: "/console/assistant", label: "AIアシスタント" }
        : null;

  return (
    <section>
      <div className="pageHead">
        <h2>場所・設備一覧</h2>
      </div>
      <dl className="bldgLine">
        <div>
          <dt>施設</dt>
          <dd>
            {FACILITY.name}　{FACILITY.id}
          </dd>
        </div>
        <div>
          <dt>指定</dt>
          <dd>{FACILITY.designation}</dd>
        </div>
        <div>
          <dt>竣工</dt>
          <dd>{FACILITY.built}</dd>
        </div>
        <div>
          <dt>延べ面積</dt>
          <dd className="num">{FACILITY.area}</dd>
        </div>
        <div>
          <dt>記録</dt>
          <dd>
            <Link href="/console/integrations">{FACILITY.records}</Link>
          </dd>
        </div>
      </dl>
      <div className="toolbar">
        <div
          className="seg"
          role="group"
          aria-label="点検・対応状況と利用可否の切り替え"
          onKeyDown={(event) => {
            if (event.key === "ArrowRight") go("open");
            if (event.key === "ArrowLeft") go("upkeep");
          }}
        >
          <button type="button" aria-pressed={view === "upkeep"} onClick={() => go("upkeep")}>
            点検・対応状況
          </button>
          <button type="button" aria-pressed={view === "open"} onClick={() => go("open")}>
            利用可否
          </button>
        </div>
      </div>
      <div className="tableWrap">
        <table className="fac">
          <thead>
            <tr>
              <th>場所・設備</th>
              <th>種別</th>
              <th>管理・点検担当</th>
              {view === "upkeep" ? <th>点検・対応状況</th> : <th>利用判定</th>}
              {view === "open" ? <th>判定の理由・確認記録</th> : null}
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
                  className={open?.id === zone.id ? "current" : undefined}
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
                    <td
                      className={[
                        "dueCell",
                        "num",
                        zone.due === "overdue" ? "dueOverdue" : zone.due === "thisMonth" ? "dueMonth" : "dueQuiet"
                      ].join(" ")}
                    >
                      {dueLabel(zone.due)}
                    </td>
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
              <span>担当</span>
              <div>{open.vendor}</div>
              <span>点検・対応</span>
              <div>{dueLabel(open.due)}</div>
              <span>判定の根拠</span>
              <div>{open.basis}</div>
              <span>参照基準</span>
              <div>{knowledgeLabel(open.knowledge)}</div>
              <span>記録日</span>
              <div className="num">{open.recordDate}</div>
              <span>記録の確認者</span>
              <div>{open.confirmer}</div>
              <span>写真</span>
              <div>{open.photo}</div>
            </div>
            {(equipId
              ? equipmentForZone(open.id).filter((equip) => equip.id === equipId)
              : equipmentForZone(open.id)
            ).map((equip) => (
              <div key={equip.id}>
                <h4 className="eqName">{equip.name}</h4>
                <EquipmentTimeline events={eventsFor(equip.id)} />
              </div>
            ))}
            {equipmentForZone(open.id).length === 0 && recordEventsForZone(open).length > 0 ? (
              <EquipmentTimeline events={recordEventsForZone(open)} />
            ) : null}
            {equipmentForZone(open.id).length === 0 && recordEventsForZone(open).length === 0 && EMPTY_ZONE_NOTE[open.id] ? (
              <p className="eqEmpty">{EMPTY_ZONE_NOTE[open.id]}</p>
            ) : null}
            {back ? (
              <p>
                <Link className="linkish" href={back.href}>
                  {back.label}
                </Link>
              </p>
            ) : null}
          </aside>
        </>
      ) : null}
    </section>
  );
}
