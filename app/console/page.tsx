import Link from "next/link";
import { GymMap } from "@/components/GymMap";
import { StatusPill } from "@/components/StatusPill";
import { DASHBOARD, INCIDENT } from "@/data/suirei";

export default function DashboardPage() {
  return (
    <section>
      <div className="pageHead">
        <h2>統合ダッシュボード</h2>
      </div>
      <div className="statGrid">
        <article className="card">
          <label>使える</label>
          <div className="figure">{DASHBOARD.usable}</div>
        </article>
        <article className="card">
          <label>条件付き</label>
          <div className="figure">{DASHBOARD.conditional}</div>
        </article>
        <article className="card">
          <label>使えない</label>
          <div className="figure">{DASHBOARD.unusable}</div>
        </article>
        <article className="card">
          <label>確認できていない</label>
          <div className="figure">{DASHBOARD.unknown}</div>
        </article>
      </div>

      <article className="incidentBanner">
        <img className="bannerStill" src="/img/b1.png" alt="" />
        <div>
          <div className="kicker">
            <span className="num">{INCIDENT.id}</span>
            <StatusPill kind={INCIDENT.judgment} />
            <span className="pill pillAi">{INCIDENT.confidence}%</span>
          </div>
          <h3>{INCIDENT.headline}</h3>
          <p className="meta">14:08 車両 · 14:36 備品 · 発電機 2026/08/28</p>
        </div>
        <Link href="/console/incident" className="btn btnGhost">
          詳細
        </Link>
      </article>

      <article className="card mapCard">
        <GymMap />
        <div className="mapLegend">
          <span>
            <i className="legDot" style={{ background: "#1f7a4d" }} />
            使える
          </span>
          <span>
            <i className="legDot" style={{ background: "#c47b12" }} />
            条件付き
          </span>
          <span>
            <i className="legDot" style={{ background: "#b42318" }} />
            使えない
          </span>
          <span>
            <i className="legDot legDash" />
            確認できていない
          </span>
        </div>
        <div className="mapLink">
          <span className="num">{DASHBOARD.integrations}</span>
          <Link href="/console/integrations" className="btn btnGhost">
            連携
          </Link>
        </div>
      </article>
    </section>
  );
}
