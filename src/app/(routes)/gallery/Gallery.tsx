"use client";

import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useMediaQuery } from "@/src/hooks/useMediaQuery";

import Image from "next/image";
import BackgroundImage from "@/src/components/BackgroundImage";
import data from "@/public/content/gallery.json";

import { Navigation } from "swiper/modules";

export default function Gallery() {
  const [navReady, setNavReady] = useState(false);
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  let isPageWide = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    if (prevRef && nextRef) {
      setNavReady(true);
    }
  }, [prevRef, nextRef]);

  return (
    <BackgroundImage image="/images/gallery.jpg">
      <div
        id="gallery"
        className="container sm:px-[20px] py-[56px] md:py-[64px] lg:py-[104px] md:h-[575px] lg:h-[818px] gallery relative"
      >
        <h2 className="text-[40px] text-center md:text-[67px] lg:text-[98px] font-thin leading-[56px] md:leading-[81px] lg:leading-0 tracking-[-1.6px] md:tracking-[-2.68px] lg:tracking-[-3.92px] uppercase mb-[24px]">
          our
          <span className="font-medium">gallery</span>
        </h2>
        {isPageWide ? (
          navReady && (
            <div className="relative">
              <Swiper
                modules={[Navigation]}
                className="h-[295px] lg:h-[430px]"
                wrapperTag="ul"
                slidesPerView={3}
                loopedSlides={3}
                spaceBetween={24}
                grabCursor={true}
                loop
                centeredSlides
                speed={1000}
                navigation={{
                  prevEl: prevRef.current,
                  nextEl: nextRef.current,
                }}
              >
                {data.images.map((image, index) => (
                  <SwiperSlide className="relative" key={index} tag="li">
                    {({ isActive }) => (
                      <div className="slide-container h-full w-full relative">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill={true}
                          sizes="100vw"
                          className={`object-cover`}
                        />
                        <div
                          className={`absolute top-0 bottom-0 left-0 right-0  ${
                            isActive
                              ? "gallery-slide-bg-active"
                              : "gallery-slide-bg"
                          }`}
                        ></div>
                      </div>
                    )}
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="absolute flex justify-between flex-row bottom-4 inset-x-9 xl:inset-x-56 text-[33px] font-thin z-10">
                <button
                  type="button"
                  className="uppercase hover:opacity-75    transition-all duration-300"
                  ref={prevRef}
                >
                  Back
                </button>
                <button
                  type="button"
                  className="uppercase hover:opacity-75  transition-all duration-300 "
                  ref={nextRef}
                >
                  Next
                </button>
              </div>
            </div>
          )
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
