import React, { ReactNode } from 'react';

interface BgImage {
    image: string,
    children: ReactNode
}

export default function BackgroundImage ( props: BgImage  ) {
return ( 
        <div
      className="bg-cover bg-center bg-no-repeat relative"
      style={{
          backgroundImage: `url(${props.image})`,
          paddingBottom: 'calc(642 / 320 * 100%)'
      }}
    >
        <div className="absolute inset-0"
                style={{
                    backgroundColor: 'rgba(2, 15, 8, 0.5)'}}
            ></div>
      <div className="absolute inset-0 text-white">
        {props.children}
      </div>
    </div>
  );
};