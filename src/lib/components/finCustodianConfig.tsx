import { FinCustodianOption } from "@/lib/helpers/finCustodian";
import React from "react";
import { SafeEventEmitterProvider } from "@web3auth/base";

interface FinCustodianProps {
  children: React.ReactNode;
  client: FinCustodianOption;
}

interface FinCustodianContext {
  client: FinCustodianOption;
  provider: SafeEventEmitterProvider | null;
  setProvider: (provider: SafeEventEmitterProvider | null) => void;
  fincustodian: any;
  setFinCustodian: (fincustodian: any) => void;
}

export const ClientContext = React.createContext<FinCustodianOption>(
  {} as FinCustodianOption
);

export const FincustodianContext = React.createContext<FinCustodianContext>({
  client: {} as FinCustodianOption,
  provider: null,
  fincustodian: null,
  setProvider: () => {},
  setFinCustodian: () => {},
});

const FinCustodianConfig: React.FC<FinCustodianProps> = ({
  client,
  children,
}) => {
  const [provider, setProvider] =
    React.useState<SafeEventEmitterProvider | null>(null);
  const [fincustodian, setFinCustodian] = React.useState<any>(null);
  return (
    <FincustodianContext.Provider
      value={{ client, provider, setProvider, fincustodian, setFinCustodian }}
    >
      {children}
    </FincustodianContext.Provider>
  );
};
export default FinCustodianConfig;
