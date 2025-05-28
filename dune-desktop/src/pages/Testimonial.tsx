import TestimonialCard from "../components/TestimonialCard";
import React from "react";
const Testimonial: React.FC = () => {
    return (
        <section className="w-full py-32 px-4 bg-white relative overflow-hidden min-h-[1000px]">

            {/* Title */}
            <div className="absolute left-1/2 top-[100px] -translate-x-1/2 text-center">
              <span className="text-black text-8xl font-extralight font-['Oswald'] leading-snug">client </span>
              <span className="text-black text-8xl font-bold font-['Oswald'] leading-snug">testimonials</span>
            </div>

            {/* Neon Divider Lines – Spaced Below Title */}
            <div className="absolute left-0 top-[250px] w-full h-1 bg-purple-500 shadow-[0_0_16px_rgba(192,38,211,0.7)] rounded-full opacity-80" />

            {/* Testimonial Grid – Moved Lower */}
            <div className="absolute top-[430px] w-full flex justify-center gap-10">
              {/* Your testimonial cards go here */}
                <div className="flex flex-wrap justify-center gap-10 px-4">
                  <TestimonialCard
                    name="Cooper Denton"
                    title="Outstanding Design, Exceeding Expectations"
                    message="Very happy with the outcome, thank you for the dedication!"
                    avatar="https://placehold.co/64x64"
                  />
                  <TestimonialCard
                    name="Heath Martin"
                    title="Seamless Collaboration & Support"
                    message="Bella has been a joy to work with—always efficient and creative."
                    avatar="https://placehold.co/64x64"
                  />
                  <TestimonialCard
                    name="Dr. Valeria"
                    title="Creative, Impactful Solutions"
                    message="Incredible dedication and insight. Highly recommend!"
                    avatar="https://placehold.co/64x64"
                  />
                  {/* Add more as needed */}
                </div>
            </div>
        </section>

    )
}

export default Testimonial;