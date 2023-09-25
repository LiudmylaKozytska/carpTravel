import BackgroundImage from "@/components/BackgroundImage";
import data from "../../../../public/content/about.json";

export default function About() {
  return (
    <BackgroundImage image="/images/about.jpg">
      <div className="container py-[56px] px-[20px] md:py-[64px] lg:py-[104px]">
        <h2 className="text-[40px] font-thin leading-[56px] tracking-[-1.6px] uppercase mb-[8px]">
          {data.title.title}
          <span className="font-medium">{data.title.span}</span>
        </h2>
        <p className="text-14 font-extralight leading-[20px] w-[180px] mb-[20px]">
          <span className="font-normal">{data.description.span}</span>
          {data.description.text}
        </p>
        <p className="text-14 font-extralight leading-[20px] w-[180px] mb-[40px]">
          <span className="font-normal">{data.description.secSpan}</span>
          {data.description.secText}
        </p>
              <div className="font-normal text-[14px] leading-[20px] uppercase leading-[20px] mb-[40px] flex justify-end">
                  <h3>
          {data.subtitle.title}
          <span className="align-end">{data.subtitle.span}</span>
        </h3>
        <p className="font-extralight lowercase tracking-[-0.14px]">{data.subtitle.text}</p>
        </div>
        <p className="text-14 font-extralight leading-[20px]">
          <span className="font-normal">{data.description.thSpan}</span>
          {data.description.thText}
        </p>
      </div>
    </BackgroundImage>
  );
}
