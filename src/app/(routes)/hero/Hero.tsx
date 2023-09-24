import Navigation from "@/components/Header";
import BackgroundImage from "@/components/BackgroundImage";

export default function Hero () {
    return <BackgroundImage image="/images/hero.jpg">
        <Navigation/>
    </BackgroundImage>;
}