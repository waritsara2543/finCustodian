import { useRouter } from "next/router";
import React, { useContext } from "react";
import { FincustodianContext } from "../components/finCustodianConfig";
import { useMockupStore } from "../stores/mockup";

export function useLogin() {
  const finCustodian = useContext(FincustodianContext);
  const { isKYC } = useMockupStore();
  const router = useRouter();

  const login = React.useCallback(async () => {
    if (!finCustodian.fincustodian) {
      console.log("web3auth not initialized yet");
      return;
    }
    const finCustodianProvider = await finCustodian.fincustodian.connect();
    if (isKYC) finCustodian.setProvider(finCustodianProvider);
    else {
      router.push("/kycPage");
    }
  }, [isKYC, router, finCustodian]);

  const logout = React.useCallback(async () => {
    if (!finCustodian.fincustodian) {
      console.log("web3auth not initialized yet");
      return;
    }
    await finCustodian.fincustodian.logout();
    finCustodian.setProvider(null);
  }, [finCustodian]);

  return { login, logout };
}
