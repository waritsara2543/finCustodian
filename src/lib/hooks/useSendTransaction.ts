import { useRouter } from "next/router";
import { useCallback } from "react";
import { useProviderStore } from "../stores/provider";

export function useSendTransaction() {
  const { provider } = useProviderStore();
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
