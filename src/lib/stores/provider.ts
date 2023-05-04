import { create } from "zustand";
import { FinCustodianOption } from "../helpers/finCustodian";
import { SafeEventEmitterProvider } from "@web3auth/base";

interface IProviderStore {
  client: FinCustodianOption;
  setClient: (client: FinCustodianOption) => void;
  provider: SafeEventEmitterProvider | null;
  setProvider: (provider: any) => void;
}

export const useProviderStore = create<IProviderStore>((set) => ({
  client: {} as FinCustodianOption,
  setClient: (client) => set({ client }),
  provider: null,
  setProvider: (provider) => set({ provider }),
}));
