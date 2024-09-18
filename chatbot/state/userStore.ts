"use client"

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Define the types for user information and store actions
interface User {
  name: string;
  email: string;
}

interface UserStore {
  user: User | null;
  isUser: boolean;
  setUser: (userInfo: User) => void;
  signOut: () => void;
}

// Create the store with Zustand
export const useUserStore = create<UserStore>(
  (set) => ({
    user: null,
    isUser: false,
    setUser: (userInfo) => set({ user: userInfo, isUser: true }),
    signOut: () => set({ user: null, isUser: false }),
  }),
);
