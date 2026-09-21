"use client";

import { createContext, useCallback, useContext, useState } from "react";

type AssistantContextValue = {
  isOpen: boolean;
  showQ1: boolean;
  open: (options?: { showQ1?: boolean }) => void;
  close: () => void;
};

const AssistantContext = createContext<AssistantContextValue | null>(null);

export function AssistantProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showQ1, setShowQ1] = useState(true);

  const open = useCallback((options?: { showQ1?: boolean }) => {
    if (options?.showQ1 !== undefined) setShowQ1(options.showQ1);
    setIsOpen(true);
  }, []);

  const close = useCallback(() => setIsOpen(false), []);

  return (
    <AssistantContext.Provider value={{ isOpen, showQ1, open, close }}>
      {children}
    </AssistantContext.Provider>
  );
}

export function useAssistant() {
  const ctx = useContext(AssistantContext);
  if (!ctx) throw new Error("useAssistant must be used within AssistantProvider");
  return ctx;
}
