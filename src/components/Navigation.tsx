"use client";

import { useState } from "react";
import content from "../../public/content/navigation.json";

export default function Navigation() {
  const [mobMenu, setMobMenu] = useState(false);

    const toggleMobMenu = () => {
        console.log(mobMenu);
        setMobMenu(!mobMenu);
        
    };

  return (
      <div className={`md: block ${mobMenu
              ? "disable-scroll w-full h-full bg-[rgba(1, 10, 5, 0.75)] backdrop-blur-25"
              : "sm:hidden"
          }`}>
      <button
        type="button"
        onClick={toggleMobMenu}
        className="md:hidden lg:hidden text-[14px] font-normal uppercase tracking-[1.4px]"
          >
              {mobMenu ? "close" : "menu"}
          </button>
      <ul
        className=""
      >
        {content.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
