import { useMemo } from "react";
import { useProviderStore } from "../stores/provider";

export function useConnect() {
  const { provider } = useProviderStore();
  const isConnected = useMemo(() => {
    if (provider === null) return false;
    return true;
  }, [provider]);

  return { isConnected };
}
