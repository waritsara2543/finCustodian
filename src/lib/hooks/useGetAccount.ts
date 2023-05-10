import { FinCustodianRpc as RPC } from "@/lib/helpers/finCustodian";
import { useCallback, useContext } from "react";
import { FincustodianContext } from "../components/finCustodianConfig";

export function useGetAccount() {
  const provider = useContext(FincustodianContext).provider;

  const getChainId = useCallback(async () => {
    if (!provider) {
      console.log("provider not initialized yet");
      return;
    }
    const rpc = new RPC(provider);
    const chainId = await rpc.getChainId();
    console.log(chainId);
  }, [provider]);

  const getAccounts = useCallback(async () => {
    if (!provider) {
      console.log("provider not initialized yet");
      return;
    }
    const rpc = new RPC(provider);
    const address = await rpc.getAccounts();
    console.log(address);
  }, [provider]);

  const getBalance = useCallback(async () => {
    if (!provider) {
      console.log("provider not initialized yet");
      return;
    }
    const rpc = new RPC(provider);
    const balance = await rpc.getBalance();
    console.log(balance);
  }, [provider]);

  const signMessage = useCallback(async () => {
    if (!provider) {
      console.log("provider not initialized yet");
      return;
    }
    const rpc = new RPC(provider);
    const signedMessage = await rpc.signMessage();
    console.log(signedMessage);
  }, [provider]);

  const getPrivateKey = useCallback(async () => {
    if (!provider) {
      console.log("provider not initialized yet");
      return;
    }
    const rpc = new RPC(provider);
    const privateKey = await rpc.getPrivateKey();
    console.log(privateKey);
  }, [provider]);

  return { getAccounts, getBalance, getChainId, signMessage, getPrivateKey };
}
