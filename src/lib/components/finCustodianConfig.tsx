import { FinCustodianOption } from "@/lib/helpers/finCustodian";
import React from "react";

interface FinCustodianProps {
  children: React.ReactNode;
  client: FinCustodianOption;
}

export const ClientContext = React.createContext<FinCustodianOption>(
  {} as FinCustodianOption
);

const FinCustodianConfig: React.FC<FinCustodianProps> = ({
  client,
  children,
}) => {
  return (
    <ClientContext.Provider value={client}>{children}</ClientContext.Provider>
  );
};
export default FinCustodianConfig;
