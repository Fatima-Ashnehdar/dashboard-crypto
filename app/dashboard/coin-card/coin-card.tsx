import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";

import { ResponsiveContainer, AreaChart, Area, YAxis } from "recharts";
export default function CoinCard(props: {
  key: number;
  digitalCurrency: string;
  price: number;
  prevPrice: number;
  chart: { pv: number }[];
  picture: StaticImageData;
  icon: ReactNode;
  onBuy: () => void;
  onSell: () => void;
}) {
  const changeColor = props.price >= props.prevPrice;
  const priceColor = changeColor
    ? "text-green-400 text-2xl font-semibold"
    : "text-red-400 text-2xl font-semibold";
  const chartColor = changeColor ? "#4ade80" : "#f87171";
  const fillColor = changeColor
    ? "rgba(74, 222, 128, 0.15)"
    : "rgba(248, 113, 113, 0.15)";
  return (
    <div className="bg-gray1 rounded-2xl px-5 py-5 flex flex-col gap-y-4">
      <div>
        <div className="flex items-center gap-x-1">
          {props.icon}
          <p className="text-gray-300 text-sm font-semibold">
            {props.digitalCurrency}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <p className={`${priceColor}`}>${props.price.toFixed(2)}</p>
        <div className="w-32 h-14">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={props.chart}>
              <YAxis domain={["dataMin - 1", "dataMax + 1"]} hide={true} />
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
      <div className="flex justify-between">
        <div>
          <button
            onClick={props.onSell}
            className="bg-[#fa525240] text-[#f03e3e] border border-[#f03e3e] rounded-md text-sm  text-center font-bold px-6 py-1.5 cursor-pointer"
          >
            SELL
          </button>
        </div>
        <div>
          <button
            onClick={props.onBuy}
            className="bg-[#51cf6640] text-[#37b24d] rounded-md text-sm text-center font-bold px-6 py-1.5 cursor-pointer"
          >
            BUY
          </button>
        </div>
      </div>
    </div>
  );
}
