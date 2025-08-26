'use client';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBlogDropdownOpen, setIsBlogDropdownOpen] = useState(false);

  return (
    <header className="sticky top-4 z-50 mx-4 md:mx-8 lg:mx-10 2xl:mx-20 font">
      <nav className="relative bg-white shadow-lg rounded-2xl container mx-auto flex items-center justify-between py-4 px-4 md:px-6 lg:px-8 2xl:px-12">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-2xl font-bold">
            <Image
              height={38}
              width={118}
              className="w-[100px] md:w-[118px] 2xl:w-[140px] h-auto"
              src="/ASOWin.png"
              alt="Logo"
            />

          </span>
        </div>

        {/* Desktop Menu Container */}
        <div className="hidden md:flex flex-1 items-center justify-between md:pl-8 lg:pl-12 2xl:pl-16">
          {/* Menu Items */}
          <div className="flex items-center md:space-x-6 lg:space-x-8 2xl:space-x-12">
            <Link
              href="/"
              className="text-[#111111] hover:text-black text-sm lg:text-[14px] 2xl:text-[14px]"
            >
              HOME
            </Link>
            <Link
              href="/services"
              className="text-[#111111] hover:text-black text-sm lg:text-[14px] 2xl:text-[14px]"
            >
              SERVICES
            </Link>
            <a
              href="https://asowin.com/ASOWinBook.pdf"
              className="text-[#111111] hover:text-black text-sm lg:text-[14px] 2xl:text-[14px]"
            >
              OUR BOOK
            </a>
            <a
              href="https://asowin.com/blog/"
              className="text-[#111111] hover:text-black text-sm lg:text-[14px] 2xl:text-[14px]"
            >
              BLOG
            </a>
            <Link
              href="/about"
              className="text-[#111111] hover:text-black text-sm lg:text-[14px] 2xl:text-[14px]"
            >
              ABOUT
            </Link>
            <Link
              href="/contact"
              className="text-[#111111] hover:text-black text-sm lg:text-[14px] 2xl:text-[14px]"
            >
              CONTACT
            </Link>
          </div>

          {/* CTA Button */}
          <Link href="/contact">
            <button className="bg-[#306777] text-white px-4 md:px-6 py-2.5 rounded-[3px] text-sm lg:text-[14px] 2xl:text-[14px] font-medium hover:bg-teal-700 transition-colors md:ml-6 lg:ml-8 2xl:ml-12 whitespace-nowrap w-auto md:w-[160px] lg:w-[197px] h-[41px]">
              LET'S GET STARTED
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            aria-hidden="true"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isMobileMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white shadow-lg rounded-xl md:hidden">
            <div className="flex flex-col py-4">
              <Link
                href="/"
                className="px-6 py-2 text-[#111111] hover:text-black"
              >
                HOME
              </Link>
              <Link
                href="/services"
                className="px-6 py-2 text-[#111111] hover:text-black"
              >
                SERVICES
              </Link>
              <a
                href="https://asowin.com/ASOWinBook.pdf"
                className="px-6 py-2 text-[#111111] hover:text-black"
              >
                OUR BOOK
              </a>
              <a
                href="https://asowin.com/blog/"
                className="px-6 py-2 text-[#111111] hover:text-black"
              >
                BLOG
              </a>
              <Link
                href="/about"
                className="px-6 py-2 text-[#111111] hover:text-black"
              >
                ABOUT
              </Link>
              <Link
                href="/contact"
                className="px-6 py-2 text-[#111111] hover:text-black"
              >
                CONTACT
              </Link>
              <div className="px-6 pt-4">
                <Link href="/contact">
                  <button className="bg-[#306777] text-white px-4 md:px-6 py-2.5 rounded-[3px] text-sm lg:text-[14px] 2xl:text-[14px] font-medium hover:bg-teal-700 transition-colors md:ml-6 lg:ml-8 2xl:ml-12 whitespace-nowrap w-auto md:w-[160px] lg:w-[197px] h-[41px]">
                    LET'S GET STARTED
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;