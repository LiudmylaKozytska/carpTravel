"use client";

import { Link } from "react-scroll";
import BackgroundImage from "@/src/components/BackgroundImage";
import data from "@/public/content/hero.json";
import Header from "@/src/components/Header";

export default function Hero() {
  return (
    <BackgroundImage image="/images/hero.jpg">
      <div
        id="hero"
        className="container pt-[36px] pb-[56px] sm:px-[20px] md:py-[64px] lg:py-[104px] relative"
      >
        <Header />
        <div className="mb-[24px] md:mb-[56px] lg:mb-[181px] mt-[36px] md:mt-[64px] flex flex-col items-end">
          <div className="md:w-[232px] lg:w-[295px]">
            <p className="font-medium text-[37px] md:text-[67px] lg:text-[98px] uppercase leading-none tracking-[1.66px] md:tracking-[8.81px] lg:tracking-[1.81px] text-end">
              7<span className="font-thin">days</span>
            </p>
            <p className="text-[12px] md:text-[14px] lg:text-[16px] font-light uppercase leading-none tracking-[9.48px] md:tracking-[25.9px] lg:tracking-[36.48px] text-end">
              journey
            </p>
          </div>
        </div>
        <div className="md:flex justify-between">
          <div className="md:mt-[-130px] lg:mt-[-310px]">
            <h1 className="mb-[24px] md:mb-[68px] lg:mb-[148px] text-[40px] md:text-[67px] lg:text-[98px] font-medium uppercase leading-[56px]  md:leading-[81px] lg:leading-[120px] tracking-[-1.6px] md:tracking-[-2.68px] lg:tracking-[-3.92px] md:w-[426px] lg:w-[646px]">
              {data.title.main}
              <span className="font-thin"> {data.title.add}</span>
            </h1>
            <p className="sm:mb-[24px] text-[10px] md:text-[14px] lg:text-[16px] font-extralight leading-[16px] lg:leading-[24px] md:tracking-[1.26px] lg:tracking-[1.44px] w-[167px] md:w-[266px] lg:w-[608px]">
              {data.additional}
            </p>
          </div>
          <div className="md:w-[230px] lg:w-[294px]">
            <p className="mb-[24px] md:mb-[28px] text-[14px] md:text-[16px] lg:text-[18px] font-extralight leading-[20px] lg:leading-[24px] text-justify">
              {data.description}
            </p>
            <Link
              to="contacts"
              duration={600}
              smooth={true}
              spy={true}
              hashSpy={true}
              className="block relative px-[64px] py-[18px] w-[100%] text-[18px] lg:text-[32px] font-bold uppercase leading-none bg-white bg-opacity-10 transition duration-300 hover:bg-opacity-20 text-center cursor-pointer"
            >
              <span className="relative z-10">join now</span>
              <span className="absolute top-0 left-0 w-[36px] h-[8px] border-t border-l border-white"></span>
              <span className="absolute top-0 right-0 w-[36px] h-[8px] border-t border-r border-white"></span>
              <span className="absolute bottom-0 left-0 w-[36px] h-[8px] border-b border-l border-white"></span>
              <span className="absolute bottom-0 right-0 w-[36px] h-[8px] border-b border-r border-white"></span>
            </Link>
          </div>
        </div>
      </div>
    </BackgroundImage>
  );
}
