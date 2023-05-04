import { FinCustodian } from "@/lib/helpers/finCustodian";
import { useEffect, useMemo, useState } from "react";
import { useProviderStore } from "../stores/provider";

export function useGetProvider(): any {
  const [fincus, setFincus] = useState<FinCustodian | null>(null);
  const { provider, setProvider } = useProviderStore();

  const { client } = useProviderStore();
  useEffect(() => {
    const init = async () => {
      try {
        const fincus = new FinCustodian(client);
        setFincus(fincus);
        await fincus.initModal();
        setProvider(fincus.provider);
      } catch (error) {
        console.error(error);
      }
    };
    init();
  }, [client, setProvider]);

  const isInitialized = useMemo(() => {
    if (!fincus || !provider) {
      return false;
    }
    return true;
  }, [fincus, provider]);

  return { provider, isInitialized, fincus };
}
