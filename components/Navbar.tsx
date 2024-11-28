"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const logo_img = '/ank_design_logo_2.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="font-mono fixed top-0 left-0 w-full text-white z-40 shadow-xl">
      <div
        style={{
          backgroundImage: 'url(navbar_artwork.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center', // Ensures artwork is cropped from the center
          height: '100px', // Fixed height for the navbar
        }}
        className="flex items-center justify-between px-4 md:px-64 sm:pl-8"
      >
        {/* Logo Section */}
        <div className="flex items-center pt-2">
          <Image 
            src={logo_img} 
            width={200} // Adjusted to fit the fixed navbar height
            height={200} 
            alt="logo" 
            className="rounded-xl" 
          />
        </div>
        
        {/* Menu Section */}
        <div className="hidden md:flex md:space-x-6 text-xl border-white border-2 py-4 px-6 rounded-xl shadow-md bg-emerald-950 bg-opacity-70">
          <Link href="/#home" className="hover:text-gray-400">
            HOME
          </Link>
          <Link href="/#about" className="hover:text-gray-400">
            ABOUT
          </Link>
          <Link href="/#services" className="hover:text-gray-400">
            SERVICES
          </Link>
          <Link href="/work" className="hover:text-gray-400">
            WORK
          </Link>
          <Link href="#contact" className="hover:text-gray-400">
            CONTACT
          </Link>
        </div>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-emerald-950 px-4 pb-4 ">
          <Link href="/#home" className="block py-2 hover:text-gray-400">
            HOME
          </Link>
          <Link href="/#about" className="block py-2 hover:text-gray-400">
            ABOUT
          </Link>
          <Link href="/#services" className="block py-2 hover:text-gray-400">
            SERVICES
          </Link>
          <Link href="/#work" className="block py-2 hover:text-gray-400">
            WORK
          </Link>
          <Link href="#contact" className="block py-2 hover:text-gray-400">
            CONTACT
          </Link>
        </div>
      )}
    </nav>
  );
}
