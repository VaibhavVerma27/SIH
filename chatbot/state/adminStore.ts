"use client"
import { create } from 'zustand';

interface Admin {
  name: string;
  email: string;
}

interface AdminStore {
  user: Admin;
  isAdmin: boolean;
  setAdmin: (adminInfo: Admin) => void;
  signOut: () => void;
}

export const useAdminStore = create<AdminStore>((set) => ({
      user: {
        name: "",
        email: "",
      },
      isAdmin: true,
      setAdmin: (adminInfo) => set({ user: adminInfo, isAdmin: true }),
      signOut: () => {set({ user: {name: "", email: "",}, isAdmin: false });},
}));

