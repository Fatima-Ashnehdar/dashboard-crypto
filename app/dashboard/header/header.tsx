"use client";
import Image from "next/image";
import picture1 from "../../../public/picture/Profile.png";
import picture2 from "../../../public/picture/Vector (15).png";
import picture3 from "../../../public/picture/Vector (16).png";
import { IoMdNotificationsOutline } from "react-icons/io";
import { HiOutlineMail } from "react-icons/hi";

export default function Header({ balance }: { balance: number }) {
  return (
    <div className="flex flex-col gap-y-6">
      <div className="flex justify-between items-center">
        <h6 className="text-yellow1 text-2xl font-semibold">Crypto Market</h6>
        <div className="flex items-center gap-x-7">
          <div className="flex gap-x-4">
            <HiOutlineMail className="text-white size-5 cursor-pointer" />
            <IoMdNotificationsOutline className="text-white size-5 cursor-pointer" />
          </div>
          <Image src={picture1} alt="Profile" className="w-10 cursor-pointer" />
        </div>
      </div>
      <div className="flex justify-between bg-gray2 items-center gap-y-3 rounded-3xl py-5 px-6">
        <div className="flex items-center gap-x-6">
          <p className="text-white">Total Net Worth</p>
          <div className="flex items-end gap-x-2">
            <h6 className="text-white text-4xl font-semibold">
              ${balance.toFixed(2)}
            </h6>
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-col gap-y-1 items-center border-r border-gray-400 pr-8">
            <p className="text-gray-400">Today</p>
            <div className="flex items-center gap-x-2">
              <p className="text-white text-sm">-2.5%</p>
              <div>
                <Image alt="arrow" src={picture2} />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-1 items-center border-r border-gray-400 px-8">
            <p className="text-gray-400">7 Days</p>
            <div className="flex items-center gap-x-2">
              <p className="text-white text-sm">+4.25</p>
              <Image alt="arrow" src={picture3} />
            </div>
          </div>
          <div className="flex flex-col gap-y-1 items-center pl-8">
            <p className="text-gray-400">30 Days</p>
            <div className="flex items-center gap-x-2">
              <p className="text-white text-sm">+11.5</p>
              <Image alt="arrow" src={picture3} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
