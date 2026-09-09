import { IncidentView } from "@/components/IncidentView";

export default async function IncidentPage({
  searchParams
}: {
  searchParams: Promise<{ from?: string }>;
}) {
  const params = await searchParams;
  return <IncidentView from={params.from} />;
}
