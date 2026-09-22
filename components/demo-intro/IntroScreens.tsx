"use client";

import { memo, useEffect, type ReactNode } from "react";
import { AssistantProvider } from "@/components/AssistantState";
import { DashboardView } from "@/components/DashboardView";
import { FacilitiesView } from "@/components/FacilitiesView";
import { ReviewProvider, useReview } from "@/components/ReviewState";
import { ReviewView } from "@/components/ReviewView";
import type { DeviceId } from "./story";

function frameClass(id: DeviceId, stars: readonly DeviceId[]) {
  return `ki-device ki-monitor ki-${id}${stars.includes(id) ? " ki-active" : " ki-idle"}`;
}

function Monitor({
  id,
  tab,
  stars,
  children
}: {
  id: DeviceId;
  tab: string;
  stars: readonly DeviceId[];
  children: ReactNode;
}) {
  return (
    <div className={frameClass(id, stars)}>
      <div className="ki-device-bar">
        翠嶺市総合体育館 <span>{tab}</span>
      </div>
      <div className="ki-monitor-body">{children}</div>
    </div>
  );
}

function scrollWithin(scroller: Element | null, target: Element | null, padding = 8) {
  if (!(scroller instanceof HTMLElement) || !(target instanceof HTMLElement)) return;
  const box = scroller.getBoundingClientRect();
  const next = target.getBoundingClientRect();
  scroller.scrollTop += next.top - box.top - padding;
}

function IntroSeed({ decided, phase }: { decided: boolean; phase: number }) {
  const { decisions, setDecision } = useReview();
  useEffect(() => {
    if (decided && decisions.van === "pending") setDecision("van", "needed");
  }, [decided, decisions.van, setDecision]);
  useEffect(() => {
    const t = window.setTimeout(() => {
      if (phase >= 1 && phase < 2) {
        const row = document.querySelector('.gf-karte [data-zone="Z05"]');
        scrollWithin(row?.closest(".tableWrap") ?? null, row, 36);
      }
      const heading = [...document.querySelectorAll(".gf-review h3")].find((node) =>
        node.textContent?.includes("東側搬入口")
      );
      const article = heading?.closest("article") ?? null;
      scrollWithin(article?.closest(".gf-review") ?? null, article);
    }, 80);
    return () => window.clearTimeout(t);
  }, [decided, phase]);
  return null;
}

export const IntroScreens = memo(function IntroScreens({
  phase,
  stars
}: {
  phase: number;
  stars: readonly DeviceId[];
}) {
  const openKarte = phase >= 2;
  const decided = phase >= 5;
  return (
    <ReviewProvider key={decided ? "decided" : "pending"}>
      <AssistantProvider>
        <IntroSeed decided={decided} phase={phase} />
        <Monitor id="dash" tab="施設の状況" stars={stars}>
          <div className="gf-scale">
            <DashboardView />
          </div>
        </Monitor>
        <Monitor id="karte" tab="場所・設備" stars={stars}>
          <div className={`gf-scale gf-karte${openKarte ? " gf-open" : ""}`}>
            <FacilitiesView
              view="upkeep"
              zoneId={openKarte ? "Z05" : undefined}
              equipId={openKarte ? "K-G3" : undefined}
            />
          </div>
        </Monitor>
        <Monitor id="review" tab="画像確認" stars={stars}>
          <div className="gf-scale gf-review">
            <ReviewView />
          </div>
        </Monitor>
      </AssistantProvider>
    </ReviewProvider>
  );
});
