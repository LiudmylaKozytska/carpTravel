import BackgroundImage from "@/src/components/BackgroundImage";
import data from "@/public/content/about.json";

export default function About() {
  return (
    <BackgroundImage image="/images/about.jpg">
      <div id="about" className="container py-[56px] px-[20px] md:py-[64px] lg:py-[104px]">
        <h2 className="text-[40px] font-thin leading-[56px] tracking-[-1.6px] uppercase mb-[8px]">
          {data.title.title}
          <span className="font-medium">{data.title.span}</span>
        </h2>
        <p className="text-[14px] font-extralight leading-[20px] w-[180px] mb-[20px]">
          <span className="font-normal">{data.description.span}</span>
          {data.description.text}
        </p>
        <p className="text-[14px] font-extralight leading-[20px] w-[180px] mb-[40px]">
          <span className="font-normal">{data.description.secSpan}</span>
          {data.description.secText}
        </p>
        <p className="block font-normal text-[14px] leading-[20px] uppercase leading-[20px] mb-[40px] w-[180px] ml-auto">
          <span>{data.subtitle.title} </span>
          <span className="block text-right">{data.subtitle.span} </span>
          <span className="block font-extralight lowercase tracking-[-0.14px]">
            {data.subtitle.text}
          </span>
        </p>
        <p className="text-14 font-extralight leading-[20px]">
          <span className="font-normal">{data.description.thSpan}</span>
          {data.description.thText}
        </p>
      </div>
    </BackgroundImage>
  );
}
