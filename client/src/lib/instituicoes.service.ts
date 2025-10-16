import { mockInstituicoes } from "@/mocks/instituicoes";
import type { Instituicao } from "@/types/domain";

export async function listInstituicoes(): Promise<Instituicao[]> {
  // Simula latência de rede
  await new Promise((r) => setTimeout(r, 500));
  return mockInstituicoes;
}