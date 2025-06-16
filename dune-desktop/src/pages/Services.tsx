import React, { useEffect, useRef, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import aiPlaceholder from "../assets/ai_placeholder.jpg";
import robotHand from "../assets/robot_hand.png";

const Services: React.FC = () => {
  const [visibleImages, setVisibleImages] = useState<Set<number>>(new Set());
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = imageRefs.current.findIndex((ref) => ref === entry.target);
          if (index !== -1) {
            setVisibleImages((prev) => {
              const newSet = new Set(prev);
              if (entry.isIntersecting) {
                newSet.add(index);
              } else {
                newSet.delete(index);
              }
              return newSet;
            });
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the image is visible
        rootMargin: "-20% 0px", // Consider center 60% of the viewport
      }
    );

    imageRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full py-32 px-4 bg-white relative overflow-hidden">
      {/* Title background text */}
      <div className="absolute z-20 text-[200px] font-bold font-oswald leading-[180px] left-[calc(50%-800px)] top-[130px] hidden lg:block pointer-events-none">
        <span className="absolute inset-0 text-purple-500 blur-sm">
          SE<br />RV<br />IC<br />ES
        </span>
        <span className="relative z-10 text-white drop-shadow-[0_0_20px_rgba(168,85,247,0.8)]">
          SE<br />RV<br />IC<br />ES
        </span>
      </div>

      {/* Grid Layout */}
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12">
        {/* Left column with images - Scrollable container */}
        <div className="relative h-[800px]">
          <div className="absolute inset-0 overflow-y-auto ml-[15%] pr-8 pl-8 scrollbar-hide">
            <div className="space-y-3 max-w-[300px] mx-auto">
              {[
                { src: aiPlaceholder, alt: "AI Technology" },
                { src: robotHand, alt: "Robot Hand" },
                { src: aiPlaceholder, alt: "AI Technology" },
                { src: robotHand, alt: "Robot Hand" },
                { src: aiPlaceholder, alt: "AI Technology" },
                { src: robotHand, alt: "Robot Hand" },
              ].map((image, index) => (
                <div
                  key={index}
                  ref={(el) => {
                    imageRefs.current[index] = el;
                  }}
                  className="relative rounded-[10px] border border-black transition-all duration-500"
                >
                  <img
                    src={image.src}
                    className="rounded-[10px] w-full h-auto object-cover"
                    alt={image.alt}
                  />
                  <div
                    className={`absolute inset-0 bg-black transition-opacity duration-500 rounded-[10px] ${
                      visibleImages.has(index) ? "opacity-0" : "opacity-50"
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right column with title and services */}
        <div className="space-y-6 -ml-[10%] w-[130%]">
          <h2 className="text-6xl font-oswald font-bold mb-12 ml-8">
            AI Solutions Tailored To Boost Your Content
          </h2>

          <div>
            <div className="flex items-center gap-1 group">
              <div className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center -translate-x-16 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                <FaArrowRight className="text-black text-xl" />
              </div>
              <div className="group-hover:translate-x-4 transition-transform duration-300 -ml-0.5">
                <h3 className="text-3xl font-bold font-inter mb-2">
                  COACHING AND TRAINING
                </h3>
                <p className="text-3xl font-light font-inter">
                  We handle your content creation with AI, so you can focus on growing your business.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-1 group">
              <div className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center -translate-x-16 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                <FaArrowRight className="text-black text-xl" />
              </div>
              <div className="group-hover:translate-x-4 transition-transform duration-300 -ml-0.5">
                <h3 className="text-3xl font-bold font-inter mb-2">
                  DONE-FOR-YOU AI CONTENT
                </h3>
                <p className="text-3xl font-light font-inter">
                  Learn how to use AI tools effectively to streamline your processes.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-1 group">
              <div className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center -translate-x-16 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                <FaArrowRight className="text-black text-xl" />
              </div>
              <div className="group-hover:translate-x-4 transition-transform duration-300 -ml-0.5">
                <h3 className="text-3xl font-bold font-inter mb-2">
                  AUTOMATION & SYSTEM SETUP
                </h3>
                <p className="text-3xl font-light font-inter">
                  We help you integrate AI into your workflow to save time and boost results.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-1 group">
              <div className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center -translate-x-16 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                <FaArrowRight className="text-black text-xl" />
              </div>
              <div className="group-hover:translate-x-4 transition-transform duration-300 -ml-0.5">
                <h3 className="text-3xl font-bold font-inter mb-2">
                  AI STRATEGY & CONSULTING
                </h3>
                <p className="text-3xl font-light font-inter">
                  We build AI-powered systems that automate repetitive content tasks, saving you hours each week.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
