import { StatusPill } from "@/components/StatusPill";
import { INTEGRATIONS } from "@/data/suirei";

export default function IntegrationsPage() {
  return (
    <section>
      <div className="pageHead">
        <h2>データ連携状況</h2>
      </div>
      <article className="card" style={{ marginTop: 20 }}>
        <div className="figure">取り込み済み 5 / 8 項目</div>
        <p className="hint">内容を確認中：2項目／未連携：1項目。設備の利用判定とは別の状態です。</p>
        <div className="barTrack" style={{ marginTop: 16 }}>
          <div className="barFill" />
        </div>
      </article>
      <div style={{ marginTop: 8 }}>
        {INTEGRATIONS.map((row) => (
          <div className="intRow" key={row.name}>
            <strong style={{ fontWeight: 500 }}>{row.name}</strong>
            <StatusPill kind={row.status} />
            <span style={{ color: "var(--muted)" }}>{row.note}</span>
            <span className={row.status === "connected" ? "dot" : row.status === "checking" ? "dot dotCheck" : "dot dotUnknown"} />
          </div>
        ))}
      </div>
    </section>
  );
}
