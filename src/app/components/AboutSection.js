"use client"; // Ensures client-side rendering

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";

const AboutSection = () => {
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [typedChars, setTypedChars] = useState(0);
  const [contentText, setContentText] = useState("");

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.offsetHeight);
      setContentText(contentRef.current.innerText || ""); // Ensure safe text retrieval
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const totalChars = contentText.length;
      const interval = setInterval(() => {
        setTypedChars((prev) => {
          if (prev < totalChars) return prev + 1;
          clearInterval(interval);
          return prev;
        });
      }, 10);

      return () => clearInterval(interval);
    }
  }, [isVisible, contentText]);

  const applyTypingEffect = (text, startIndex) => {
    return text.split("").map((char, index) => (
      <span
        key={startIndex + index}
        className={`transition-colors duration-200 ${
          startIndex + index < typedChars ? "text-white" : "text-opacity-0"
        }`}
      >
        {char}
      </span>
    ));
  };

  return (
    <div className="w-full bg-[#1A1A1A] py-20 lg:py-32 relative">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/about2.png')" }}
      />

      {/* Overlay to ensure readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Vertical Line and Dot */}
      <div
        className="absolute left-4 md:left-8 lg:left-12 flex items-start"
        style={{ height: contentHeight }}
      >
        <div className="relative h-full left-4 lg:left-20">
          {/* Fading Line */}
          <div
            className="w-[2px] h-full bg-gradient-to-b from-[#ffffff] to-transparent absolute"
            style={{ marginLeft: "-0.2rem" }}
          ></div>
          {/* Dot */}
          <div className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 rounded-full bg-[#E9A63A] absolute top-14 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
      </div>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 relative z-10">
        <div className="ml-16 md:ml-20 lg:ml-24 max-w-4xl" ref={contentRef}>
          {/* First Paragraph */}
          <p className="text-2xl sm:text-3xl lg:text-4xl leading-relaxed">
            {applyTypingEffect(
              "With a global presence and offices around the world, ",
              0
            )}
            <span className="text-[#E9A63A]">ASOWin</span>
            {applyTypingEffect(
              " partners with businesses across industries to enhance app visibility, drive user acquisition, and improve retention. Our comprehensive offerings include app concept validation, keyword optimization, A/B testing, market insights, and automated review management. ",
              100
            )}
          </p>

          {/* Second Paragraph */}
          <p className="text-2xl sm:text-3xl lg:text-4xl leading-relaxed mt-8">
            {applyTypingEffect(
              "By leveraging advanced AI tools and focusing on innovation, we simplify processes, generate actionable insights, and deliver measurable growth for our clients. Our customer-first approach ensures that every solution is tailored to meet the unique needs and goals of our partners, making their success our top priority.",
              300
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
