import { FacilitiesView } from "@/components/FacilitiesView";

export default async function FacilitiesPage({
  searchParams
}: {
  searchParams: Promise<{ view?: string; zone?: string }>;
}) {
  const params = await searchParams;
  const view = params.view === "open" ? "open" : "upkeep";
  return <FacilitiesView view={view} zoneId={params.zone} />;
}
