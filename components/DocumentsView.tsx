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
        <p>同じ記録から、開館前チェックと点検簿</p>
      </div>
      <p className="hint" style={{ marginTop: 12 }}>
        翠嶺市総合体育館
      </p>
      <div className="docGrid">
        <article className="card docSheet">
          <h3>開館前チェック（下書き）</h3>
          {OPENING_DOC.map((row) => (
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
        <article className="card docSheet">
          <h3>設備点検記録簿（抜粋）</h3>
          {LEDGER_DOC.map((row) => (
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
            <th>点検記録簿の行</th>
            <th>開館前チェックの欄</th>
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
      <p>
        <button type="button" className="btn btnGhost" disabled title="このデモでは出しません">
          印刷
        </button>
      </p>
    </section>
  );
}
