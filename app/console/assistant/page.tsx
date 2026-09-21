import { redirect } from "next/navigation";

export default async function AssistantPage({
  searchParams
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const params = await searchParams;
  redirect(params.q === "0" ? "/console?ai=1&q=0" : "/console?ai=1");
}
