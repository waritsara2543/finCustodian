import { Web3Auth, Web3AuthOptions } from "@web3auth/modal";
import type { SafeEventEmitterProvider } from "@web3auth/base";
import Web3 from "web3";

export type FinCustodianOption = Omit<Web3AuthOptions, "clientId"> & {
  fincusId: string;
};
export class FinCustodian extends Web3Auth {
  fincusId: string;
  constructor(options: FinCustodianOption) {
    const clientId =
      "BM0x6zc4KOYpBbZz4MTubBar2bpUYpv_hEq9UYnFDuhhRL_Z1EHrnihHmEZZ1h4wh0Zmg8HlQRh-xER5Ka7M5W4";
    // options.enableLogging = true;
    super({ ...options, clientId });
    this.fincusId = options.fincusId;
  }
}

export class FinCustodianRpc {
  private provider: SafeEventEmitterProvider;
  constructor(provider: SafeEventEmitterProvider) {
    this.provider = provider;
  }

  async getChainId(): Promise<string> {
    try {
      const web3 = new Web3(this.provider as any);

      // Get the connected Chain's ID
      const chainId = await web3.eth.getChainId();

      return chainId.toString();
    } catch (error) {
      return error as string;
    }
  }

  async getAccounts(): Promise<any> {
    try {
      const web3 = new Web3(this.provider as any);

      // Get user's Ethereum public address
      const address = (await web3.eth.getAccounts())[0];

      return address;
    } catch (error) {
      return error;
    }
  }

  async getBalance(): Promise<string> {
    try {
      const web3 = new Web3(this.provider as any);

      // Get user's Ethereum public address
      const address = (await web3.eth.getAccounts())[0];

      // Get user's balance in ether
      const balance = web3.utils.fromWei(
        await web3.eth.getBalance(address) // Balance is in wei
      );

      return balance;
    } catch (error) {
      return error as string;
    }
  }

  async sendTransaction(): Promise<any> {
    try {
      const web3 = new Web3(this.provider as any);

      // Get user's Ethereum public address
      const fromAddress = (await web3.eth.getAccounts())[0];

      const destination = fromAddress;

      const amount = web3.utils.toWei("0.01"); // Convert 1 ether to wei
      // Submit transaction to the blockchain and wait for it to be mined
      const receipt = await web3.eth.sendTransaction({
        from: fromAddress,
        to: destination,
        value: amount,
        maxPriorityFeePerGas: "5000000000", // Max priority fee per gas
        maxFeePerGas: "6000000000000", // Max fee per gas
      });
      localStorage.removeItem("confirm");
      return receipt;

      return { error: true, message: "User rejected transaction" };
    } catch (error) {
      return error as string;
    }
  }

  async signMessage() {
    try {
      const web3 = new Web3(this.provider as any);

      // Get user's Ethereum public address
      const fromAddress = (await web3.eth.getAccounts())[0];

      const originalMessage = "YOUR_MESSAGE";

      // Sign the message
      const signedMessage = await web3.eth.personal.sign(
        originalMessage,
        fromAddress,
        "test password!" // configure your own password here.
      );

      return signedMessage;
    } catch (error) {
      return error as string;
    }
  }

  async getPrivateKey(): Promise<any> {
    try {
      const privateKey = await this.provider.request({
        method: "eth_private_key",
      });

      return privateKey;
    } catch (error) {
      return error as string;
    }
  }
}
