import { useEffect, useState } from "react";
import { FinCustodian, FinCustodianRpc as RPC } from "@/helpers/finCustodian";
import { CHAIN_NAMESPACES, SafeEventEmitterProvider } from "@web3auth/base";
// import RPC from "../helpers/web3RPC";

const clientId = ""; // get from https://dashboard.web3auth.io

function App() {
  const [fincus, setFincus] = useState<FinCustodian | null>(null);
  const [provider, setProvider] = useState<SafeEventEmitterProvider | null>(
    null
  );
  useEffect(() => {
    const init = async () => {
      try {
        const fincus = new FinCustodian({
          fincusId: clientId,
          web3AuthNetwork: "testnet", // mainnet, aqua, celeste, cyan or testnet
          chainConfig: {
            chainNamespace: CHAIN_NAMESPACES.EIP155,
            chainId: "0x6545",
            rpcTarget: "https://rpc-testnet.bitkubchain.io", // This is the public RPC we have added, please pass on your own endpoint while creating an app
          },
        });

        setFincus(fincus);

        await fincus.initModal();
        setProvider(fincus.provider);
      } catch (error) {
        console.error(error);
      }
    };
    init();
  }, []);

  const login = async () => {
    if (!fincus) {
      console.log("web3auth not initialized yet");
      return;
    }
    const finCustodianProvider = await fincus.connect();
    console.log({ finCustodianProvider });

    // if (!finCustodianProvider) {
    //   Router.push("/kycPage");
    // }
    setProvider(finCustodianProvider);
  };

  const authenticateUser = async () => {
    if (!fincus) {
      console.log("web3auth not initialized yet");
      return;
    }
    const idToken = await fincus.authenticateUser();
    console.log(idToken);
  };

  const getUserInfo = async () => {
    if (!fincus) {
      console.log("web3auth not initialized yet");
      return;
    }
    const user = await fincus.getUserInfo();
    console.log(user);
  };

  const logout = async () => {
    if (!fincus) {
      console.log("web3auth not initialized yet");
      return;
    }
    await fincus.logout();
    setProvider(null);
  };

  const getChainId = async () => {
    if (!provider) {
      console.log("provider not initialized yet");
      return;
    }
    const rpc = new RPC(provider);
    const chainId = await rpc.getChainId();
    console.log(chainId);
  };
  const getAccounts = async () => {
    if (!provider) {
      console.log("provider not initialized yet");
      return;
    }
    const rpc = new RPC(provider);
    const address = await rpc.getAccounts();
    console.log(address);
  };

  const getBalance = async () => {
    if (!provider) {
      console.log("provider not initialized yet");
      return;
    }
    const rpc = new RPC(provider);
    const balance = await rpc.getBalance();
    console.log(balance);
  };

  const sendTransaction = async () => {
    if (!provider) {
      console.log("provider not initialized yet");
      return;
    }
    const rpc = new RPC(provider);
    const receipt = await rpc.sendTransaction();
    console.log(receipt);
  };

  const signMessage = async () => {
    if (!provider) {
      console.log("provider not initialized yet");
      return;
    }
    const rpc = new RPC(provider);
    const signedMessage = await rpc.signMessage();
    console.log(signedMessage);
  };

  const getPrivateKey = async () => {
    if (!provider) {
      console.log("provider not initialized yet");
      return;
    }
    const rpc = new RPC(provider);
    const privateKey = await rpc.getPrivateKey();
    console.log(privateKey);
  };

  const loggedInView = (
    <>
      <div className="flex-container">
        <div>
          <button onClick={getUserInfo} className="card">
            Get User Info
          </button>
        </div>
        <div>
          <button onClick={authenticateUser} className="card">
            Get ID Token
          </button>
        </div>
        <div>
          <button onClick={getChainId} className="card">
            Get Chain ID
          </button>
        </div>
        <div>
          <button onClick={getAccounts} className="card">
            Get Accounts
          </button>
        </div>
        <div>
          <button onClick={getBalance} className="card">
            Get Balance
          </button>
        </div>
        <div>
          <button onClick={signMessage} className="card">
            Sign Message
          </button>
        </div>
        <div>
          <button onClick={sendTransaction} className="card">
            Send Transaction
          </button>
        </div>
        <div>
          <button onClick={getPrivateKey} className="card">
            Get Private Key
          </button>
        </div>
        <div>
          <button onClick={logout} className="card">
            Log Out
          </button>
        </div>
      </div>

      <div id="console" style={{ whiteSpace: "pre-line" }}>
        <p style={{ whiteSpace: "pre-line" }}>Logged in Successfully!</p>
      </div>
    </>
  );

  const unloggedInView = (
    <button
      onClick={login}
      className="card bg-white rounded-lg text-black py-2 font-semibold"
    >
      Login
    </button>
  );

  return (
    <div className="container">
      <h1 className="title">
        <a target="_blank" href="http://web3auth.io/" rel="noreferrer">
          Web3Auth
        </a>
        & NextJS Example
      </h1>

      <div className="grid">
        {provider !== null ? loggedInView : unloggedInView}
      </div>

      <footer className="footer">
        <a
          href="https://github.com/Web3Auth/examples"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source code
        </a>
      </footer>
    </div>
  );
}

export default App;
