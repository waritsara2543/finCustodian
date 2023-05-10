import { FinCustodian } from "@/lib/helpers/finCustodian";
import { useContext, useEffect, useMemo } from "react";
import { ClientContext } from "../components/finCustodianConfig";
import { useProviderStore } from "../stores/provider";

export function useGetProvider(): any {
  const { provider, setProvider, setFincus, fincus } = useProviderStore();
  const client = useContext(ClientContext);
  useEffect(() => {
    const init = async () => {
      try {
        const fincus = new FinCustodian(client);
        console.log({ fincus });

        setFincus(fincus);
        await fincus.initModal();
        setProvider(fincus.provider);
      } catch (error) {
        console.error(error);
      }
    };
    init();
  }, [client, setProvider, setFincus]);

  const isInitialized = useMemo(() => {
    if (!fincus || !provider) {
      return false;
    }
    return true;
  }, [fincus, provider]);

  return { provider, isInitialized, fincus };
}
