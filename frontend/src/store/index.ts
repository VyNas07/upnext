import { create } from 'zustand';

interface User {
  id: string;
  name: string;
  email: string;
}

interface UserState {
  user: User | null;
  setUser: (user: User | null) => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));

// Store para filtros de programas
interface FiltrosProgramas {
  busca: string;
  area: string;
  modalidade: string;
  nivel: string;
}

interface AppState {
  filtros: FiltrosProgramas;
  setBusca: (busca: string) => void;
  setFiltro: (campo: keyof FiltrosProgramas, valor: string) => void;
  resetFiltros: () => void;
}

export const useAppStore = create<AppState>((set) => ({
  filtros: {
    busca: '',
    area: '',
    modalidade: '',
    nivel: '',
  },
  setBusca: (busca) => set((state) => ({
    filtros: { ...state.filtros, busca }
  })),
  setFiltro: (campo, valor) => set((state) => ({
    filtros: { ...state.filtros, [campo]: valor }
  })),
  resetFiltros: () => set({
    filtros: {
      busca: '',
      area: '',
      modalidade: '',
      nivel: '',
    }
  }),
}));
