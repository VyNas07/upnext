import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Programa } from "@/types/domain";

type Filtros = {
  busca: string;
  area?: Programa["area"];
  modalidade?: Programa["modalidade"];
  nivel?: Programa["nivel"];
  periodo?: { inicio?: string; fim?: string }; // ISO
};

type AppState = {
  filtros: Filtros;
  favoritos: string[]; // ids de Programa
  setBusca: (v: string) => void;
  setFiltro: <K extends keyof Filtros>(k: K, v: Filtros[K]) => void;
  toggleFavorito: (id: string) => void;
  resetFiltros: () => void;
};

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      filtros: { busca: "" },
      favoritos: [],
      setBusca: (v) => set((s) => ({ filtros: { ...s.filtros, busca: v } })),
      setFiltro: (k, v) => set((s) => ({ filtros: { ...s.filtros, [k]: v } })),
      toggleFavorito: (id) =>
        set((s) => ({
          favoritos: s.favoritos.includes(id)
            ? s.favoritos.filter((x) => x !== id)
            : [...s.favoritos, id],
        })),
      resetFiltros: () => set({ filtros: { busca: "" } }),
    }),
    { name: "app-store" } // salva em localStorage
  )
);