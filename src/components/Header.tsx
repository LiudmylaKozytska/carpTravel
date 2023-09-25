import Image from "next/image";
import content from "../../public/content/navigation.json";
import logo from "../../public/images/logo.png";
import { Karantina } from "next/font/google";

const karantina = Karantina({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal'],
})

export default function Navigation() {
  return (
    <div>
      <div>
              <Image src={logo} alt="logo" />
              <p className="font-karantina text-[14px]">CarpTravel</p>
      </div>
      <ul className="sm:hidden flex absolute">
        {content.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
