import { FacilitiesView } from "@/components/FacilitiesView";

export default async function FacilitiesPage({
  searchParams
}: {
  searchParams: Promise<{ view?: string; zone?: string; equip?: string; from?: string }>;
}) {
  const params = await searchParams;
  const view = params.view === "open" ? "open" : "upkeep";
  return <FacilitiesView view={view} zoneId={params.zone} equipId={params.equip} from={params.from} />;
}
