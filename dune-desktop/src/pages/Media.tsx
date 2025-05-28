import React from "react";

const Media: React.FC = () => {
    return (
        <section className="w-full py-32 px-4 bg-white relative overflow-hidden">
          {/* Vertical MEDIA text on the left */}
          <div className="absolute left-[calc(50%-950px)] top-[calc(33.33%+20px)] -translate-y-1/2 rotate-[-90deg] text-[300px] font-bold font-oswald text-black leading-none pointer-events-none select-none">
            MEDIA
          </div>

          {/* Content container */}
          <div className="max-w-[1280px] mx-auto">
            {/* Media Articles Grid */}
            <div className="grid grid-cols-1 gap-12 max-w-3xl mx-auto">
              {/* Article 1 */}
              <div className="w-[140%] bg-zinc-300 rounded-[10px] p-6">
                <h3 className="text-3xl font-black font-inter leading-loose mb-2">
                  From Doubt to Domination: The Relentless Journey of Bella Matasic
                </h3>
                <p className="text-3xl font-normal font-inter leading-relaxed">
                  What does it really take to go from uncertainty to unstoppable? Bella Matasic breaks down the raw, unfiltered truth of building a business, learning from failures, and taking action before you're "ready."
                  <br />
                  👉 Read the full story here
                </p>
              </div>

              {/* Article 2 */}
              <div className="w-[140%] bg-zinc-300 rounded-[10px] p-6">
                <h3 className="text-3xl font-black font-inter leading-loose mb-2">
                  The AI Revolution: Transforming Content Creation
                </h3>
                <p className="text-3xl font-normal font-inter leading-relaxed">
                  Discover how artificial intelligence is reshaping the landscape of content creation, making it faster, more efficient, and more impactful than ever before.
                  <br />
                  👉 Read the full story here
                </p>
              </div>

              {/* Article 3 */}
              <div className="w-[140%] bg-zinc-300 rounded-[10px] p-6">
                <h3 className="text-3xl font-black font-inter leading-loose mb-2">
                  Dune's Journey to Taking Over the AI Content Industry
                </h3>
                <p className="text-3xl font-normal font-inter leading-relaxed">
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