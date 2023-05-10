import Link from "next/link";
import { FinCustodianRpc as RPC } from "@/lib/helpers/finCustodian";
import { useContext, useEffect, useState } from "react";
import { FincustodianContext } from "@/lib/components/finCustodianConfig";

const ConfirmPage = () => {
  const provider = useContext(FincustodianContext).provider;
  const [isLoading, setIsLoading] = useState(false);
  const sendTransaction = async () => {
    if (!provider) return;
    const rpc = new RPC(provider);
    setIsLoading(true);
    const receipt = await rpc.sendTransaction();
    setIsLoading(false);
    console.log(receipt);
  };
  useEffect(() => {
    console.log("isLoading", isLoading);
  }, [isLoading]);
  return (
    <div className="p-10">
      <h1 className="text-xl font-bold text-center">Confirm Page</h1>
      <div className="grid grid-cols-2 gap-5">
        {/* callbackUrl */}
        <Link href={"/"}>
          <button
            className="text-white bg-blue-600 p-2 rounded-lg w-full"
            onClick={sendTransaction}
          >
            Confirm
          </button>
        </Link>
        {/* callbackUrl */}
        <Link href={"/"}>
          <button className="text-white border border-blue-600 p-2 rounded-lg w-full">
            Reject
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ConfirmPage;
