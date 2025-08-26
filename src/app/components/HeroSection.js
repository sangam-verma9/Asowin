"use client"; // Ensure interactivity in Next.js app

import { useState } from "react";
import OptimizedImage from "./OptimizedImage";
import Navbar from "./Navbar";
import Image from "next/image";
import Link from "next/link";


const HeroSection = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  // Function to check if an email is a work email
  const isWorkEmail = (email) => {
    const freeEmailDomains = [
      "gmail.com",
      "yahoo.com",
      "hotmail.com",
      "outlook.com",
      "aol.com",
      "protonmail.com",
    ];
    const domain = email.split("@")[1];
    return domain && !freeEmailDomains.includes(domain);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    if (!isWorkEmail(email)) {
      setStatus({ type: "error", message: "Please use a valid work email address." });
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("https://form.appstorys.com/api/add-response/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (response.status !== 201) throw new Error("Failed to submit the form");

      setStatus({ type: "success", message: "Thank you! We'll be in touch soon." });
      setEmail(""); // Clear input field
    } catch (error) {
      setStatus({ type: "error", message: "Submission failed. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-h-[90vh] bg-gradient-to-b from-[#FFEDE3] to-[#FFFFFF]">
      <Navbar />

      <section className="relative flex flex-col justify-center items-center text-center min-h-[calc(100vh-32px)] -mt-16 px-4 md:px-8 lg:px-12">
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-50">
          <Image
            src="/pattern.png"
            alt=""
            fill
            priority
            fetchPriority="high"
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        <div className="relative z-10 max-w-4xl mt-32 mx-auto font-serif">
          <h1 className="text-4xl md:text-6xl lg:text-[135px] font-bold text-[#111111] mb-6 leading-tight">
            App Store
            <br />
            Optimization
          </h1>
          <br />

          <div className="text-center mb-12">
            <p className="text-[#111111] text-base md:text-[21px] mb-1">
              We handle ASO for some of the largest brands globally.
            </p>
            <br />
            <p className="text-[#111111] text-base md:text-[21px]">
              Top Charts | Featured | Assured | Customer Service | With all our heart
              <br />
              Get your App to the top charts. That's an assurance.
            </p>
          </div>

          {/* Form */}
          {/* <div className="flex justify-center items-center">

            {status.type === "error" && status.message && (
              <div className="w-full md:w-1/2 text-sm text-red-700 bg-red-100 p-2 rounded mb-4">
                {status.message}
              </div>
            )}

            {status.type === "success" && status.message && (
              <div className="w-full md:w-1/2 text-sm text-green-700 bg-green-100 p-2 rounded mb-4">
                {status.message}
              </div>
            )}
          </div> */}

          {/* Form Section */}
          <div className="flex items-center justify-center px-2 xs:px-4 mb-20">
            <Link
              href="/contact"
              className="w-auto md:w-[200px] bg-[#FF8712] text-white px-8 xs:px-4 py-3 xs:py-4 rounded-full font-medium hover:bg-orange-600 transition-colors whitespace-nowrap text-xs xs:text-sm md:text-base"
            >
              LET'S TALK
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
