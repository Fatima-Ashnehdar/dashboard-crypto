"use client";
import { useEffect, useState } from "react";
import { BsCurrencyBitcoin } from "react-icons/bs";
import { FaEthereum } from "react-icons/fa6";
import { SiSolana } from "react-icons/si";
import { SiCardano } from "react-icons/si";
import { SiTether } from "react-icons/si";
import { SiBinance } from "react-icons/si";
import picture1 from "../../../public/picture/Vector 12.png";
import picture2 from "../../../public/picture/Vector 13.png";
import picture3 from "../../../public/picture/graph.png";
import picture4 from "../../../public/picture/Vector 14.png";
import CoinCard from "./coin-card";
export default function CoinInformation({
  handleMarket,
  balance,
  purchasedCurrency,
}: any) {
  const [coins, setCoins] = useState([
    {
      id: 1,
      number: 0,
      digitalCurrency: "Bitcoin (BTC)",
      icon: (
        <BsCurrencyBitcoin className="text-white bg-orange-500 size-5 rounded-full px-1" />
      ),
      price: 6412.2,
      prevPrice: 6412.2,
      picture: picture3,
    },
    {
      id: 2,
      number: 0,
      digitalCurrency: "Tether",
      icon: (
        <SiTether className="text-white bg-green-400 size-5 rounded-full px-1" />
      ),
      price: 180,
      prevPrice: 180,
      picture: picture4,
    },
    {
      id: 4,
      number: 0,
      digitalCurrency: "Ethereum (ETH)",
      icon: <FaEthereum className="bg-white size-5 px-1.5 rounded-full" />,
      price: 2132.4,
      prevPrice: 2132.4,
      picture: picture1,
    },

    {
      id: 5,
      number: 0,
      digitalCurrency: "Solana (SOL)",
      icon: (
        <SiSolana className="bg-gray-900 text-green-300 rounded-full px-2 size-6" />
      ),
      price: 142,
      prevPrice: 142,
      picture: picture4,
    },
    {
      id: 6,
      number: 0,
      digitalCurrency: "Cardano (ADA)",
      icon: <SiCardano className="text-blue-800 size-5" />,
      price: 0.85,
      prevPrice: 0.85,
      picture: picture2,
    },
    {
      id: 3,
      number: 0,
      digitalCurrency: "Binance",
      icon: (
        <SiBinance className="text-orange-400 bg-gray-900 size-5 rounded-full px-1" />
      ),
      price: 5112,
      prevPrice: 5112,
      picture: picture3,
    },
  ]);

  useEffect(() => {
    const timeChangePrice = setInterval(() => {
      setCoins((prevCoins) => {
        let totalCryptoNewPrice = 0;
        const updatedCoins = prevCoins.map((coin) => {
          const randomPrice = Math.random() * 2 - 0.5;
          const newPrice = Math.max(2, coin.price + randomPrice);

          totalCryptoNewPrice += coin.number * newPrice;

          return {
            ...coin,
            prevPrice: coin.price,
            price: Number(newPrice.toFixed(2)),
          };
        });

        const difference = totalCryptoNewPrice - purchasedCurrency;
        handleMarket(0, difference);

        return updatedCoins;
      });
    }, 2000);
    return () => clearInterval(timeChangePrice);
  }, [purchasedCurrency]);

  // MARKET CRASH
  // useEffect(() => {
  //   const marketCrash = setInterval(() => {
  //     alert("🚨MARKET CRASH");
  //     setCoins((prevCoins) =>
  //       prevCoins.map((coin) => {
  //         return {
  //           ...coin,
  //           prevPrice: coin.price,
  //           price: Number(coin.prevPrice - 10.8),
  //         };
  //       }),
  //     );
  //   }, 30000);

  //   return () => clearInterval(marketCrash);
  // }, []);

  // BUY COIN
  const buyCoin = (id: number, price: number) => {
    handleMarket(-price, price);
    setCoins((prev) =>
      prev.map((a) => (a.id === id ? { ...a, number: a.number + 1 } : a)),
    );
  };

  // SELL COIN
  const sellCoin = (id: number, price: number) => {
    handleMarket(price, -price);
    setCoins((prev) =>
      prev.map((b) => (b.id === id ? { ...b, number: b.number - 1 } : b)),
    );
  };

  return (
    <div className="bg-gray2 flex flex-col gap-y-3 rounded-3xl py-5 px-6 w-800">
      <p className="text-gray-400 text-sm">MARKETS</p>
      <div className="grid grid-cols-3 gap-y-6 gap-x-6">
        {coins.map((item) => (
          <CoinCard
            key={item.id}
            digitalCurrency={item.digitalCurrency}
            icon={item.icon}
            price={item.price}
            prevPrice={item.prevPrice}
            picture={item.picture}
            onBuy={() => buyCoin(item.id, item.price)}
            onSell={() => sellCoin(item.id, item.price)}
          />
        ))}
      </div>
    </div>
  );
}
