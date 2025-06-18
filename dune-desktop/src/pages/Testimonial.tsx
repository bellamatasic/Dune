import TestimonialCard from "../components/TestimonialCard";
import React from "react";

const Testimonial: React.FC = () => {
    return (
        <section className="w-full py-32 px-4 bg-white relative overflow-hidden min-h-[1000px]">
            {/* Title */}
            <div className="absolute left-1/2 top-[50px] -translate-x-1/2 text-center">
                <span className="text-black text-8xl font-extralight font-['Oswald'] leading-snug">client </span>
                <span className="text-black text-8xl font-bold font-['Oswald'] leading-snug">testimonials</span>
            </div>

            {/* Neon Divider Lines – Between Rows */}
            <div className="absolute left-0 top-[525px] w-full h-1 bg-purple-500 shadow-[0_0_16px_rgba(192,38,211,0.7)] rounded-full opacity-80" />

            {/* First Row of Testimonial Cards */}
            <div className="absolute top-[200px] w-full overflow-hidden py-8">
                <div className="flex animate-scroll-reverse">
                    {/* First set of cards */}
                    <div className="flex">
                        <div className="pr-[50px]">
                            <TestimonialCard
                                name="Alex Thompson"
                                title="Revolutionary Design Approach"
                                message="The attention to detail and innovative solutions exceeded all expectations. A truly transformative experience."
                                avatar="https://placehold.co/64x64"
                            />
                        </div>
                        <div className="pr-[50px]">
                            <TestimonialCard
                                name="Maria Rodriguez"
                                title="Exceptional Creative Direction"
                                message="Working with this team has been an absolute pleasure. Their creative vision is unmatched."
                                avatar="https://placehold.co/64x64"
                            />
                        </div>
                        <div className="pr-[50px]">
                            <TestimonialCard
                                name="James Wilson"
                                title="Outstanding Results"
                                message="The level of professionalism and quality of work is consistently impressive. Highly recommended!"
                                avatar="https://placehold.co/64x64"
                            />
                        </div>
                        <div className="pr-[50px]">
                            <TestimonialCard
                                name="Sarah Chen"
                                title="Innovative Solutions"
                                message="Their approach to problem-solving is both creative and effective. A game-changer for our business."
                                avatar="https://placehold.co/64x64"
                            />
                        </div>
                        <div className="pr-[50px]">
                            <TestimonialCard
                                name="Michael Brown"
                                title="Seamless Collaboration"
                                message="The team's ability to understand and execute our vision was remarkable. A perfect partnership."
                                avatar="https://placehold.co/64x64"
                            />
                        </div>
                    </div>

                    {/* Duplicate set for seamless loop */}
                    <div className="flex">
                        <div className="pr-[50px]">
                            <TestimonialCard
                                name="Alex Thompson"
                                title="Revolutionary Design Approach"
                                message="The attention to detail and innovative solutions exceeded all expectations. A truly transformative experience."
                                avatar="https://placehold.co/64x64"
                            />
                        </div>
                        <div className="pr-[50px]">
                            <TestimonialCard
                                name="Maria Rodriguez"
                                title="Exceptional Creative Direction"
                                message="Working with this team has been an absolute pleasure. Their creative vision is unmatched."
                                avatar="https://placehold.co/64x64"
                            />
                        </div>
                        <div className="pr-[50px]">
                            <TestimonialCard
                                name="James Wilson"
                                title="Outstanding Results"
                                message="The level of professionalism and quality of work is consistently impressive. Highly recommended!"
                                avatar="https://placehold.co/64x64"
                            />
                        </div>
                        <div className="pr-[50px]">
                            <TestimonialCard
                                name="Sarah Chen"
                                title="Innovative Solutions"
                                message="Their approach to problem-solving is both creative and effective. A game-changer for our business."
                                avatar="https://placehold.co/64x64"
                            />
                        </div>
                        <div className="pr-[50px]">
                            <TestimonialCard
                                name="Michael Brown"
                                title="Seamless Collaboration"
                                message="The team's ability to understand and execute our vision was remarkable. A perfect partnership."
                                avatar="https://placehold.co/64x64"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Second Row of Testimonial Cards */}
            <div className="absolute top-[550px] w-full overflow-hidden py-8">
                <div className="flex animate-scroll">
                    {/* First set of cards */}
                    <div className="flex">
                        <div className="pr-[50px]">
                            <TestimonialCard
                                name="Cooper Denton"
                                title="Outstanding Design, Exceeding Expectations"
                                message="Very happy with the outcome, thank you for the dedication!"
                                avatar="https://placehold.co/64x64"
                            />
                        </div>
                        <div className="pr-[50px]">
                            <TestimonialCard
                                name="Heath Martin"
                                title="Seamless Collaboration & Support"
                                message="Bella has been a joy to work with—always efficient and creative."
                                avatar="https://placehold.co/64x64"
                            />
                        </div>
                        <div className="pr-[50px]">
                            <TestimonialCard
                                name="Dr. Valeria"
                                title="Creative, Impactful Solutions"
                                message="Incredible dedication and insight. Highly recommend!"
                                avatar="https://placehold.co/64x64"
                            />
                        </div>
                        <div className="pr-[50px]">
                            <TestimonialCard
                                name="John Smith"
                                title="Innovative Solutions & Professional Service"
                                message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                                avatar="https://placehold.co/64x64"
                            />
                        </div>
                        <div className="pr-[50px]">
                            <TestimonialCard
                                name="Jane Doe"
                                title="Exceptional Quality & Attention to Detail"
                                message="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                                avatar="https://placehold.co/64x64"
                            />
                        </div>
                    </div>

                    {/* Duplicate set for seamless loop */}
                    <div className="flex">
                        <div className="pr-[50px]">
                            <TestimonialCard
                                name="Cooper Denton"
                                title="Outstanding Design, Exceeding Expectations"
                                message="Very happy with the outcome, thank you for the dedication!"
                                avatar="https://placehold.co/64x64"
                            />
                        </div>
                        <div className="pr-[50px]">
                            <TestimonialCard
                                name="Heath Martin"
                                title="Seamless Collaboration & Support"
                                message="Bella has been a joy to work with—always efficient and creative."
                                avatar="https://placehold.co/64x64"
                            />
                        </div>
                        <div className="pr-[50px]">
                            <TestimonialCard
                                name="Dr. Valeria"
                                title="Creative, Impactful Solutions"
                                message="Incredible dedication and insight. Highly recommend!"
                                avatar="https://placehold.co/64x64"
                            />
                        </div>
                        <div className="pr-[50px]">
                            <TestimonialCard
                                name="John Smith"
                                title="Innovative Solutions & Professional Service"
                                message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                                avatar="https://placehold.co/64x64"
                            />
                        </div>
                        <div className="pr-[50px]">
                            <TestimonialCard
                                name="Jane Doe"
                                title="Exceptional Quality & Attention to Detail"
                                message="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                                avatar="https://placehold.co/64x64"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;