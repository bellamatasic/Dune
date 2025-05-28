import TestimonialCard from "../../components/TestimonialCard";
import React from "react";

const TestimonialMobile: React.FC = () => {
    return (
        <section className="w-full py-12 px-4 bg-white relative overflow-hidden min-h-screen">
            {/* Title - Adjusted for mobile */}
            <div className="text-center mb-8">
                <span className="text-black text-4xl font-extralight font-['Oswald'] leading-tight">client </span>
                <span className="text-black text-4xl font-bold font-['Oswald'] leading-tight">testimonials</span>
            </div>

            {/* Purple Divider Line - Full width */}
            <div className="w-full h-1 bg-purple-500 shadow-[0_0_16px_rgba(192,38,211,0.7)] rounded-full opacity-80 mb-8" />

            {/* Testimonial Cards - Stacked vertically */}
            <div className="flex flex-col gap-6">
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
            </div>
        </section>
    );
};

export default TestimonialMobile; 