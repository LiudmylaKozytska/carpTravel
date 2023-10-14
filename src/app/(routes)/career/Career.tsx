'use client'

import BackgroundImage from "@/src/components/BackgroundImage";
import data from "@/public/content/career.json";
import ContactForm from "@/src/components/ContactForm";

export default function Career() {



  return (
    <BackgroundImage image="/images/career.jpg">
      <div id="career" className="container py-[56px] px-[20px] md:py-[64px] lg:py-[104px]">
        <h2 className="text-[40px] font-thin leading-[56px] tracking-[-1.6px] uppercase mb-[24px]">
          {data.title.title}
          <span className="font-medium">{data.title.span}</span>
        </h2>
        <p className="text-[14px] font-extralight leading-[20px] w-[180px] mb-[36px] ml-auto block">
          {data.description.main}
        </p>
        <h3 className="text-[30px] font-extralight uppercase mb-[36px] block text-right mr-[39px]">
          {data.subtitle}
        </h3>
        <ul className="mr-[99px] text-right leading-[20px] sm:mb-[120px]">
          {data.text.map((item, id) => (
            <li key={id} className="mb-[16px]">
              <p className="mb-[8px] text-[14px] font-normal tracking-[-0.3px]">
                {item.subtitle}
              </p>
              <p className="text-[12px] font-extralight">{item.text}</p>
            </li>
          ))}
        </ul>
          <p className="text-[14px] font-extralight leading-[20px] w-[180px] mb-[36px] ml-auto block">{data.description.add}</p>
          <ContactForm showFields={true}/>
        </div>
        </BackgroundImage>
  );
}
