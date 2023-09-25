import Navigation from "@/components/Header";
import BackgroundImage from "@/components/BackgroundImage";
import data from "../../../../public/content/hero.json";

export default function Hero() {
  return (
    <BackgroundImage image="/images/hero.jpg">
      <div className="container pt-[36px] pb-[56px] md:py-[64px] lg:py-[104px]">
        <Navigation />
        <div className="mb-[24px] flex flex-col items-end ">
          <div>
            <p className="font-medium text-[37px] uppercase leading-none">
              7<span className="font-thin tracking-[1.66px]">days</span>
            </p>
            <p className="text-[12px] font-light uppercase leading-none tracking-[9.48px]">
              journey
            </p>
          </div>
        </div>
        <h1 className="mb-[24px] text-[40px] font-medium uppercase leading-[56px] tracking-[1.6px]">
          {data.title.main}
          <span className="font-thin"> {data.title.add}</span>
        </h1>
        <p className="mb-[24px] text-[10px] font-light leading-[16px] w-[165px]">{data.additional}</p>
        <p className="mb-[24px] text-[14px] font-light leading-[20px] text-justify">{data.description}</p>
        <button className="px-[64px] py-[18px] w-[100%] text-[18px] font-bold uppercase leading-none">join now</button>
      </div>
    </BackgroundImage>
  );
}
