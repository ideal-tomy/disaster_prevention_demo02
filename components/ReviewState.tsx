"use client";

import { createContext, useContext, useMemo, useState } from "react";
import { REVIEW_ITEMS, type ReviewDecision } from "@/data/suirei";

type Ctx = {
  decisions: Record<string, ReviewDecision>;
  setDecision: (id: string, value: Exclude<ReviewDecision, "pending">) => void;
  pendingCount: number;
  confirmer: string;
  toast: string;
  order: typeof REVIEW_ITEMS;
};

const ReviewContext = createContext<Ctx | null>(null);

export function ReviewProvider({ children }: { children: React.ReactNode }) {
  const [decisions, setDecisions] = useState<Record<string, ReviewDecision>>(() =>
    Object.fromEntries(REVIEW_ITEMS.map((item) => [item.id, item.initial]))
  );
  const [toast, setToast] = useState("");

  const setDecision = (id: string, value: Exclude<ReviewDecision, "pending">) => {
    setDecisions((prev) => ({ ...prev, [id]: value }));
    const item = REVIEW_ITEMS.find((row) => row.id === id);
    const verb = value === "needed" ? "対応が必要" : "問題なし";
    setToast(`${item?.place ?? ""}を${verb}にしました`);
    window.setTimeout(() => setToast(""), 2000);
  };

  const pendingCount = Object.values(decisions).filter((v) => v === "pending").length;
  const confirmer = decisions.van && decisions.van !== "pending" ? "岡田（現場）" : "未確定。岡田が押すまで空欄";

  const order = useMemo(() => {
    const byId = Object.fromEntries(REVIEW_ITEMS.map((item) => [item.id, item]));
    if (decisions.van === "pending") return REVIEW_ITEMS;
    return [byId.gen, byId.van, byId.exit];
  }, [decisions.van]);

  return (
    <ReviewContext.Provider value={{ decisions, setDecision, pendingCount, confirmer, toast, order }}>
      {children}
    </ReviewContext.Provider>
  );
}

export function useReview() {
  const ctx = useContext(ReviewContext);
  if (!ctx) throw new Error("ReviewProvider が必要です");
  return ctx;
}
