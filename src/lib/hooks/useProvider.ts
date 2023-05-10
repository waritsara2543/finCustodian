import { FinCustodian } from "@/lib/helpers/finCustodian";
import { useContext, useEffect, useMemo, useState } from "react";
import { ClientContext } from "../components/finCustodianConfig";
import { useProviderStore } from "../stores/provider";

export function useGetProvider(): any {
  const [fincus, setFincus] = useState<FinCustodian | null>(null);
  const { provider, setProvider } = useProviderStore();
  //const [provider, setProvider] = useState<any>(null); // TODO: fix this any
  const client = useContext(ClientContext);
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
