import Link from "next/link";
import { StillFrame } from "@/components/StillFrame";

const CARDS = [
  { href: "/console", title: "統合ダッシュボード", line: "開ける場所と、確認できていない場所が並ぶ" },
  { href: "/console/facilities", title: "設備・場所", line: "同じ並びのまま、期限が開館判定に変わる" },
  { href: "/console/incident", title: "インシデント", line: "抽出した静止画と、平常時の点検が一本になる" },
  { href: "/console/review", title: "画像確認", line: "候補を挙げ、現場が対応の要否を押す" }
];

export default function HomePage() {
  return (
    <div className="lp appMin">
      <header className="lpBar">
        <div className="brand">
          <span className="brandMark">嶺</span>
          総合体育館コンソール
        </div>
        <span className="demoTag">DEMO</span>
      </header>
      <section className="lpHero">
        <div>
          <p className="lpEyebrow">総合体育館コンソール</p>
          <h1>今日開けるかは、普段の点検記録の中にある。</h1>
          <p>アリーナ、搬入口、機械室。普段の点検が、開館できるかの答えになる。翠嶺市総合体育館のデモです。</p>
          <div className="ctaRow">
            <Link className="btn btnPrimary" href="/console">
              コンソールを開く
            </Link>
            <Link className="btn btnGhost" href="/console/assistant">
              AIに質問する
            </Link>
          </div>
          <div className="lpMeta">
            <span>翠嶺市</span>
            <span>1棟</span>
            <span>場所と設備18</span>
            <span>デモ</span>
          </div>
        </div>
        <div className="heroCard">
          <div className="heroPills">
            <span className="pill pillWarn">注意</span>
            <span className="pill">モック</span>
          </div>
          <StillFrame src="/img/a1.png" fileName="a1.png" ratio="portrait" />
        </div>
      </section>
      <section className="lpCards">
        {CARDS.map((card) => (
          <Link key={card.href} href={card.href} className="featureCard">
            <h2>{card.title}</h2>
            <p>{card.line}</p>
          </Link>
        ))}
      </section>
      <p className="lpFoot">切替と、インシデントまで、およそ2分。DEMO。モック。</p>
    </div>
  );
}
