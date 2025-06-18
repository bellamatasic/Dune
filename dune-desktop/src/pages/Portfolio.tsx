import React, { useEffect, useRef, useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const spaceImages = [
  "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=1187&q=80", // Banner
  "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?auto=format&fit=crop&w=579&q=80", // Item 1
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=585&q=80"  // Item 2
];

const Portfolio: React.FC = () => {
  return (
    <section className="w-full bg-white py-20 flex flex-col items-center relative">
      {/* Title */}
      <div className="text-center relative z-20 -mt-[3px]">
        <h2 className="text-black text-9xl font-bold font-oswald leading-[150px] tracking-[58.5px]">
          PORT
        </h2>
        <h2 className="text-black text-9xl font-bold font-oswald leading-[150px] tracking-[37.5px] relative z-30">
          <span
            className="bg-gradient-to-b from-black from-50% to-white to-50% bg-clip-text text-transparent"
            style={{
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            FOLIO
          </span>
        </h2>
      </div>

      {/* Large Image with overlay */}
      <div className="w-full flex justify-center -mt-20 relative z-10">
        <div className="relative w-[90%] max-w-[1187px] h-[240px] group">
          <img
            className="w-full h-full rounded-[10px] object-cover"
            src={spaceImages[0]}
            alt="Portfolio Banner"
          />
          <div className="absolute inset-0 bg-black/60 rounded-[10px] transition-opacity duration-300 group-hover:opacity-0 pointer-events-none" />
        </div>
      </div>

      {/* Two Smaller Images Side-by-Side with overlay */}
      <div className="w-full flex flex-col md:flex-row gap-6 justify-center items-start mt-10">
        <div className="relative w-[90%] md:w-[579px] h-[191px] group">
          <img
            className="w-full h-full rounded-[10px] object-cover"
            src={spaceImages[1]}
            alt="Portfolio Item 1"
          />
          <div className="absolute inset-0 bg-black/60 rounded-[10px] transition-opacity duration-300 group-hover:opacity-0 pointer-events-none" />
        </div>
        <div className="relative w-[90%] md:w-[585px] h-[329px] group">
          <img
            className="w-full h-full rounded-[10px] object-cover"
            src={spaceImages[2]}
            alt="Portfolio Item 2"
          />
          <div className="absolute inset-0 bg-black/60 rounded-[10px] transition-opacity duration-300 group-hover:opacity-0 pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
