import Image from "next/image";
import BackgroundImage from "@/src/components/BackgroundImage";


export default function Gallery() {
    return <BackgroundImage image="/images/gallery.jpg">
    <div id="gallery" className="container py-[56px] px-[20px] md:py-[64px] lg:py-[104px]">
        <h2 className="text-[40px] font-thin leading-[56px] tracking-[-1.6px] uppercase mb-[24px]">
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