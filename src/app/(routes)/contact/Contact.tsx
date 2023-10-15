'use client'

import BackgroundImage from "@/src/components/BackgroundImage";
import ContactForm from "@/src/components/ContactForm";
import data from "@/public/content/contact.json";


export default function Contact() {
    return <BackgroundImage image="/images/contact.jpg">
        <div id="contacts" className="container sm:px-[20px] py-[56px] md:py-[64px] lg:py-[104px]">
            <h2 className="text-[40px] md:text-[67px] lg:text-[98px] font-thin leading-[56px] md:leading-[81px] lg:leading-0 tracking-[-1.6px] md:tracking-[-2.68px] lg:tracking-[-3.92px] uppercase mb-[24px]">
          {data.title.title}
          <span className="font-medium">{data.title.span}</span>
        </h2>
            <ContactForm showFields={false} />
    </div>
    </BackgroundImage>
}