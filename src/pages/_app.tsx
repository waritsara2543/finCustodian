import FinCustodianConfig from "@/lib/components/finCustodianConfig";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { CHAIN_NAMESPACES } from "@web3auth/base";
import { OPENLOGIN_NETWORK } from "@toruslabs/openlogin";

const client = {
  fincusId: "",
  web3AuthNetwork: OPENLOGIN_NETWORK.TESTNET, // mainnet, aqua, celeste, cyan or testnet
  chainConfig: {
    chainNamespace: CHAIN_NAMESPACES.EIP155,
    chainId: "0x6545",
    rpcTarget: "https://rpc-testnet.bitkubchain.io", // This is the public RPC we have added, please pass on your own endpoint while creating an app
  },
};
export default function App({ Component, pageProps }: AppProps) {
  return (
    <FinCustodianConfig client={client}>
      <Component {...pageProps} />
    </FinCustodianConfig>
  );
}
