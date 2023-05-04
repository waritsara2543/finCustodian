import { create } from "zustand";

interface IMockupStore {
  isKYC: boolean;
  setIsKYC: (isKYC: boolean) => void;
}

export const useMockupStore = create<IMockupStore>((set) => ({
  isKYC: false,
  setIsKYC: (isKYC) => set({ isKYC }),
}));
