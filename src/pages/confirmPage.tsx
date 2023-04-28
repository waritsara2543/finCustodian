import Link from "next/link";

const ConfirmPage = () => {
  return (
    <div className="p-10">
      <h1 className="text-xl font-bold text-center">Confirm Page</h1>
      <div className="grid grid-cols-2 gap-5">
        {/* callbackUrl */}
        <Link href={"/"}>
          <button
            className="text-white bg-blue-600 p-2 rounded-lg w-full"
            onClick={() => {
              localStorage.setItem("confirm", "true");
            }}
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
