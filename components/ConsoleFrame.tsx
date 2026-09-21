"use client";

import { Suspense } from "react";
import { AssistantProvider } from "@/components/AssistantState";
import { ConsoleShell } from "@/components/ConsoleShell";
import { ReviewProvider } from "@/components/ReviewState";

export function ConsoleFrame({ children }: { children: React.ReactNode }) {
  return (
    <ReviewProvider>
      <AssistantProvider>
        <Suspense fallback={null}>
          <ConsoleShell>{children}</ConsoleShell>
        </Suspense>
      </AssistantProvider>
    </ReviewProvider>
  );
}
