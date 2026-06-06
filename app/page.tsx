"use client";
import { useState } from "react";
import Header from "../app/dashboard/header/header";
import Portfolio from "../app/dashboard/portfolio/portfolio";
import CoinInformation from "../app/dashboard/coin-card/coin-Information";
import Categories from "./dashboard/categories/categories";

export default function Page() {
  const [balance, setBalance] = useState(10000);
  const [purchasedCurrency, setPurchasedCurrency] = useState(0);

  const [portfolioChart, setPortfolioChart] = useState<{ pv: number }[]>(
    Array(15).fill({ pv: 10000 }),
  );

  const handleMarket = (
    priceChange: number,
    cryptoChange: number,
    currentTotalValue?: number,
  ) => {
    setBalance((prev) => Number((prev + priceChange).toFixed(2)));
    setPurchasedCurrency((prev) => Number((prev + cryptoChange).toFixed(2)));

    if (currentTotalValue !== undefined) {
      setPortfolioChart((prevChart) => {
        return [
          ...prevChart,
          { pv: Number(currentTotalValue.toFixed(2)) },
        ].slice(-15);
      });
    }
  };

  return (
    <div className="py-6 px-4 flex flex-col gap-y-6 bg-gray1">
      <Header balance={balance} />
      <div className="flex gap-x-6">
        <CoinInformation
          purchasedCurrency={purchasedCurrency}
          handleMarket={handleMarket}
          balance={balance}
        />
        <Portfolio
          purchasedCurrency={purchasedCurrency}
          balance={balance}
          chartData={portfolioChart}
        />
      </div>
      <Categories />
    </div>
  );
}
