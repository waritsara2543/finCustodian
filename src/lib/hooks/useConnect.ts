import { useContext, useMemo } from "react";
import { FincustodianContext } from "../components/finCustodianConfig";

export function useConnect() {
  const provider = useContext(FincustodianContext).provider;
  const isConnected = useMemo(() => {
    if (provider === null) return false;
    return true;
  }, [provider]);

  return { isConnected };
}
