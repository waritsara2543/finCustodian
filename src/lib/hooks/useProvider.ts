import { FinCustodian } from "@/lib/helpers/finCustodian";
import { useContext, useEffect, useMemo, useState } from "react";
import { FincustodianContext } from "../components/finCustodianConfig";

export function useGetProvider(): any {
  const finCustodian = useContext(FincustodianContext);
  const [provider, setProvider] = useState<any>(null);
  useEffect(() => {
    const init = async () => {
      try {
        const fincus = new FinCustodian(finCustodian.client);
        finCustodian.setFinCustodian(fincus);
        await fincus.initModal();
        setProvider(fincus.provider);
      } catch (error) {
        console.error(error);
      }
    };
    init();
  }, []);

  useEffect(() => {
    finCustodian.setProvider(provider);
  }, [provider]);

  const isInitialized = useMemo(() => {
    if (!finCustodian.fincustodian || !finCustodian.provider) {
      return false;
    }
    return true;
  }, [finCustodian]);

  return { isInitialized };
}
