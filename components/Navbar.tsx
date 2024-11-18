"use client";

import Link from "next/link";
import Image from "next/image";

const logo_img = '/ank_design_logo_2.png';


export default function Navbar() {
  return (
    <nav className="font-mono fixed top-0 left-0 w-full text-orange-100 z-40 shadow-xl">
      <div
        style={{
          backgroundImage: 'url(navbar_artwork.png)',
          backgroundSize: 'cover',
        }}
        className="w-full h-full flex items-center justify-between py-2 px-64"
      >
      
        {/* Logo Section */}
        <div className="flex items-center border-orange-200 border-2 rounded-xl shadow-md">
          <Image 
            src={logo_img} 
            width={150} 
            height={150} 
            alt="logo" 
            className="rounded-xl" 
          />
        </div>
        
        {/* Menu Section */}
        <div className="hidden md:flex md:space-x-6 text-xl border-orange-200 border-2 py-4 px-6 rounded-xl shadow-md">
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
      </div>
    </nav>
  );
}
