"use client";

import { Link } from "react-scroll";import BackgroundImage from "@/src/components/BackgroundImage";
import data from "@/public/content/hero.json";
import Header from "@/src/components/Header";

export default function Hero() {
  return (
    <BackgroundImage image="/images/hero.jpg">
      <div
        id="hero"
        className="container pt-[36px] pb-[56px] px-[20px] md:py-[64px] lg:py-[104px] relative"
      >
        <Header />
        <div className="mb-[24px] mt-[36px] flex flex-col items-end ">
          <div>
            <p className="font-medium text-[37px] uppercase leading-none">
              7<span className="font-thin tracking-[1.66px]">days</span>
            </p>
            <p className="text-[12px] font-light uppercase leading-none tracking-[9.48px]">
              journey
            </p>
          </div>
        </div>
        <h1 className="mb-[24px] text-[40px] font-medium uppercase leading-[56px] tracking-[-1.6px]">
          {data.title.main}
          <span className="font-thin"> {data.title.add}</span>
        </h1>
        <p className="mb-[24px] text-[10px] font-light leading-[16px] w-[165px]">
          {data.additional}
        </p>
        <p className="mb-[24px] text-[14px] font-light leading-[20px] text-justify">
          {data.description}
        </p>
        <button className="relative px-[64px] py-[18px] w-[100%] text-[18px] font-bold uppercase leading-none bg-white bg-opacity-10 transition duration-300 hover:bg-opacity-20">
          <span className="relative z-10">join now</span>
          <span className="absolute top-0 left-0 w-[36px] h-[8px] border-t border-l border-white"></span>
          <span className="absolute top-0 right-0 w-[36px] h-[8px] border-t border-r border-white"></span>
          <span className="absolute bottom-0 left-0 w-[36px] h-[8px] border-b border-l border-white"></span>
          <span className="absolute bottom-0 right-0 w-[36px] h-[8px] border-b border-r border-white"></span>
        </button>
      </div>
    </BackgroundImage>
  );
}
