"use client";

import { useEffect } from "react";
import { AssistantChat } from "@/components/AssistantChat";
import { useAssistant } from "@/components/AssistantState";

export function AssistantPanel() {
  const { isOpen, showQ1, close } = useAssistant();

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, close]);

  if (!isOpen) return null;

  return (
    <>
      <button type="button" className="assistantBackdrop" aria-label="閉じる" onClick={close} />
      <aside className="assistantPanel" role="dialog" aria-modal="true" aria-label="AIアシスタント">
        <header className="assistantHead">
          <div>
            <h2>AIアシスタント</h2>
            <p className="assistantNote">このデモは、下の3つの質問に対応しています</p>
          </div>
          <button type="button" className="assistantClose" aria-label="閉じる" onClick={close}>
            ×
          </button>
        </header>
        <AssistantChat showQ1={showQ1} />
      </aside>
    </>
  );
}
