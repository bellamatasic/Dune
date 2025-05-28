import React from "react";

const ServicesMobile: React.FC = () => {
    return (
        <section className="w-full py-12 px-4 bg-white relative overflow-hidden">
            {/* Title background text - Adjusted for mobile */}
            <div className="absolute z-20 text-[100px] font-bold font-oswald text-purple-500 leading-[90px] left-[5%] top-10 hidden sm:block pointer-events-none drop-shadow-[0_0_20px_rgba(168,85,247,0.8)]">
                SE<br />RV<br />IC<br />ES
            </div>

            {/* Content container */}
            <div className="w-full">
                {/* Title */}
                <h2 className="text-4xl font-oswald font-bold mb-6">
                    AI Solutions Tailored To Boost Your Content
                </h2>

                {/* Services List */}
                <div className="space-y-8">
                    <div>
                        <h3 className="text-xl font-bold font-inter mb-2">
                            COACHING AND TRAINING
                        </h3>
                        <p className="text-lg font-extralight font-inter">
                            We handle your content creation with AI, so you can focus on growing your business.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold font-inter mb-2">
                            DONE-FOR-YOU AI CONTENT
                        </h3>
                        <p className="text-lg font-extralight font-inter">
                            Learn how to use AI tools effectively to streamline your processes.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold font-inter mb-2">
                            AUTOMATION & SYSTEM SETUP
                        </h3>
                        <p className="text-lg font-extralight font-inter">
                            We help you integrate AI into your workflow to save time and boost results.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold font-inter mb-2">
                            AI STRATEGY & CONSULTING
                        </h3>
                        <p className="text-lg font-extralight font-inter">
                            We build AI-powered systems that automate repetitive content tasks, saving you hours each week.
                        </p>
                    </div>
                </div>

                {/* Images - Stacked vertically */}
                <div className="mt-8 space-y-4">
                    <img
                        src="https://placehold.co/254x339"
                        className="w-full rounded-[10px] border border-black"
                        alt="Service 1"
                    />
                    <img
                        src="https://placehold.co/254x381"
                        className="w-full rounded-[10px] border border-black"
                        alt="Service 2"
                    />
                </div>
            </div>
        </section>
    );
};

export default ServicesMobile; 