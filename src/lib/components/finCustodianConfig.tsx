import { FinCustodianOption } from "@/lib/helpers/finCustodian";
import React, { useEffect } from "react";
import { useProviderStore } from "../stores/provider";

interface FinCustodianProps {
  children: React.ReactNode;
  client: FinCustodianOption;
}

const FinCustodianConfig: React.FC<FinCustodianProps> = ({
  client,
  children,
}) => {
  const { setClient } = useProviderStore();

  useEffect(() => {
    setClient(client);
  }, [client, setClient]);

  return <>{children}</>;
};
export default FinCustodianConfig;
