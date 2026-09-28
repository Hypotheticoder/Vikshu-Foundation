import { create } from 'zustand';

interface User {
  id: string;
  name: string;
  email: string;
}

interface AppState {
  // Authentication
  isAuthenticated: boolean;
  user: User | null;
  token: string | null;
  login: (userData: User, token: string) => void;
  logout: () => void;
  
  // UI States
  language: string;
  setLanguage: (lang: string) => void;
}

export const useStore = create<AppState>((set) => ({
  isAuthenticated: false,
  user: null,
  token: null,
  login: (userData, token) => set({ isAuthenticated: true, user: userData, token }),
  logout: () => set({ isAuthenticated: false, user: null, token: null }),
  
  language: 'en',
  setLanguage: (lang) => set({ language: lang }),
}));
