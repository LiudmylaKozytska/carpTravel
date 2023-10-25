"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper/modules";
import ServicesSlide from "@/src/components/Slide";
import data from "@/public/content/services.json";

import "swiper/css";
import "swiper/css/effect-fade";

export default function Services() {
  const [activeSlideIndex, setActiveSlideIndex] = useState<any>(null);

  const handleSlideChange = (index: number) => {
    console.log(activeSlideIndex);

    activeSlideIndex.slideTo(index, 1000);
  };

  return (
    <div className="swiper-container  h-full w-full ">
      <Swiper
        onSwiper={setActiveSlideIndex}
        modules={[EffectFade]}
        effect="fade"
        speed={1000}
      >
        {data.slides.map(({ image, subtitle, description }, index, arr) => {
          const total = arr.length;
          return (
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
                <ServicesSlide
                  active={index + 1}
                  image={image}
                  subtitle={subtitle}
                  description={description}
                  onClickBtn={handleSlideChange}
                  className={undefined}
                  total={total}
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
