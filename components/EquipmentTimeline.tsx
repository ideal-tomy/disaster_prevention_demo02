"use client";

import Link from "next/link";
import type { FacilityEvent } from "@/data/suirei";

export function EquipmentTimeline({ events }: { events: FacilityEvent[] }) {
  if (events.length === 0) return null;
  return (
    <ol className="eqLine">
      {events.map((event, index) => {
        const dotted = event.kind === "期限" && index < events.length - 1;
        return (
          <li key={event.id} className={dotted ? "eqItem eqDotted" : "eqItem"}>
            <span className="eqDate num">{event.date}</span>
            <span className="eqKind">{event.kind}</span>
            <div>
              <p>{event.body}</p>
              {event.ref ? <p className="eqMeta">{event.ref}</p> : null}
              {event.image ? (
                <Link href={event.href ?? "/console/review"}>
                  <img className="eqThumb" src={event.image} alt="" />
                </Link>
              ) : null}
            </div>
          </li>
        );
      })}
    </ol>
  );
}
