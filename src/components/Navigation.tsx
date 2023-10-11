"use client";

import { useState } from "react";
import { Link } from "react-scroll";
import content from "../../public/content/navigation.json";

export default function Navigation() {
  const [mobMenu, setMobMenu] = useState(false);

  const toggleMobMenu = () => {
    setMobMenu(!mobMenu);
  };

  const handleLinkClick = () => {
    setMobMenu(false);
  };

  return (
    <>
      <button
        type="button"
        onClick={toggleMobMenu}
        className="md:hidden lg:hidden text-[14px] font-normal uppercase tracking-[1.4px] sm:relative z-40"
      >
        {mobMenu ? "close" : "menu"}
      </button>
      <div
        className={`sm:absolute top-0 left-0  sm:flex justify-center items-center md:block ${
          mobMenu
            ? "disable-scroll w-screen h-screen bg-backdrop-color backdrop-blur-xl z-30"
            : "sm:hidden"
        }`}
      >
        <ul className="font-medium tracking-[1.8px] opacity-100 text-center">
          {content.map((item) => (
            <li key={item.id} className="mb-[48px] last:mb-0 text-[18px]">
              <Link
                to={item.link}
                duration={600}
                smooth={true}
                spy={true}
                hashSpy={true}
                onClick={handleLinkClick}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
