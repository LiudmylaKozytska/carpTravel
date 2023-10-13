'use client'

import BackgroundImage from "@/src/components/BackgroundImage";
import ContactForm from "@/src/components/ContactForm";
import data from "@/public/content/contact.json";


export default function Contact() {
    return <BackgroundImage image="/images/contact.jpg">
        <div id="contacts" className="container py-[56px] px-[20px] md:py-[64px] lg:py-[104px]">
            <h2 className="text-[40px] font-thin leading-[56px] tracking-[-1.6px] uppercase mb-[24px]">
          {data.title.title}
          <span className="font-medium">{data.title.span}</span>
        </h2>
            <ContactForm/>
    </div>
    </BackgroundImage>
}