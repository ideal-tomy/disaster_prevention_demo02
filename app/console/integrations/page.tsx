import { StatusPill } from "@/components/StatusPill";
import { INTEGRATIONS } from "@/data/suirei";

export default function IntegrationsPage() {
  return (
    <section>
      <div className="pageHead">
        <h2>システム連携</h2>
      </div>
      <article className="card" style={{ marginTop: 20 }}>
        <div className="figure">5 / 8</div>
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
