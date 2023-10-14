import BackgroundImage from "@/src/components/BackgroundImage";
import data from "@/public/content/about.json";

export default function About() {
  return (
    <BackgroundImage image="/images/about.jpg">
      <div id="about" className="container sm:px-[20px] py-[56px] md:py-[64px] lg:py-[104px]">
        <div className="md:flex md:justify-between lg:justify-start lg:items-start lg:gap-[24px] lg:mb-[72px]">
          <h2 className="text-[40px] md:text-[67px] lg:text-[98px] font-thin leading-[56px] md:leading-[81px] lg:leading-0 tracking-[-1.6px] md:tracking-[-2.68px] lg:tracking-[-3.92px] uppercase mb-[8px]">
          {data.title.title}
          <span className="font-medium">{data.title.span}</span>
        </h2>
          <div className="sm:w-[180px] md:w-[220px] lg:w-[292px]">
            <p className="text-[14px] md:text-[16px] lg:text-[18px] font-extralight leading-[20px] lg:leading-[24px] sm:mb-[20px] md:mb-[16px] lg:mb-[24px] leading-[20px]">
          <span className="font-normal">{data.description.span}</span>
          {data.description.text}
        </p>
        <p className="text-[14px] md:text-[16px] lg:text-[18px] font-extralight leading-[20px] lg:leading-[24px] mb-[40px]  md:mb-0 lg:mb-[72px]">
          <span className="font-normal">{data.description.secSpan}</span>
          {data.description.secText}
        </p>
        </div>
        </div>
        <div className="md:mt-[-60px] lg:flex lg:flex-row-reverse lg:justify-between">
          <p className="block font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[20px] uppercase leading-[20px] lg:leading-[24px] sm:mb-[40px] w-[180px] md:w-[221px] lg:w-[297px] sm:ml-auto md:ml-0 md:mb-[65px] lg:mb-0">
          <span>{data.subtitle.title} </span>
          <span className="block text-right">{data.subtitle.span} </span>
          <span className="block font-extralight lowercase tracking-[-0.14px] md:tracking-[0.32px] lg:tracking-[2.16px]">
            {data.subtitle.text}
          </span>
        </p>
        <p className="text-14 md:text-[16px] lg:text-[18px] font-extralight leading-[20px] lg:leading-[24px] md:w-[463px] lg:w-[605px] md:ml-auto lg:ml-0">
          <span className="font-normal">{data.description.thSpan}</span>
          {data.description.thText}
        </p>
        </div>
      </div>
    </BackgroundImage>
  );
}
