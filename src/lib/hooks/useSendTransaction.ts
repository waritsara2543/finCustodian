import { useRouter } from "next/router";
import { useCallback, useContext } from "react";
import { FincustodianContext } from "../components/finCustodianConfig";

export function useSendTransaction() {
  const provider = useContext(FincustodianContext).provider;
  const router = useRouter();
  const sendTransaction = useCallback(async () => {
    if (!provider) {
      console.log("provider not initialized yet");
      return;
    }
    router.push("/confirmPage");
  }, [provider, router]);
  return { sendTransaction };
}
