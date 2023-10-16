"use client";

import Image from "next/image";
import logo from "../../public/images/logo.png";
import { Karantina } from "next/font/google";
import Navigation from "./Navigation";

const karantina = Karantina({
  subsets: ["latin"],
  weight: "400",
  style: ["normal"],
});

export default function Header() {
  return (
    <div className="flex justify-between items-center">
      <div>
        <Image src={logo} alt="logo" />
        <p
          className={`${karantina.className} font-karantina text-[14px] tracking-[2.59px]`}
        >
          CarpTravel
        </p>
      </div>
      <Navigation />
    </div>
  );
}
