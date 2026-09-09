import Link from "next/link";
import { GymMap } from "@/components/GymMap";
import { StatusPill } from "@/components/StatusPill";
import { DASHBOARD, INCIDENT } from "@/data/suirei";

export default function DashboardPage() {
  return (
    <section className="dash">
      <div className="pageHead">
        <h2>施設の状況</h2>
      </div>
      <div className="statGrid">
        <article className="card">
          <label>利用可能</label>
          <div className="figure">{DASHBOARD.usable}<small>件</small></div>
        </article>
        <article className="card">
          <label>条件の確認が必要</label>
          <div className="figure">{DASHBOARD.conditional}<small>件</small></div>
        </article>
        <article className="card">
          <label>利用不可</label>
          <div className="figure">{DASHBOARD.unusable}<small>件</small></div>
        </article>
        <article className="card">
          <label>利用可否が未確認</label>
          <div className="figure">{DASHBOARD.unknown}<small>件</small></div>
        </article>
      </div>

      <article className="incidentBanner">
        <img className="bannerStill" src="/img/b1.png" alt="" />
        <div>
          <div className="kicker">
            <span className="num">{INCIDENT.id}</span>
            <StatusPill kind={INCIDENT.judgment} />
            <span className="pill pillAi" title={INCIDENT.confidenceNote}>
              関連付け {INCIDENT.confidence}%
            </span>
          </div>
          <h3>{INCIDENT.headline}</h3>
          <p className="meta">車両の撮影 14:08 · 備品の撮影 14:36 · 発電機の点検期限 2026/08/28</p>
        </div>
        <Link href="/console/incident" className="btn btnGhost">
          要対応事項を見る
        </Link>
      </article>

      <article className="card mapCard">
        <GymMap />
        <div className="mapLegend">
          <span>
            <i className="legDot" style={{ background: "#1f7a4d" }} />
            利用可能
          </span>
          <span>
            <i className="legDot" style={{ background: "#c47b12" }} />
            条件の確認が必要
          </span>
          <span>
            <i className="legDot" style={{ background: "#b42318" }} />
            利用不可
          </span>
          <span>
            <i className="legDot legDash" />
            利用可否が未確認
          </span>
        </div>
        <div className="mapLink">
          <span className="num">資料取り込み {DASHBOARD.integrations} 項目</span>
          <Link href="/console/integrations" className="btn btnGhost">
            連携状況を見る
          </Link>
        </div>
      </article>
    </section>
  );
}
