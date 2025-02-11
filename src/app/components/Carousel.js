import React from "react";
import Image from "next/image";

const logos = [
  { name: "iTranslate", class: "w-32", img: "/img7.png" },
  { name: "Arise", class: "w-32", img: "/img8.png" },
  { name: "Wargaming.net", class: "w-32", img: "/img9.png" },
  { name: "Meister", class: "w-32", img: "/img10.png" },
  { name: "MixVibes", class: "w-32", img: "/imh11.png" },
  { name: "WhatWapp", class: "w-32", img: "/img12.png" },
  { name: "Kolibri", class: "w-32", img: "/img7.png" }, 
];

const Carousel = () => {
  return (
    <div className="w-full mt-[-85px] bg-white overflow-hidden py-4">
      <div className="relative">
        {/* First row of logos */}
        <div className="flex animate-scroll space-x-12 md:space-x-16 lg:space-x-24">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className={`flex items-center justify-center flex-shrink-0 ${logo.class}`}
            >
              <Image
                src={logo.img}
                alt={logo.name}
                width={128} // Adjust width as needed
                height={48} // Adjust height as needed
                className="h-12 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
