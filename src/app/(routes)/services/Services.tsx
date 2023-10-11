"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import BackgroundImage from "@/src/components/BackgroundImage";
import data from "@/public/content/services.json";

import "swiper/css";

export default function Services() {
  return (
    <Swiper
      spaceBetween={0}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      navigation={true}
    >
      {data.slides.map((slide, index) => (
        <SwiperSlide key={index} className="swiper-slide">
          <div
            style={{
              backgroundImage: `linear-gradient(rgba(2, 15, 8, 0.5), rgba(2, 15, 8, 0.5)), url(/images/bg-services-${
                index + 1
              }.jpg)`,
              backgroundRepeat: "no repeat",
              backgroundSize: "cover",
              backgroundOrigin: "border-box",
              backgroundPosition: "center",
            }}
          >
            <div
              id="services"
              className="container py-[56px] px-[20px] md:py-[64px] lg:py-[104px]"
            >
              <h2 className="text-[40px] font-thin leading-[56px] tracking-[-1.6px] uppercase mb-[8px]">
                {data.title.title}
                <span className="font-medium">{data.title.span}</span>
              </h2>
              <p className="text-[43px] font-thin text-right mb-[16px]">
                {slide.date.day}
                <span className="text-font-color">{slide.date.month}</span>
              </p>
              <Image
                src={slide.image.src}
                alt={slide.image.alt}
                width={280}
                height={213}
                className="block mb-[12px]"
              ></Image>
              <p className="text-[12px] font-extralight leading-[24px] tracking-[2.4px] text-right mb-[24px]">
                {slide.subtitle}
              </p>
              <ul className="mb-[34px] text-[20px] font-extralight leading-[17px] uppercase opacity-50">
                {data.offeringItems.map((item, index) => (
                  <li key={index} className="mb-[16px] last:mb-[34px]">
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-[14px] font-extralight leading-[20px]">
                {slide.description}
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
