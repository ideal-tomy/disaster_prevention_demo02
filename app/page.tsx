import Link from "next/link";

export default function HomePage() {
  return (
    <div className="lp lpBand appMin">
      <header className="lpBar">
        <div className="brand">
          <span className="brandMark">嶺</span>
          総合体育館コンソール
        </div>
      </header>
      <div className="lpWide">
        <img src="/img/e1.png" alt="" />
      </div>
      <section className="lpCopy">
        <h1>今日開けるかは、普段の点検記録の中にある。</h1>
        <p className="lpPlace">翠嶺市総合体育館</p>
        <div className="ctaRow">
          <Link className="btn btnPrimary" href="/console">
            コンソールを開く
          </Link>
          <Link className="btn btnGhost" href="/console/assistant">
            AIに質問する
          </Link>
        </div>
      </section>
    </div>
  );
}
