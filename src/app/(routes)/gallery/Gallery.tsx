"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useMediaQuery } from "@/src/hooks/useMediaQuery";

import Image from "next/image";
import BackgroundImage from "@/src/components/BackgroundImage";
import data from "@/public/content/gallery.json";

import { EffectCoverflow, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";

export default function Gallery() {
  let isPageWide = useMediaQuery("(min-width: 768px)");

  return (
    <BackgroundImage image="/images/gallery.jpg">
      <div
        id="gallery"
        className="container sm:px-[20px] py-[56px] md:py-[64px] lg:py-[104px]"
      >
        <h2 className="text-[40px] text-center md:text-[67px] lg:text-[98px] font-thin leading-[56px] md:leading-[81px] lg:leading-0 tracking-[-1.6px] md:tracking-[-2.68px] lg:tracking-[-3.92px] uppercase mb-[24px]">
          our
          <span className="font-medium">gallery</span>
        </h2>
        {isPageWide ? (
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
            navigation
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              scale: 0.5,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            modules={[EffectCoverflow, Navigation]}
            className="mySwiper"
          >
            {data.images.map((image, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={415}
                  height={294}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <ul>
            {data.images.map((item, index) => (
              <li key={index} className="block mb-[24px] last:mb-0">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={280}
                  height={187}
                  className="w-full h-auto"
                ></Image>
              </li>
            ))}
          </ul>
        )}
      </div>
    </BackgroundImage>
  );
}
