import React from "react";

const Media: React.FC = () => {
    return (
        <section className="w-full py-24 px-4 bg-white relative overflow-hidden">
          {/* Vertical MEDIA text on the left */}
          <div className="absolute left-[calc(10%-95px)] top-1/3 -translate-y-1/2 rotate-[-90deg] text-[300px] font-bold font-oswald text-black leading-none pointer-events-none select-none">
            MEDIA
          </div>

          {/* Content container */}
          <div className="max-w-[1280px] mx-auto">
            {/* Media Articles Grid */}
            <div className="grid grid-cols-1 gap-12 max-w-3xl mx-auto">
              {/* Article 1 */}
              <div className="bg-zinc-300 rounded-[10px] p-6">
                <h3 className="text-2xl font-black font-inter leading-loose mb-2">
                  From Doubt to Domination: The Relentless Journey of Bella Matasic
                </h3>
                <p className="text-2xl font-normal font-inter leading-loose">
                  What does it really take to go from uncertainty to unstoppable? Bella Matasic breaks down the raw, unfiltered truth of building a business, learning from failures, and taking action before you're "ready."
                  <br />
                  👉 Read the full story here
                </p>
              </div>

              {/* Article 2 */}
              <div className="bg-zinc-300 rounded-[10px] p-6">
                <h3 className="text-2xl font-black font-inter leading-loose mb-2">
                  From Uncertainty to Unstoppable: How Bella Matasic Built Her Own Path
                </h3>
                <p className="text-2xl font-normal font-inter leading-loose">
                  What happens when you stop waiting for the perfect moment and start creating your own opportunities? Bella Matasic shares the raw truth behind her journey—failures, pivots, and the relentless mindset that turned setbacks into stepping stones.
                  <br />
                  👉 Read the full story here
                </p>
              </div>

              {/* Article 3 */}
              <div className="bg-zinc-300 rounded-[10px] p-6">
                <h3 className="text-2xl font-black font-inter leading-loose mb-2">
                  Dune's Journey to Taking Over the AI Content Industry
                </h3>
                <p className="text-2xl font-normal font-inter leading-loose">
                  What happens when you stop waiting for the perfect moment and start creating your own opportunities? Bella Matasic shares the raw truth behind her journey—failures, pivots, and the relentless mindset that turned setbacks into stepping stones.
                  <br />
                  👉 Read the full story here
                </p>
              </div>
            </div>
          </div>
        </section>
    );
}

export default Media;