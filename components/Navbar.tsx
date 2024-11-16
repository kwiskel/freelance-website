"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";


export default function Navbar() {

  useEffect(() => {
  }, []);

  return (
    <nav className="font-serif fixed top-0 left-0 w-full text-white shadow-md z-50 px-4 py-4 h-64 bg-stone-900" >
      <div style={{ backgroundImage: `url(navbar_artwork.png)`, backgroundSize: 'cover' }} className="container h-full mx-auto flex items-center justify-center md:flex-row h-full rounded-xl py-4 px-4 border-solid border-2 border-sky-100 rounded-xl">
        {/* Desktop Menu */}
        <div className="hidden md:flex md:space-x-6 text-6xl px-4 py-4 border-solid border-2 border-sky-100 rounded-xl">
          <Link href="/#services" className="hover:text-gray-400">
            Services
          </Link>
          <Link href="" className="hover:text-gray-400">
            Work
          </Link>
          <Link href="#contact" className="hover:text-gray-400">
            Contact
          </Link>
      </div>
      </div>
    </nav>
  );
}
