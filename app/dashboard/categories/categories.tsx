export default function Categories() {
  return (
    <div className="flex justify-between">
      <div className="bg-gray2 rounded-2xl py-6 px-4 w-85">
        <p className="text-white text-xl font-semibold">Most popular in 24h</p>
        <div className="mt-12 px-4 flex flex-col gap-y-7">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-x-2">
              <img
                width="40"
                height="40"
                data-nuxt-img=""
                sizes="40px"
                className="rounded-full"
                alt="بیت کوین کش"
                loading="lazy"
                decoding="async"
                src="https://kifpool.me/uploads/coin-new-images/bitcoin-cash.png"
              />
              <div className="flex flex-col gap-y-1">
                <p className="text-white text-sm font-semibold">BCH</p>
                <p className="text-gray-500 text-xs">Profit / Loss</p>
              </div>
            </div>
            <div className="flex flex-col items-end gap-y-1">
              <p className="text-white text-sm font-semibold">$218</p>
              <p className="text-green-300 text-sm">+2.65%</p>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-x-2">
              <img
                width="40"
                height="40"
                data-nuxt-img=""
                sizes="40px"
                className="rounded-full"
                alt="چین لینک"
                loading="lazy"
                decoding="async"
                src="https://kifpool.me/uploads/coin-new-images/chainlink.png"
              ></img>
              <div className="flex flex-col gap-y-1">
                <p className="text-white text-sm font-semibold">LINK</p>
                <p className="text-gray-500 text-xs">Profit / Loss</p>
              </div>
            </div>
            <div className="flex flex-col items-end gap-y-1">
              <p className="text-white text-sm font-semibold">$7</p>
              <p className="text-green-300 text-sm">+5.12%</p>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-x-2">
              <img
                width="40"
                height="40"
                data-nuxt-img=""
                sizes="40px"
                className="rounded-full"
                alt="زی کش"
                loading="lazy"
                decoding="async"
                src="https://kifpool.me/uploads/coin-new-images/zcash.png"
              ></img>
              <div className="flex flex-col gap-y-1">
                <p className="text-white text-sm font-semibold">ZEC</p>
                <p className="text-gray-500 text-xs">Profit / Loss</p>
              </div>
            </div>
            <div className="flex flex-col items-end gap-y-1">
              <p className="text-white text-sm font-semibold">$341</p>
              <p className="text-red-400 text-sm">-0.09%</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray2 rounded-2xl py-6 px-4 w-85">
        <p className="text-white text-xl font-semibold">
          The most profitable in 24h
        </p>

        <div className="mt-12 px-4 flex flex-col gap-y-7">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-x-2">
              <img
                width="40"
                height="40"
                data-nuxt-img=""
                sizes="40px"
                className="rounded-full"
                alt="کانتون"
                loading="lazy"
                decoding="async"
                src="https://kifpool.me/uploads/2026/05/05/177798007721849805.png"
              ></img>
              <div className="flex flex-col gap-y-1">
                <p className="text-white text-sm font-semibold">CC</p>
                <p className="text-gray-500 text-xs">Profit / Loss</p>
              </div>
            </div>
            <div className="flex flex-col items-end gap-y-1">
              <p className="text-white text-sm font-semibold">$0.1</p>
              <p className="text-green-300 text-sm">+3.45%</p>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-x-2">
              <img
                width="40"
                height="40"
                data-nuxt-img=""
                sizes="40px"
                className="rounded-full"
                alt="مونرو"
                loading="lazy"
                decoding="async"
                src="https://kifpool.me/uploads/coin-new-images/monero.png"
              ></img>
              <div className="flex flex-col gap-y-1">
                <p className="text-white text-sm font-semibold">XMR</p>
                <p className="text-gray-500 text-xs">Profit / Loss</p>
              </div>
            </div>
            <div className="flex flex-col items-end gap-y-1">
              <p className="text-white text-sm font-semibold">$321</p>
              <p className="text-green-300 text-sm">+5.42%</p>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-x-2">
              <img
                width="40"
                height="40"
                data-nuxt-img=""
                sizes="40px"
                className="rounded-full"
                alt="استلار"
                loading="lazy"
                decoding="async"
                src="https://kifpool.me/uploads/2025/11/01/176199300362140382.png"
              ></img>
              <div className="flex flex-col gap-y-1">
                <p className="text-white text-sm font-semibold">XLM</p>
                <p className="text-gray-500 text-xs">Profit / Loss</p>
              </div>
            </div>
            <div className="flex flex-col items-end gap-y-1">
              <p className="text-white text-sm font-semibold">$0.1</p>
              <p className="text-green-300 text-sm">+0.2%</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray2 rounded-2xl py-6 px-4 w-85">
        <p className="text-white text-xl font-semibold">
          The most damaging in 24h
        </p>
        <div className="mt-12 px-4 flex flex-col gap-y-7">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-x-2">
              <img
                width="40"
                height="40"
                data-nuxt-img=""
                sizes="40px"
                className="rounded-full"
                alt="کاردانو"
                loading="lazy"
                decoding="async"
                src="https://kifpool.me/uploads/coin-new-images/cardano.png"
              ></img>
              <div className="flex flex-col gap-y-1">
                <p className="text-white text-sm font-semibold">ADA</p>
                <p className="text-gray-500 text-xs">Profit / Loss</p>
              </div>
            </div>
            <div className="flex flex-col items-end gap-y-1">
              <p className="text-white text-sm font-semibold">$0.1</p>
              <p className="text-red-400 text-sm">-1.23%</p>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-x-2">
              <img
                width="40"
                height="40"
                data-nuxt-img=""
                sizes="40px"
                className="rounded-full"
                alt="ترون"
                loading="lazy"
                decoding="async"
                src="https://kifpool.me/uploads/coin-new-images/tron.png"
              />
              <div className="flex flex-col gap-y-1">
                <p className="text-white text-sm font-semibold">TRX</p>
                <p className="text-gray-500 text-xs">Profit / Loss</p>
              </div>
            </div>
            <div className="flex flex-col items-end gap-y-1">
              <p className="text-white text-sm font-semibold">$0.3</p>
              <p className="text-red-400 text-sm">-5.19%</p>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-x-2">
              <img
                width="40"
                height="40"
                data-nuxt-img=""
                sizes="40px"
                alt="هایپر لیکویید"
                loading="lazy"
                decoding="async"
                src="https://kifpool.me/uploads/coin-new-images/17349511595757937.png"
              ></img>
              <div className="flex flex-col gap-y-1">
                <p className="text-white text-sm font-semibold">HYPE</p>
                <p className="text-gray-500 text-xs">Profit / Loss</p>
              </div>
            </div>
            <div className="flex flex-col items-end gap-y-1">
              <p className="text-white text-sm font-semibold">$61</p>
              <p className="text-red-400 text-sm">-0.09%</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray2 rounded-2xl py-6 px-4 w-85">
        <p className="text-white text-xl font-semibold">
          The most profitable in 1w
        </p>
        <div className="mt-12 px-4 flex flex-col gap-y-7">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-x-2">
              <img
                width="40"
                height="40"
                data-nuxt-img=""
                sizes="40px"
                alt="اتریوم"
                loading="lazy"
                decoding="async"
                src="https://kifpool.me/uploads/coin-new-images/ethereum.png"
              />
              <div className="flex flex-col gap-y-1">
                <p className="text-white text-sm font-semibold">ETH</p>
                <p className="text-gray-500 text-xs">Profit / Loss</p>
              </div>
            </div>
            <div className="flex flex-col items-end gap-y-1">
              <p className="text-white text-sm font-semibold">$2128</p>
              <p className="text-green-300 text-sm">+2.65%</p>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-x-2">
              <img
                width="40"
                height="40"
                data-nuxt-img=""
                sizes="40px"
                alt="ریپل"
                className="rounded-full"
                loading="lazy"
                decoding="async"
                src="https://kifpool.me/uploads/coin-new-images/ripple.png"
              ></img>
              <div className="flex flex-col gap-y-1">
                <p className="text-white text-sm font-semibold">XPR</p>
                <p className="text-gray-500 text-xs">Profit / Loss</p>
              </div>
            </div>
            <div className="flex flex-col items-end gap-y-1">
              <p className="text-white text-sm font-semibold">$1.11</p>
              <p className="text-red-400 text-sm">-0.4%</p>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-x-2">
              <img
                width="40"
                height="40"
                data-nuxt-img=""
                sizes="40px"
                className="rounded-full"
                alt="یو اس دی کوین"
                loading="lazy"
                decoding="async"
                src="https://kifpool.me/uploads/2025/07/28/175369618732308105.png"
              />
              <div className="flex flex-col gap-y-1">
                <p className="text-white text-sm font-semibold">USDC</p>
                <p className="text-gray-500 text-xs">Profit / Loss</p>
              </div>
            </div>
            <div className="flex flex-col items-end gap-y-1">
              <p className="text-white text-sm font-semibold">$1</p>
              <p className="text-green-300 text-sm">+3.41%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
