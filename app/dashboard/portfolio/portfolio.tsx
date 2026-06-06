import { ResponsiveContainer, AreaChart, Area, YAxis } from "recharts";

export default function Portfolio(props: {
  purchasedCurrency: number;
  balance: number;
  chartData: { pv: number }[];
}) {
  const totalCoins = props.balance + props.purchasedCurrency;
  const profit = totalCoins >= 10000;
  const difference = totalCoins - 10000;

  const changeColor = profit
    ? "text-green-400 text-2xl font-semibold"
    : "text-red-400 text-2xl font-semibold";

  const chartColor = profit ? "#4ade80" : "#f87171";
  const fillColor = profit
    ? "rgba(74, 222, 128, 0.15)"
    : "rgba(248, 113, 113, 0.15)";

  return (
    <div className="bg-gray2 flex flex-col gap-y-4 rounded-2xl py-5 px-6 w-full">
      <p className="text-gray-400 text-sm">YOUR WALLET</p>

      <div>
        <div className="border-b border-gray-600 flex gap-x-2 pb-2">
          <p className=" text-gray-300 font-semibold">INITIAL BALANCE:</p>
          <p className="text-gray-200 font-semibold">$10,000</p>
        </div>
      </div>
      <div className="mt-8">
        <div className="flex justify-between items-center">
          <p className="text-lg text-gray-300 font-semibold">Total Value:</p>
          <p className="text-white text-xl font-bold">
            ${totalCoins.toFixed(2)}
          </p>
        </div>
        <div className="mt-5">
          <p className={changeColor}>
            {profit ? "+" : ""}${difference.toFixed(2)}
          </p>
        </div>
      </div>

      <div className="w-full h-62 rounded-xl p-2 -mt-9">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={props.chartData}>
            <YAxis domain={["dataMin - 10", "dataMax + 10"]} hide={true} />
            <Area
              type="monotone"
              dataKey="pv"
              stroke={chartColor}
              strokeWidth={2}
              fill={fillColor}
              dot={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
