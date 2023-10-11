"use client";

import Image from "next/image";
import content from "../../public/content/navigation.json";
import logo from "../../public/images/logo.png";
import { Karantina } from "next/font/google";
import Navigation from "./Navigation";

const karantina = Karantina({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
});

export default function Header() {
  return (
    <div className="flex justify-between">
      <div>
        <Image src={logo} alt="logo" />
        <p className="font-karantina text-[14px]">CarpTravel</p>
      </div>
      <Navigation />
    </div>
  );
}
