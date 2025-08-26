"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Loader2 } from "lucide-react";

const Footer = () => {
  const [isLoading, setIsLoading] = useState({
    book: false,
    blog: false
  });

  const handleExternalLink = async (type, url) => {
    setIsLoading(prev => ({ ...prev, [type]: true }));

    // Open URLs directly since they're external resources
    window.open(url, '_blank', 'noopener,noreferrer');

    // Reset loading state after a short delay
    setTimeout(() => {
      setIsLoading(prev => ({ ...prev, [type]: false }));
    }, 500);
  };

  return (
    <footer className="w-full">
      <div
        className="w-full relative"
        style={{
          backgroundImage: "url('/footer.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "350px",
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
          {/* Top section */}
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start pt-8 sm:pt-12 md:pt-16">
            {/* Logo */}
            <div className="mb-6 sm:mb-8 md:mb-0 mt-12 sm:mt-16 md:mt-24">
              <Image
                src="/ASOWin.png"
                alt="ASOWin Logo"
                width={200}
                height={100}
                className="w-[150px] h-auto sm:w-[180px] md:w-[200px]"
                priority
              />
            </div>

            {/* Navigation */}
            <nav className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 lg:gap-12 mt-6 sm:mt-16 md:mt-28 text-center md:text-left">
              <Link
                href="/services"
                className="text-white hover:text-[#FFB842] text-sm font-semibold whitespace-nowrap"
              >
                SERVICES
              </Link>
              <button
                onClick={() => handleExternalLink('book', 'https://asowin.com/ASOWinBook.pdf')}
                className="text-white hover:text-[#FFB842] text-sm font-semibold whitespace-nowrap flex items-center gap-2 bg-transparent border-none cursor-pointer"
                disabled={isLoading.book}
              >
                OUR BOOK
                {isLoading.book && <Loader2 className="w-4 h-4 animate-spin" />}
              </button>
              <button
                onClick={() => handleExternalLink('blog', 'https://asowin.com/blog')}
                className="text-white hover:text-[#FFB842] text-sm font-semibold whitespace-nowrap flex items-center gap-2 bg-transparent border-none cursor-pointer"
                disabled={isLoading.blog}
              >
                BLOG
                {isLoading.blog && <Loader2 className="w-4 h-4 animate-spin" />}
              </button>
              <Link
                href="/about"
                className="text-white hover:text-[#FFB842] text-sm font-semibold whitespace-nowrap"
              >
                ABOUT
              </Link>
              <Link
                href="/contact"
                className="text-white hover:text-[#FFB842] text-sm font-semibold whitespace-nowrap"
              >
                CONTACT US
              </Link>
            </nav>
          </div>

          {/* Bottom section */}
          <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-0 right-0 px-4 sm:px-6 md:px-8 lg:px-16">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <p className="text-white/80 text-xs order-3 sm:order-1 text-center sm:text-left">
                © 2025 ASOWin Inc. All Rights Reserved.
              </p>

              <div className="flex flex-wrap justify-center sm:justify-start gap-3 sm:gap-4 md:gap-6 order-1 sm:order-2">
                <a
                  href="https://asowin.com/privacy.html"
                  className="text-white/80 hover:text-white text-xs whitespace-nowrap"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy Policy
                </a>
                <a
                  href="https://asowin.com/terms.html"
                  className="text-white/80 hover:text-white text-xs whitespace-nowrap"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Terms Of Service
                </a>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 order-2 sm:order-3">
                <a
                  href="mailto:support@asowin.com"
                  className="text-white/80 hover:text-white text-xs flex items-center gap-2 whitespace-nowrap text-center sm:text-left"
                >
                  <span className="text-[#FFB842]">✉</span>
                  support@asowin.com
                </a>

                <a
                  href="https://www.linkedin.com/company/asowin/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white text-xs flex items-center gap-2 whitespace-nowrap text-center sm:text-left"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                  >
                    <path d="M22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.203 24 24 23.226 24 22.271V1.729C24 .774 23.203 0 22.225 0zm-14.47 20.451h-3.96v-11.74h3.96v11.74zM6.474 7.336c-1.26 0-2.283-1.046-2.283-2.336 0-1.291 1.023-2.336 2.283-2.336 1.26 0 2.283 1.045 2.283 2.336s-1.023 2.336-2.283 2.336zM20.451 20.451h-3.96v-5.66c0-1.348-.027-3.088-1.884-3.088-1.886 0-2.175 1.476-2.175 2.994v5.754h-3.96v-11.74h3.803v1.604h.053c.528-1 1.818-2.057 3.741-2.057 4.005 0 4.748 2.637 4.748 6.066v6.128z"></path>
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;