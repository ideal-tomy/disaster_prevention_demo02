"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { DEMO_CLOCK, DEMO_DATE } from "@/data/suirei";
import { useReview } from "@/components/ReviewState";

const NAV = [
  { href: "/console", label: "施設の状況" },
  { href: "/console/facilities", label: "場所・設備一覧" },
  { href: "/console/incident", label: "要対応事項", badge: "incident" as const },
  { href: "/console/review", label: "画像確認", badge: "review" as const },
  { href: "/console/documents", label: "点検・開館前の記録" },
  { href: "/console/integrations", label: "データ連携状況" },
  { href: "/console/assistant", label: "AIアシスタント" }
];

export function ConsoleShell({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  const { pendingCount } = useReview();

  return (
    <div className="shell appMin">
      <header className="topbar">
        <div className="topLeft">
          <span className="brandMark" aria-hidden>
            嶺
          </span>
          <div>
            <h1>総合体育館 施設管理</h1>
            <p>翠嶺市総合体育館</p>
          </div>
        </div>
        <div className="topRight">
          <span className="dateLine">デモの基準日時</span>
          <span className="clock">{DEMO_CLOCK}</span>
          <span className="dateLine">{DEMO_DATE}</span>
          <span className="dateLine">台風第14号接近</span>
          <Link href="/console/incident" className="pill pillWarn" title="利用条件のある場所・設備と、利用可否が未確認の項目があります">
            注意
          </Link>
          <Link href="/console/assistant" className="btn btnPrimary">
            AIに質問
          </Link>
        </div>
      </header>
      <div className="bodyRow">
        <nav className="nav" aria-label="メインメニュー">
          {NAV.map((item) => {
            const current = item.href === "/console" ? path === "/console" : path.startsWith(item.href);
            const count = item.badge === "incident" ? 1 : item.badge === "review" ? pendingCount : 0;
            return (
              <Link key={item.href} href={item.href} aria-current={current ? "page" : undefined}>
                {item.label}
                {count > 0 ? <span className="badge">{count}</span> : null}
              </Link>
            );
          })}
        </nav>
        <main className="main">{children}</main>
      </div>
    </div>
  );
}
