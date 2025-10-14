import { create } from 'zustand';

interface AppState {
    // Estado inicial vazio conforme solicitado
}

export const useAppStore = create<AppState>((set) => ({
    // Store inicial vazia
}));
