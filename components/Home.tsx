import React from 'react';
import Link from "next/link";

export default function Home() {
  return (
    <section id="home" className="relative text-orange-400 mt-20 min-h-screen bg-black">
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
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 z-10"></div>

      {/* Card */}
      <div className="font-mono relative z-20 flex flex-col items-center justify-center text-center md:items-start md:text-left md:justify-start pt-20 md:pt-40 px-4 md:px-40 w-full">
        <div className="p-6 md:p-8 rounded-lg max-w-5xl text-amber-100 bg-opacity-80">
          <div className="flex flex-wrap justify-center md:justify-start space-x-4 text-3xl md:text-6xl font-bold">
            <h2>Websites</h2>
            <span>|</span>
            <h2>Design</h2>
            <span>|</span>
            <h2>Systems</h2>
          </div>
          <p className="font-geist font-bold text-xl md:text-3xl text-white mt-4">
            Tailored for your specific needs.
          </p>
          <div className="mt-6 flex justify-center md:justify-start">
            <Link 
              href='' 
              className="flex items-center w-fit text-lg md:text-2xl font-bold text-white bg-emerald-900 bg-opacity-80 rounded-xl px-4 py-3 md:px-6 md:py-4 space-x-2"
            >
              <span>Get Started</span>
              <svg 
                className="w-5 h-5 md:w-6 md:h-6 text-gray-800 dark:text-white" 
                aria-hidden="true" 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                fill="none" 
                viewBox="0 0 24 24"
              >
                <path 
                  stroke="currentColor" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M19 12H5m14 0-4 4m4-4-4-4"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
