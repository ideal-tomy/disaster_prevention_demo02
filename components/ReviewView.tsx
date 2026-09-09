"use client";

import Link from "next/link";
import { StillFrame } from "@/components/StillFrame";
import { useReview } from "@/components/ReviewState";
import { knowledgeLabel, type ReviewDecision } from "@/data/suirei";

function statusText(decision: ReviewDecision, decidedNote?: string) {
  if (decision === "needed") return decidedNote ?? "対応が必要／画像確認者：岡田";
  if (decision === "ok") return "問題なし／画像確認者：岡田";
  return "判定待ち";
}

export function ReviewView() {
  const { decisions, setDecision, order, pendingCount, toast } = useReview();
  const needed = Object.values(decisions).filter((v) => v === "needed").length;
  const ok = Object.values(decisions).filter((v) => v === "ok").length;

  return (
    <section>
      <div className="pageHead">
        <h2>画像確認</h2>
      </div>
      {toast ? <p className="toast" role="status">{toast}</p> : null}
      <div className="reviewStats">
        <span>判定待ち {pendingCount}件</span>
        <span>対応が必要 {needed}件</span>
        <span>問題なし {ok}件</span>
      </div>
      <div className="reviewList">
        {order.map((item) => {
          const decision = decisions[item.id];
          return (
            <article className="reviewCard" key={item.id}>
              <StillFrame
                src={item.file}
                fileName={item.fileName}
                ratio={item.ratio ?? "wide"}
                box={item.box}
                label={item.label}
              />
              <div>
                <h3>
                  {item.place}　{item.spot}
                </h3>
                <p style={{ margin: 0 }}>{statusText(decision, item.decidedNote)}</p>
                <p style={{ color: "var(--muted)", fontSize: 13 }}>参照基準：{knowledgeLabel(item.knowledge)}</p>
                <p>
                  <Link
                    className="linkish"
                    href={
                      item.knowledge === "K-G3"
                        ? "/console/facilities?view=upkeep&zone=Z05&equip=K-G3&from=review"
                        : item.knowledge === "K-F4"
                          ? "/console/facilities?view=upkeep&zone=Z04&equip=K-F4&from=review"
                          : "/console/facilities?view=upkeep&zone=Z02&equip=K-D3&from=review"
                    }
                  >
                    記録
                  </Link>
                </p>
                {item.id === "gen" ? <p className="hint">この画像では点検票の文字を確認できません。元の点検記録を確認してから判定してください。</p> : null}
                {decision === "pending" ? (
                  <div className="btnRow">
                    <button type="button" className="btn btnPrimary" onClick={() => setDecision(item.id, "needed")}>
                      対応が必要
                    </button>
                    <button type="button" className="btn btnGhost" onClick={() => setDecision(item.id, "ok")}>
                      問題なし
                    </button>
                  </div>
                ) : null}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
