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
  handleMarketAction,
  balance,
  purchasedCurrency,
}: any) {
  const [coins, setCoins] = useState([
    {
      id: 1,
      owned: 0,
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
      owned: 0,
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
      owned: 0,
      digitalCurrency: "Ethereum (ETH)",
      icon: <FaEthereum className="bg-white size-5 px-1.5 rounded-full" />,
      price: 2132.4,
      prevPrice: 2132.4,
      picture: picture1,
    },

    {
      id: 5,
      owned: 0,
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
      owned: 0,
      digitalCurrency: "Cardano (ADA)",
      icon: <SiCardano className="text-blue-800 size-5" />,
      price: 0.85,
      prevPrice: 0.85,
      picture: picture2,
    },
    {
      id: 3,
      owned: 0,
      digitalCurrency: "Binance",
      icon: (
        <SiBinance className="text-orange-400 bg-gray-900 size-5 rounded-full px-1" />
      ),
      price: 5112,
      prevPrice: 5112,
      picture: picture3,
    },
  ]);

  // PRICE CHANGE
  // useEffect(() => {
  //   const timeChangePrice = setInterval(() => {
  //     setCoins((prevCoins) =>
  //       prevCoins.map((coin) => {
  //         const randomPrice = Math.random() * 2 - 0.1;
  //         const newPrice = Math.max(1, coin.price + randomPrice);
  //         return {
  //           ...coin,
  //           prevPrice: coin.price,
  //           price: Number(newPrice.toFixed(2)),
  //         };
  //       }),
  //     );
  //   }, 2000);
  //   return () => clearInterval(timeChangePrice);
  // }, []);
  useEffect(() => {
    const timeChangePrice = setInterval(() => {
      setCoins((prevCoins) => {
        let totalNewCryptoValue = 0;
        const updatedCoins = prevCoins.map((coin) => {
          const randomPrice = Math.random() * 2 - 0.5;
          const newPrice = Math.max(1, coin.price + randomPrice);

          // محاسبه ارزش جدید سکه‌هایی که کاربر از این ارز دارد
          totalNewCryptoValue += coin.owned * newPrice;

          return {
            ...coin,
            prevPrice: coin.price,
            price: Number(newPrice.toFixed(2)),
          };
        });

        // مابه‌تفاوت ارزش جدید و قدیم ارزهای کاربر را به متغیر اصلی اضافه می‌کنیم
        const difference = totalNewCryptoValue - purchasedCurrency;
        handleMarketAction(0, difference);

        return updatedCoins;
      });
    }, 2000);
    return () => clearInterval(timeChangePrice);
  }, [purchasedCurrency]); // وابستگی به purchasedCurrency اضافه شد

  // MARKET CRASH
  useEffect(() => {
    const marketCrash = setInterval(() => {
      // alert("🚨MARKET CRASH");
      setCoins((prevCoins) =>
        prevCoins.map((coin) => {
          return {
            ...coin,
            prevPrice: coin.price,
            price: Number(coin.price * 0.8),
          };
        }),
      );
    }, 30000);

    return () => clearInterval(marketCrash);
  }, []);

  // useEffect(() => {
  //   const marketCrash = setInterval(() => {
  //     setCoins((prevCoins) => {
  //       let totalNewCryptoValue = 0;

  //       const updatedCoins = prevCoins.map((coin) => {
  //         const newPrice = coin.price * 0.8;
  //         totalNewCryptoValue += coin.owned * newPrice;

  //         return {
  //           ...coin,
  //           prevPrice: coin.price,
  //           price: Number(newPrice.toFixed(2)),
  //         };
  //       });

  //       // دارایی کاربر بعد از کرش شدیداً کم می‌شود
  //       const difference = totalNewCryptoValue - purchasedCurrency;
  //       onMarketAction(0, difference);

  //       return updatedCoins;
  //     });
  //   }, 30000);

  //   return () => clearInterval(marketCrash);
  // }, [purchasedCurrency]);

  // BUY COIN
  const buyCoin = (id: number, price: number) => {
    if (balance >= price) {
      handleMarketAction(-price, price);
      setCoins((prev) =>
        prev.map((a) => (a.id === id ? { ...a, owned: a.owned + 1 } : a)),
      );
    } else {
      alert("موجودی کیف پول شما کافی نمی باشد.");
    }
  };

  // SELL COIN
  const sellCoin = (id: number, price: number) => {
    const coin = coins.find((c) => c.id === id);
    if (coin && coin.owned > 0) {
      handleMarketAction(price, -price);
      setCoins((prev) =>
        prev.map((b) => (b.id === id ? { ...b, owned: b.owned - 1 } : b)),
      );
    } else {
      alert("!ابتدا باید این ارز را خریداری کنید");
    }
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
