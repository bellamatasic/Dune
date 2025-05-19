import React from "react";

const Services: React.FC = () => {
  return (
    <section className="w-full max-w-[1280px] mx-auto py-24 px-4 bg-white relative">
      {/* Title background text */}
      <div className="absolute text-[200px] font-bold font-oswald text-black/10 leading-[180px] blur-lg -left-10 top-10 hidden lg:block">
        SE<br />RV<br />IC<br />ES
      </div>

      {/* Title */}
      <h2 className="text-5xl font-oswald font-bold mb-12 text-center">
        AI Solutions Tailored To Boost Your Content
      </h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left column with images */}
        <div className="space-y-8">
          <img
            src="https://placehold.co/254x339"
            className="rounded-[10px] border border-black"
            alt="Service 1"
          />
          <img
            src="https://placehold.co/254x381"
            className="rounded-[10px] border border-black"
            alt="Service 2"
          />
        </div>

        {/* Right column with services */}
        <div className="space-y-10">
          <div>
            <h3 className="text-2xl font-bold font-inter mb-2">
              COACHING AND TRAINING
            </h3>
            <p className="text-xl font-extralight font-inter">
              We handle your content creation with AI, so you can focus on
              growing your business.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-extrabold font-inter mb-2">
              DONE-FOR-YOU AI CONTENT
            </h3>
            <p className="text-xl font-extralight font-inter">
              Learn how to use AI tools effectively to streamline your
              processes.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold font-inter mb-2">
              AUTOMATION & SYSTEM SETUP
            </h3>
            <p className="text-xl font-extralight font-inter">
              We help you integrate AI into your workflow to save time and boost results.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold font-inter mb-2">
              AI STRATEGY & CONSULTING
            </h3>
            <p className="text-xl font-extralight font-inter">
              We build AI-powered systems that automate repetitive content
              tasks, saving you hours each week.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
