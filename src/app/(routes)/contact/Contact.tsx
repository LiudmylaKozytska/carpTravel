"use client";

import BackgroundImage from "@/src/components/BackgroundImage";
import ContactForm from "@/src/components/ContactForm";
import data from "@/public/content/contact.json";

export default function Contact() {
  return (
    <BackgroundImage image="/images/contact.jpg">
      <div
        id="contacts"
        className="container sm:px-[20px] py-[56px] md:py-[64px] lg:py-[104px]"
      >
        <h2 className="text-[40px] md:text-[67px] lg:text-[98px] font-thin leading-[56px] md:leading-[81px] lg:leading-0 tracking-[-1.6px] md:tracking-[-2.68px] lg:tracking-[-3.92px] uppercase mb-[24px]">
          {data.title.title}
          <span className="font-medium">{data.title.span}</span>
        </h2>
        <div>
          <ul>
            {data.numbers.numbers.map((num, index) => (
              <li
                key={index}
                className="text-[14px] md:text-[14px] cursor-pointer"
              >
                <a href={num.url}>{num.name}</a>
              </li>
            ))}
          </ul>
          <p>{data.numbers.text}</p>
        </div>
        <div>
          <a href={`mailto:${data.email.email}`}>{data.email.email}</a>
          <p>{data.email.text}</p>
        </div>
        <div>
          <ul>
            {data.socialMedia.links.map((item, index) => (
              <li
                key={index}
                className="text-[14px] leading-[24px] md:text-[14px] cursor-pointer"
              >
                <a href={item.url}>{item.name}</a>
              </li>
            ))}
          </ul>
          <p>{data.socialMedia.text}</p>
        </div>
        <ContactForm showFields={false} />
      </div>
    </BackgroundImage>
  );
}
