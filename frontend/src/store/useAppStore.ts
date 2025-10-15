
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type FiltrosState = {
  busca: string;
  area?: string;
  modalidade?: string;
  nivel?: string;
};

interface AppState {
  filtros: FiltrosState;
  favoritos: string[];

  setFiltros: (novosFiltros: Partial<FiltrosState>) => void;
  toggleFavorito: (programaId: string) => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({

      filtros: {
        busca: '',
      },
      favoritos: [],


      setFiltros: (novosFiltros) =>
        set((state) => ({
          filtros: { ...state.filtros, ...novosFiltros },
        })),

      toggleFavorito: (programaId) =>
        set((state) => {
          const isFavorito = state.favoritos.includes(programaId);
          return {
            favoritos: isFavorito
              ? state.favoritos.filter((id) => id !== programaId)
              : [...state.favoritos, programaId],
          };
        }),
    }),
    {
      name: 'app-storage',
    }
  )
);