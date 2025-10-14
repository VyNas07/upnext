import { mockProgramas } from "@/mocks/programas";
import type { Programa } from "@/types/domain";

export async function listProgramas(): Promise<Programa[]> {
    await new Promise((r) => setTimeout(r, 300)); // simula latência
    return mockProgramas;
}

export async function getProgramaById(id: string) {
    const data = await listProgramas();
    return data.find((p) => p.id === id) ?? null;
}
