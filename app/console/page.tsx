import Link from "next/link";
import { GymMap } from "@/components/GymMap";
import { StatusPill } from "@/components/StatusPill";
import { DASHBOARD, INCIDENT } from "@/data/suirei";

export default function DashboardPage() {
  return (
    <section>
      <div className="pageHead">
        <h2>統合ダッシュボード</h2>
        <p>開ける場所と、記録がない場所</p>
      </div>
      <div className="statGrid">
        <article className="card">
          <label>使える</label>
          <div className="figure">{DASHBOARD.usable}</div>
          <p className="hint">開館に入れる</p>
        </article>
        <article className="card">
          <label>条件付き</label>
          <div className="figure">{DASHBOARD.conditional}</div>
          <p className="hint">開館数に入れない</p>
        </article>
        <article className="card">
          <label>使えない</label>
          <div className="figure">{DASHBOARD.unusable}</div>
          <p className="hint">外壁・通用口</p>
        </article>
        <article className="card">
          <label>確認できていない</label>
          <div className="figure">{DASHBOARD.unknown}</div>
          <p className="hint">記録がない</p>
        </article>
      </div>

      <article className="incidentBanner">
        <div>
          <div className="kicker">
            <span className="num">{INCIDENT.id}</span>
            <StatusPill kind={INCIDENT.judgment} />
            <span className="pill pillAi">相関 {INCIDENT.confidence}%</span>
          </div>
          <h3>{INCIDENT.headline}</h3>
          <p className="meta">翠嶺市総合体育館 · 14:08 車両 · 14:36 備品 · 発電機 2026/08/28</p>
        </div>
        <Link href="/console/incident" className="btn btnGhost">
          詳細
        </Link>
      </article>

      <div className="split">
        <article className="card mapCard">
          <label>棟の場所（模式）</label>
          <GymMap />
          <div className="mapLegend">
            <span>使える</span>
            <span>条件付きで使える</span>
            <span>使えない</span>
            <span>確認できていない（破線）</span>
          </div>
        </article>
        <article className="card">
          <label>連携</label>
          <div className="figure" style={{ fontSize: 28 }}>
            {DASHBOARD.integrations}
          </div>
          <p className="hint">外壁は未確認。紙のまま</p>
          <div className="barTrack" style={{ marginTop: 16 }}>
            <div className="barFill" />
          </div>
          <Link href="/console/integrations" className="btn btnGhost" style={{ marginTop: 16 }}>
            連携を見る
          </Link>
        </article>
      </div>
    </section>
  );
}
