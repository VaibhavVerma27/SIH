"use client"
import { create } from 'zustand';

interface Admin {
  name: string;
  email: string;
}

interface AdminStore {
  user: Admin | null;
  isAdmin: boolean;
  setAdmin: (adminInfo: Admin) => void;
  signOut: () => void;
}

export const useAdminStore = create<AdminStore>((set) => ({
      user: null,
      isAdmin: true,
      setAdmin: (adminInfo) => set({ user: adminInfo, isAdmin: true }),
      signOut: () => {set({ user: null, isAdmin: false });},
}));

