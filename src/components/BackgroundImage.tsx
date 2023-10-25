import React, { ReactNode } from "react";

interface BgImage {
  image: any;
  children: ReactNode;
}

export default function BackgroundImage(props: BgImage) {
  return (
    <section
      style={{
        backgroundImage: `linear-gradient(rgba(2, 15, 8, 0.5), rgba(2, 15, 8, 0.5)), url(${props.image})`,
        backgroundSize: "cover",
        backgroundPositionY: "top",
        backgroundPositionX: "center",

        backgroundRepeat: "no-repeat",
      }}
    >
      {props.children}
    </section>
  );
}
