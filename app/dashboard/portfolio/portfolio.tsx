import { MdOutlineShowChart } from "react-icons/md";

export default function Portfolio(props: {
  purchasedCurrency: number;
  balance: number;
}) {
  const totalCoins = props.balance + props.purchasedCurrency;
  const profit = totalCoins >= 10000;
  const difference = totalCoins - 10000;
  const changeColor = profit
    ? "text-green-400 text-2xl font-semibold"
    : "text-red-400 text-2xl font-semibold";

  return (
    <div className="bg-gray2 flex flex-col gap-y-4 rounded-2xl py-5 px-6 w-full">
      <p className="text-gray-400 text-sm">YOUR WALLET</p>
      <div>
        <div className="border-b border-gray-600 flex gap-x-2 pb-2">
          <p className=" text-gray-300 font-semibold">INITIAL BALANCE:</p>
          <p className="text-gray-200 font-semibold">$10,000</p>
        </div>
      </div>

      <div className="flex gap-x-2 pt-6">
        <p className="text-gray-400 text-sm font-semibold">
          Crypto Currency Purchased:
        </p>
        <p className="text-blue-400 font-semibold">
          ${props.purchasedCurrency.toFixed(2)}
        </p>
      </div>
      <div className="mt-3">
        <p className="text-lg text-gray-300 font-semibold">At the moment:</p>
      </div>
      <div className="flex items-center justify-between gap-x-2">
        {/* <p className={changeColor}>
          {profit ? "+" : ""}${difference.toFixed(2)}
        </p> */}
        <div className={changeColor}>
          <MdOutlineShowChart className="size-40" />
        </div>
      </div>
    </div>
  );
}
