import { useMockupStore } from "@/lib/stores/mockup";
import Link from "next/link";

const KYCPage = () => {
  const { setIsKYC } = useMockupStore();
  return (
    <div className="p-10">
      <div className="grid gap-5">
        <h1 className="text-xl font-bold text-center">Know Your Customer</h1>
        <input
          type="text"
          placeholder="name"
          className="text-black p-2 rounded-lg"
        />
        <input
          type="text"
          placeholder="email"
          className="text-black p-2 rounded-lg"
        />
        <input
          type="text"
          placeholder="phone"
          className="text-black p-2 rounded-lg"
        />
        {/* callbackUrl */}
        <Link href={"/"}>
          <button
            className="text-white bg-blue-600 p-2 rounded-lg w-full"
            onClick={() => {
              setIsKYC(true);
            }}
          >
            SUBMIT
          </button>
        </Link>
      </div>
    </div>
  );
};

export default KYCPage;
