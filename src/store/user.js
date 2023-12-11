import { create } from 'zustand';

export const useUserStore = create(set => ({
  isFetching: true,
  user: null,
  setUser: user => set({ user, isFetching: false }),
  logoutUser: () => set({ user: null }),
  setIsFetching: isFetching => set({ isFetching })
}));
