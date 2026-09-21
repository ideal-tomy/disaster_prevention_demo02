"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { DEMO_CLOCK, DEMO_DATE } from "@/data/suirei";
import { AssistantPanel } from "@/components/AssistantPanel";
import { useAssistant } from "@/components/AssistantState";
import { useReview } from "@/components/ReviewState";
import { useSelectionReturn } from "@/hooks/useSelectionReturn";

const PhoneNavLockContext = createContext<(locked: boolean) => void>(() => {});

export function usePhoneNavLock(locked: boolean) {
  const setLocked = useContext(PhoneNavLockContext);
  useEffect(() => {
    setLocked(locked);
    return () => setLocked(false);
  }, [locked, setLocked]);
}

const NAV = [
  { href: "/console", label: "施設の状況" },
  { href: "/console/facilities", label: "場所・設備一覧" },
  { href: "/console/incident", label: "要対応事項", badge: "incident" as const },
  { href: "/console/review", label: "画像確認", badge: "review" as const },
  { href: "/console/documents", label: "点検・開館前の記録" },
  { href: "/console/integrations", label: "データ連携状況" },
  { action: "assistant" as const, label: "AIアシスタント" }
];

const TABS = [
  { href: "/console", label: "状況" },
  { href: "/console/facilities", label: "一覧" },
  { href: "/console/incident", label: "対応", badge: "incident" as const },
  { href: "/console/review", label: "確認", badge: "review" as const }
];

const MORE = [
  { href: "/console/documents", label: "点検・開館前の記録" },
  { href: "/console/integrations", label: "データ連携状況" }
];

function isCurrent(href: string, path: string) {
  return href === "/console" ? path === "/console" : path.startsWith(href);
}

export function ConsoleShell({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  const searchParams = useSearchParams();
  const { pendingCount } = useReview();
  const { returnUrl } = useSelectionReturn();
  const { isOpen: assistantOpen, open: openAssistant } = useAssistant();
  const [more, setMore] = useState(false);
  const [phoneLocked, setPhoneLocked] = useState(false);
  const overlayLocked = phoneLocked || assistantOpen;
  const moreCurrent = MORE.some((item) => isCurrent(item.href, path));
  const lockPhoneNav = useCallback((locked: boolean) => {
    setPhoneLocked(locked);
    if (locked) setMore(false);
  }, []);

  useEffect(() => {
    setMore(false);
  }, [path]);

  useEffect(() => {
    if (searchParams.get("ai") !== "1") return;
    openAssistant({ showQ1: searchParams.get("q") !== "0" });
    const url = new URL(window.location.href);
    url.searchParams.delete("ai");
    url.searchParams.delete("q");
    const next = `${url.pathname}${url.search}${url.hash}`;
    window.history.replaceState({}, "", next);
  }, [searchParams, openAssistant]);

  const countOf = (badge?: "incident" | "review") =>
    badge === "incident" ? 1 : badge === "review" ? pendingCount : 0;

  const openAssistantPanel = () => {
    setMore(false);
    openAssistant({ showQ1: true });
  };

  return (
    <PhoneNavLockContext.Provider value={lockPhoneNav}>
    <div className="shell appMin">
      <header className="topbar">
        <div className="topLeft">
          {returnUrl ? (
            <a href={returnUrl} className="returnLink">
              ← 紹介へ
            </a>
          ) : null}
          <span className="brandMark" aria-hidden>
            嶺
          </span>
          <div>
            <h1>総合体育館 施設管理</h1>
            <p className="deskOnly">翠嶺市総合体育館</p>
          </div>
        </div>
        <div className="topRight">
          <span className="dateLine deskOnly">基準日時（固定）</span>
          <span className="clock">{DEMO_CLOCK}</span>
          <span className="dateLine deskOnly">{DEMO_DATE}</span>
          <span className="dateLine deskOnly">台風第14号接近</span>
          <Link
            href="/console/incident"
            className="pill pillWarn"
            title="台風第14号接近。利用条件のある場所・設備と、利用可否が未確認の項目があります"
          >
            注意
          </Link>
          <button type="button" className="btn btnPrimary deskOnly" onClick={openAssistantPanel}>
            AIに質問
          </button>
        </div>
      </header>
      <div className="bodyRow">
        <nav className="nav" aria-label="メインメニュー">
          {NAV.map((item) => {
            if ("action" in item && item.action === "assistant") {
              return (
                <button
                  key="assistant"
                  type="button"
                  className="navAction"
                  aria-current={assistantOpen ? "page" : undefined}
                  onClick={openAssistantPanel}
                >
                  {item.label}
                </button>
              );
            }
            const current = isCurrent(item.href!, path);
            const count = countOf(item.badge);
            return (
              <Link key={item.href} href={item.href!} aria-current={current ? "page" : undefined}>
                {item.label}
                {count > 0 ? <span className="badge">{count}</span> : null}
              </Link>
            );
          })}
        </nav>
        <main className="main">{children}</main>
      </div>
      <nav className="phoneBar" aria-label="主な画面" aria-hidden={overlayLocked || undefined} inert={overlayLocked || undefined}>
        {TABS.map((item) => {
          const current = isCurrent(item.href, path);
          const count = countOf(item.badge);
          return (
            <Link key={item.href} href={item.href} aria-current={current ? "page" : undefined} tabIndex={overlayLocked ? -1 : undefined}>
              <span>{item.label}</span>
              {count > 0 ? <span className="badge">{count}</span> : null}
            </Link>
          );
        })}
        <button type="button" aria-expanded={more} aria-current={moreCurrent ? "page" : undefined} tabIndex={overlayLocked ? -1 : undefined} onClick={() => setMore(true)}>
          その他
        </button>
      </nav>
      {more ? (
        <>
          <button type="button" className="moreBackdrop" aria-label="閉じる" onClick={() => setMore(false)} />
          <section className="moreSheet" role="dialog" aria-label="その他">
            <button type="button" className="btn btnPrimary moreLead" onClick={openAssistantPanel}>
              AIに質問
            </button>
            {MORE.map((item) => (
              <Link key={item.href} href={item.href} aria-current={isCurrent(item.href, path) ? "page" : undefined}>
                {item.label}
              </Link>
            ))}
          </section>
        </>
      ) : null}
      <AssistantPanel />
    </div>
    </PhoneNavLockContext.Provider>
  );
}
