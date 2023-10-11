import {
  About,
  Career,
  Contact,
  Gallery,
  Hero,
  Services,
} from "@/src/app/(routes)";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Career />
      <Gallery />
      <Contact />
    </>
  )
}
