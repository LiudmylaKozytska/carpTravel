import Image from "next/image";
import content from "../../public/content/navigation.json";
import logo from "../../public/images/logo.png";

export default function Navigation() {
  return (
    <div>
      <div>
              <Image src={logo} alt="logo" />
              <p>CarpTravel</p>
      </div>
      <ul>
        {content.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
