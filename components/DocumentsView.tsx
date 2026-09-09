"use client";

import { useState } from "react";
import Link from "next/link";
import { DOC_MAP, LEDGER_DOC, OPENING_DOC } from "@/data/suirei";
import { useReview } from "@/components/ReviewState";

export function DocumentsView() {
  const { confirmer } = useReview();
  const [pair, setPair] = useState("");

  return (
    <section>
      <div className="pageHead">
        <h2>点検・開館前の記録</h2>
      </div>
      <div className="docGrid">
        <article className="card docSheet paper">
          <h3>開館前確認票（下書き）</h3>
          {OPENING_DOC.filter((row) => row.key !== "title").map((row) => (
            <div
              className={row.pair && pair === row.pair ? "docRow lit" : "docRow"}
              key={row.key}
              onMouseEnter={() => setPair(row.pair)}
              onMouseLeave={() => setPair("")}
              onClick={() => setPair((current) => (row.pair && current === row.pair ? "" : row.pair))}
            >
              <span>{row.label}</span>
              <div>
                {row.key === "who" ? confirmer : row.value}
                {row.key === "g1" ? (
                  <p>
                    <Link className="linkish" href="/console/facilities?view=upkeep&zone=Z05&equip=K-G3&from=documents">
                      記録
                    </Link>
                  </p>
                ) : null}
                {row.key === "g2" ? (
                  <p>
                    <Link className="linkish" href="/console/facilities?view=upkeep&zone=Z04&equip=K-F4&from=documents">
                      記録
                    </Link>
                  </p>
                ) : null}
                {row.key === "g3" ? (
                  <p>
                    <Link className="linkish" href="/console/facilities?view=upkeep&zone=Z02&equip=K-D3&from=documents">
                      記録
                    </Link>
                  </p>
                ) : null}
              </div>
            </div>
          ))}
        </article>
        <article className="card docSheet paper">
          <h3>設備点検記録簿（抜粋）</h3>
          {LEDGER_DOC.filter((row) => row.key !== "title").map((row) => (
            <div
              className={row.pair && pair === row.pair ? "docRow lit" : "docRow"}
              key={row.key}
              onMouseEnter={() => setPair(row.pair)}
              onMouseLeave={() => setPair("")}
              onClick={() => setPair((current) => (row.pair && current === row.pair ? "" : row.pair))}
            >
              <span>{row.label}</span>
              <div>{row.value}</div>
            </div>
          ))}
        </article>
      </div>
      <div className="tableScroll">
      <table className="mapTable">
        <thead>
          <tr>
            <th>参照元の記録・画像</th>
            <th>開館前の確認・対応事項</th>
          </tr>
        </thead>
        <tbody>
          {DOC_MAP.map((row) => (
            <tr
              key={row.id}
              className={pair === row.id ? "lit" : undefined}
              onMouseEnter={() => setPair(row.id)}
              onMouseLeave={() => setPair("")}
              onClick={() => setPair((current) => (current === row.id ? "" : row.id))}
            >
              <td>{row.left}</td>
              <td>{row.right}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </section>
  );
}
