import { FinCustodianRpc as RPC } from "@/lib/helpers/finCustodian";
import { useGetProvider } from "@/lib/hooks/useProvider";
import { useLogin } from "@/lib/hooks/useLogin";
import { useSendTransaction } from "@/lib/hooks/useSendTransaction";

function App() {
  const { fincus, provider } = useGetProvider();
  const { login, logout } = useLogin();
  const { sendTransaction } = useSendTransaction();

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
      <div className="grid gap-5 w-full">
        <div>
          <button
            onClick={getUserInfo}
            className="card w-full bg-white rounded-lg text-black py-2 font-semibold"
          >
            Get User Info
          </button>
        </div>
        <div>
          <button
            onClick={authenticateUser}
            className="card w-full bg-white rounded-lg text-black py-2 font-semibold"
          >
            Get ID Token
          </button>
        </div>
        <div>
          <button
            onClick={getChainId}
            className="card w-full bg-white rounded-lg text-black py-2 font-semibold"
          >
            Get Chain ID
          </button>
        </div>
        <div>
          <button
            onClick={getAccounts}
            className="card w-full bg-white rounded-lg text-black py-2 font-semibold"
          >
            Get Accounts
          </button>
        </div>
        <div>
          <button
            onClick={getBalance}
            className="card w-full bg-white rounded-lg text-black py-2 font-semibold"
          >
            Get Balance
          </button>
        </div>
        <div>
          <button
            onClick={signMessage}
            className="card w-full bg-white rounded-lg text-black py-2 font-semibold"
          >
            Sign Message
          </button>
        </div>
        <div>
          <button
            onClick={sendTransaction}
            className="card w-full bg-white rounded-lg text-black py-2 font-semibold"
          >
            Send Transaction
          </button>
        </div>
        <div>
          <button
            onClick={getPrivateKey}
            className="card w-full bg-white rounded-lg text-black py-2 font-semibold"
          >
            Get Private Key
          </button>
        </div>
        <div>
          <button
            onClick={logout}
            className="card w-full bg-white rounded-lg text-black py-2 font-semibold"
          >
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
    <div className="px-52 py-5 w-full">
      <h1 className="title font-bold text-lg text-center py-2">
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
