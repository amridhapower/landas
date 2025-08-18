import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface AuthState {
  savedUsername: string;
  setSavedUsername: (username: string) => void;
  clearSavedUsername: () => void;
}

export const useAuthStore = create<AuthState>()(
  devtools(
    (set) => ({
      savedUsername: '',
      setSavedUsername: (username) => set({ savedUsername: username }),
      clearSavedUsername: () => set({ savedUsername: '' }),
    }),
    { name: 'AuthStore' }
  )
);
