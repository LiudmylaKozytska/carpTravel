import BackgroundImage from "@/components/BackgroundImage";
import data from "../../../../public/content/services.json";

export default function Services() {
    return <BackgroundImage image="/images/services.jpg">
    <div id="services">This is the Services component</div>
    </BackgroundImage>
}