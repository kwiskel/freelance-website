import React from 'react';
import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="relative text-orange-400 mt-20 min-h-screen bg-black">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/coding_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="absolute top-0 left-0 w-full h-full bg-teal-950 bg-opacity-95 z-10"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-80 z-10"></div>

      {/* Card */}
      <div className="font-mono relative z-20 flex items-center justify-start pt-40 pl-40 w-full">
        <div className="p-8 rounded-lg max-w-4xl text-amber-100">
          <div className="flex items-center justify-center space-x-4">
            {/* Text appearing next to each other */}
            <h2 className="text-6xl font-bold">Websites</h2>
            <span className="text-6xl font-bold">|</span>
            <h2 className="text-6xl font-bold">Branding</h2>
            <span className="text-6xl font-bold">|</span>
            <h2 className="text-6xl font-bold">Design</h2>
          </div>
          <p className="font-geist font-bold text-3xl text-emerald-700 mt-4">
            Tailored for your specific needs.
          </p>
          <br></br>
          <Link href='' className="text-2xl text-amber-400 bg-emerald-900 rounded-xl px-4 py-4">
              Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}
