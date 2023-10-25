import Image from "next/image";
import data from "@/public/content/services.json";

type ServicesData = {
  className: any;
  total: number;
  active: number;
  image: any;
  subtitle: string;
  description: string;
  onClickBtn: (index: number) => void;
};

export default function ServicesSlide({
  total,
  active,
  image,
  subtitle,
  description,
  onClickBtn,
}: ServicesData) {
  return (
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
          0{active}/<span className="text-font-color">0{total}</span>
        </p>
      </div>
      <div className="flex gap-[20px] sm:block">
        <Image
          src={image.src}
          alt={image.alt}
          width={280}
          height={213}
          sizes="100vw"
          className="block sm:w-full sm:h-auto sm:mb-[12px] md:w-[463px] md:h-[370px] lg:w-[608px] lg:h-[434px]"
        ></Image>
        <div className="md:flex md:flex-col justify-between lg:w-[100%]">
          <div className="flex md:flex-col-reverse lg:flex-row-reverse lg:justify-end sm:block">
            <p className="text-[12px] font-extralight leading-[24px] tracking-[2.4px] text-right mb-[0px] sm:mb-[24px] lg:hidden">
              {subtitle}
            </p>
            <ul className="sm:mb-[34px] text-[20px] md:text-[22px] lg:text-[28px] font-extralight leading-[17px]  md:leading-[18px] lg:leading-[24px] lg:w-[100%]">
              {data.offeringItems.map((item, index) => {
                const currentIndex = active - 1;
                return (
                  <li key={index} className="flex gap-[55px]">
                    <button
                      type="button"
                      onClick={() => {
                        onClickBtn(index);
                      }}
                      className={`mb-[16px] sm:last:mb-[34px] md:last:mb-[25px] md:w-[180px] lg:w-[236px] lg:mb-[24px] uppercase text-left tracking-[-0.4px] ${
                        currentIndex === index
                          ? "relative font-medium list-style decoration-white ml-[15px]"
                          : ""
                      }`}
                    >
                      {item}
                    </button>
                    <p
                      className={`text-[12px]  font-extralight leading-[24px] tracking-[2.4px] text-right hidden ${
                        currentIndex === index ? "lg:block" : ""
                      }`}
                    >
                      {subtitle}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
          <p className="text-[14px] md:text-[13px] lg:text-[18px] font-extralight leading-[20px] lg:leading-[24px] md:text-justify md:tracking-[-0.4px] lg:w-[293px] lg:ml-auto">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
