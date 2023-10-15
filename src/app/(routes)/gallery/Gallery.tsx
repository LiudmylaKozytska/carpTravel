import Image from "next/image";
import BackgroundImage from "@/src/components/BackgroundImage";


export default function Gallery() {
    return <BackgroundImage image="/images/gallery.jpg">
    <div id="gallery" className="container sm:px-[20px] py-[56px] md:py-[64px] lg:py-[104px]">
        <h2 className="text-[40px] md:text-[67px] lg:text-[98px] font-thin leading-[56px] md:leading-[81px] lg:leading-0 tracking-[-1.6px] md:tracking-[-2.68px] lg:tracking-[-3.92px] uppercase mb-[24px]">
          our
          <span className="font-medium">gallery</span>
            </h2>
            <Image src='/images/hills.jpg'
                alt='Hills'
                width={280}
                height={187} className="block mb-[24px]"></Image>
            <Image src='/images/lake.jpg'
                alt='Lake'
                width={280}
                height={187} className="block mb-[24px]"></Image>
            <Image src='/images/river.jpg'
                alt='River'
                width={280}
                height={187} className="block"></Image>
            </div>
    </BackgroundImage>
}