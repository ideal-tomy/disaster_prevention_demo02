"use client";

import { useState } from "react";
import { DOC_MAP, LEDGER_DOC, OPENING_DOC } from "@/data/suirei";
import { useReview } from "@/components/ReviewState";

export function DocumentsView() {
  const { confirmer } = useReview();
  const [pair, setPair] = useState("");

  return (
    <section>
      <div className="pageHead">
        <h2>書類</h2>
      </div>
      <div className="docGrid">
        <article className="card docSheet paper">
          <h3>開館前チェック</h3>
          {OPENING_DOC.filter((row) => row.key !== "note" && row.key !== "title").map((row) => (
            <div
              className={row.pair && pair === row.pair ? "docRow lit" : "docRow"}
              key={row.key}
              onMouseEnter={() => setPair(row.pair)}
              onMouseLeave={() => setPair("")}
            >
              <span>{row.label}</span>
              <div>{row.key === "who" ? confirmer : row.value}</div>
            </div>
          ))}
        </article>
        <article className="card docSheet paper">
          <h3>設備点検記録簿</h3>
          {LEDGER_DOC.filter((row) => row.key !== "title").map((row) => (
            <div
              className={row.pair && pair === row.pair ? "docRow lit" : "docRow"}
              key={row.key}
              onMouseEnter={() => setPair(row.pair)}
              onMouseLeave={() => setPair("")}
            >
              <span>{row.label}</span>
              <div>{row.value}</div>
            </div>
          ))}
        </article>
      </div>
      <table className="mapTable">
        <thead>
          <tr>
            <th>点検記録簿</th>
            <th>開館前チェック</th>
          </tr>
        </thead>
        <tbody>
          {DOC_MAP.map((row) => (
            <tr
              key={row.id}
              className={pair === row.id ? "lit" : undefined}
              onMouseEnter={() => setPair(row.id)}
              onMouseLeave={() => setPair("")}
            >
              <td>{row.left}</td>
              <td>{row.right}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
