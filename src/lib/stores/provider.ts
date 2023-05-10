import { create } from "zustand";
import { FinCustodian } from "../helpers/finCustodian";
import { SafeEventEmitterProvider } from "@web3auth/base";

interface IProviderStore {
  provider: SafeEventEmitterProvider | null;
  setProvider: (provider: any) => void;
  fincus: FinCustodian | null;
  setFincus: (fincus: FinCustodian) => void;
}

export const useProviderStore = create<IProviderStore>((set) => ({
  provider: null,
  setProvider: (provider) => set({ provider }),
  fincus: null,
  setFincus: (fincus) => set({ fincus }),
}));
