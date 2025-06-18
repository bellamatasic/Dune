import TestimonialCardMobile from "../../components/TestimonialCardMobile";
import React from "react";

const TestimonialMobile: React.FC = () => {
    return (
        <section className="w-full pt-0 pb-0 px-4 bg-white relative overflow-hidden min-h-screen">
            {/* Title - Adjusted for mobile */}
            <div className="absolute left-1/2 top-[200px] -translate-x-1/2 text-center">
                <span className="text-black text-6xl font-extralight font-['Oswald'] leading-snug">client </span>
                <span className="text-black text-6xl font-bold font-['Oswald'] leading-snug">testimonials</span>
            </div>

            {/* Testimonial Cards - Horizontal Scroll */}
            <div className="absolute top-[400px] w-full overflow-hidden">
                <div className="flex animate-scroll gap-6">
                    {/* First set of cards */}
                    <div className="grid grid-cols-2 gap-6 min-w-[600px]">
                        <TestimonialCardMobile
                            name="Cooper Denton"
                            title="Outstanding Design, Exceeding Expectations"
                            message="Very happy with the outcome, thank you for the dedication!"
                            avatar="https://placehold.co/64x64"
                        />
                        <TestimonialCardMobile
                            name="Heath Martin"
                            title="Seamless Collaboration & Support"
                            message="Bella has been a joy to work with—always efficient and creative."
                            avatar="https://placehold.co/64x64"
                        />
                        <div className="col-span-2 w-screen h-1 bg-purple-500 shadow-[0_0_16px_rgba(192,38,211,0.7)] rounded-full opacity-80 my-4 -ml-4" />
                        <TestimonialCardMobile
                            name="Dr. Valeria"
                            title="Creative, Impactful Solutions"
                            message="Incredible dedication and insight. Highly recommend!"
                            avatar="https://placehold.co/64x64"
                        />
                        <TestimonialCardMobile
                            name="Sarah Chen"
                            title="Exceptional Service & Results"
                            message="Transformed our content strategy with innovative AI solutions."
                            avatar="https://placehold.co/64x64"
                        />
                    </div>

                    {/* Duplicate set for seamless loop */}
                    <div className="grid grid-cols-2 gap-6 min-w-[600px]">
                        <TestimonialCardMobile
                            name="Cooper Denton"
                            title="Outstanding Design, Exceeding Expectations"
                            message="Very happy with the outcome, thank you for the dedication!"
                            avatar="https://placehold.co/64x64"
                        />
                        <TestimonialCardMobile
                            name="Heath Martin"
                            title="Seamless Collaboration & Support"
                            message="Bella has been a joy to work with—always efficient and creative."
                            avatar="https://placehold.co/64x64"
                        />
                        <div className="col-span-2 w-screen h-1 bg-purple-500 shadow-[0_0_16px_rgba(192,38,211,0.7)] rounded-full opacity-80 my-4 -ml-4" />
                        <TestimonialCardMobile
                            name="Dr. Valeria"
                            title="Creative, Impactful Solutions"
                            message="Incredible dedication and insight. Highly recommend!"
                            avatar="https://placehold.co/64x64"
                        />
                        <TestimonialCardMobile
                            name="Sarah Chen"
                            title="Exceptional Service & Results"
                            message="Transformed our content strategy with innovative AI solutions."
                            avatar="https://placehold.co/64x64"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialMobile; 