import React from "react";
import { useProviderStore } from "../stores/provider";

export function useGetUser() {
  const { fincus } = useProviderStore();
  const authenticateUser = React.useCallback(async () => {
    if (!fincus) {
      console.log("web3auth not initialized yet");
      return;
    }
    const idToken = await fincus.authenticateUser();
    console.log(idToken);
  }, [fincus]);

  const getUserInfo = React.useCallback(async () => {
    if (!fincus) {
      console.log("web3auth not initialized yet");
      return;
    }
    const user = await fincus.getUserInfo();
    console.log(user);
  }, [fincus]);

  return { authenticateUser, getUserInfo };
}
