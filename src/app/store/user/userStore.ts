// store/user/userStore.ts
import { create } from "zustand";

export interface User {
  _id: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  isVerified: boolean;
  profilePicture?: string;
  createdAt: Date;
  updatedAt: Date;
}

interface UserState {
  user: User | null;
  setUser: (user: User | null) => void;
  clearUser: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
}));