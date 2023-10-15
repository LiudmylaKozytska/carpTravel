"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import data from "@/public/content/services.json";

import "swiper/css";

export default function Services() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const handleSlideChange = (swiper: any) => {
    const index = swiper.realIndex;
    setActiveSlideIndex(index);
  };

  return (
    <Swiper
      spaceBetween={0}
      onSlideChange={handleSlideChange}
      navigation={true}
    >
      {data.slides.map((slide, index) => (
        <SwiperSlide key={index} className="swiper-slide">
          <div
            style={{
              backgroundImage: `linear-gradient(rgba(2, 15, 8, 0.5), rgba(2, 15, 8, 0.5)), url(/images/bg-services-${
                index + 1
              }.jpg)`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundOrigin: "border-box",
              backgroundPosition: "center",
            }}
          >
            <div
              id="services"
              className="container sm:px-[20px] py-[56px] md:py-[64px] lg:py-[104px]"
            >
              <div className="md:flex md:gap-[170px] md:mb-[40px] lg:gap-[162px] lg:mb-[20px]">
                <h2 className="text-[40px] md:text-[67px] lg:text-[98px] font-thin leading-[56px] md:leading-[81px] lg:leading-[119px] tracking-[-1.6px] md:tracking-[-2.68px] lg:tracking-[-3.92px] uppercase sm:mb-[8px]">
                {data.title.title}
                <span className="font-medium">{data.title.span}</span>
              </h2>
              <p className="text-[43px] md:text-[67px] lg:text-[98px] md:leading-[81px] lg:leading-[119px] font-thin text-right sm:mb-[16px]">
                {slide.date.day}
                <span className="text-font-color">{slide.date.month}</span>
              </p>
              </div>
              <div className="flex gap-[20px] sm:block">
                <Image
                src={slide.image.src}
                alt={slide.image.alt}
                width={280}
                height={213}
                sizes="100vw"
                className="block sm:mb-[12px] md:w-[463px] md:h-[370px] lg:w-[608px] lg:h-[434px]"
              ></Image>
              <div className="md:flex md:flex-col justify-between lg:w-[100%]">
                <div className="flex md:flex-col-reverse lg:flex-reverse sm:block">
                <p className="text-[12px] font-extralight leading-[24px] tracking-[2.4px] text-right mb-[0px] sm:mb-[24px]">
                {slide.subtitle}
              </p>
              <ul className="sm:mb-[34px] text-[20px] md:text-[22px] lg:text-[28px] font-extralight leading-[17px]  md:leading-[18px] lg:leading-[24px] uppercase">
                {data.offeringItems.map((item, index) => (
                  <li
                    key={index}
                    className={`mb-[16px] sm:last:mb-[34px] md:last:mb-[25px] lg:mb-[24px] ${
                      activeSlideIndex === index
                        ? "font-medium list-style decoration-white"
                        : ""
                    }`}
                    style={{ opacity: activeSlideIndex === index ? 1 : 0.5 }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
              </div>
              <p className="text-[14px] md:text-[13px] lg:text-[18px] font-extralight leading-[20px] lg:leading-[24px] md:text-justify md:tracking-[-0.4px] lg:w-[293px] lg:ml-auto">
                {slide.description}
              </p>
              </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
