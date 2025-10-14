import { listProgramas } from "@/lib/programas.service";
import ProgramList from "@/features/programas/ProgramList";

export default async function ProgramasPage() {
  // Buscar dados no servidor - a filtragem é client-side e será trocada por API query params quando houver backend
  const programas = await listProgramas();

  return <ProgramList serverProgramas={programas} />;
}