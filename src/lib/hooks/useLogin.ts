import { useRouter } from "next/router";
import React from "react";
import { useMockupStore } from "../stores/mockup";
import { useProviderStore } from "../stores/provider";
import { useGetProvider } from "./useProvider";

export function useLogin() {
  const { fincus } = useProviderStore();
  const { setProvider } = useProviderStore();
  const { isKYC } = useMockupStore();
  const router = useRouter();

  const login = React.useCallback(async () => {
    if (!fincus) {
      console.log("web3auth not initialized yet");
      return;
    }
    const finCustodianProvider = await fincus.connect();
    if (isKYC) setProvider(finCustodianProvider);
    else {
      router.push("/kycPage");
    }
  }, [fincus, setProvider, isKYC, router]);

  const logout = React.useCallback(async () => {
    if (!fincus) {
      console.log("web3auth not initialized yet");
      return;
    }
    await fincus.logout();
    setProvider(null);
  }, [fincus, setProvider]);

  return { login, logout };
}
