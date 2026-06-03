"use client";
import { useState } from "react";
import Header from "../app/dashboard/header/header";
import Portfolio from "../app/dashboard/portfolio/portfolio";
import CoinInformation from "../app/dashboard/coin-card/coin-Information";

export default function Page() {
  const [balance, setBalance] = useState(10000);
  const [purchasedCurrency, setPurchasedCurrency] = useState(0);
  const handleMarketAction = (priceChange: number, cryptoChange: number) => {
    setBalance((prev) => Number((prev + priceChange).toFixed(2)));
    setPurchasedCurrency((prev) => Number((prev + cryptoChange).toFixed(2)));
  };

  return (
    <div className="py-6 px-4 flex flex-col gap-y-6 bg-gray1 min-h-screen">
      <Header balance={balance} />
      <div className="flex gap-x-6">
        <CoinInformation
          purchasedCurrency={purchasedCurrency}
          handleMarketAction={handleMarketAction}
          balance={balance}
        />
        <Portfolio purchasedCurrency={purchasedCurrency} balance={balance} />
      </div>
    </div>
  );
}
