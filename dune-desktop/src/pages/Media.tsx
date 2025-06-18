import React from "react";

const Media: React.FC = () => {
  return (
    <section id="media" className="w-full py-32 px-4 bg-white relative overflow-hidden">
      {/* Vertical MEDIA text on the left */}
      <div className="absolute left-[calc(50%-1050px)] top-[calc(33.33%+160px)] -translate-y-1/2 rotate-[-90deg] text-[300px] font-bold font-oswald text-black leading-none pointer-events-none select-none">
        MEDIA
      </div>

      {/* Media Container */}
      <div className="w-full max-w-[1400px] mx-auto px-4">
        {/* Media Articles Grid */}
        <div className="relative h-[800px]">
          <div className="absolute inset-0 overflow-y-auto ml-[15%] pr-8 pl-8 scrollbar-hide">
            <div className="space-y-6 max-w-[1400px] mx-auto">
              {/* Article 1 */}
              <div className="relative bg-zinc-300 rounded-[10px] p-6 transition-all duration-500">
                <div className="relative z-10">
                  <h3 className="text-3xl font-black font-inter leading-loose mb-2">
                    From Doubt to Domination: The Relentless Journey of Bella Matasic
                  </h3>
                  <p className="text-3xl font-normal font-inter leading-relaxed">
                    What does it really take to go from uncertainty to unstoppable? Bella Matasic breaks down the raw, unfiltered truth of building a business, learning from failures, and taking action before you're "ready."
                    <br />
                    <a href="#" className="inline-block transition-colors duration-300 hover:text-purple-600">
                      👉 Read the full story here
                    </a>
                  </p>
                </div>
              </div>

              {/* Article 2 */}
              <div className="relative bg-zinc-300 rounded-[10px] p-6 transition-all duration-500">
                <div className="relative z-10">
                  <h3 className="text-3xl font-black font-inter leading-loose mb-2">
                    The AI Revolution: Transforming Content Creation
                  </h3>
                  <p className="text-3xl font-normal font-inter leading-relaxed">
                    Discover how artificial intelligence is reshaping the landscape of content creation, making it faster, more efficient, and more impactful than ever before.
                    <br />
                    <a href="#" className="inline-block transition-colors duration-300 hover:text-purple-600">
                      👉 Read the full story here
                    </a>
                  </p>
                </div>
              </div>

              {/* Article 3 */}
              <div className="relative bg-zinc-300 rounded-[10px] p-6 transition-all duration-500">
                <div className="relative z-10">
                  <h3 className="text-3xl font-black font-inter leading-loose mb-2">
                    Dune's Journey to Taking Over the AI Content Industry
                  </h3>
                  <p className="text-3xl font-normal font-inter leading-relaxed">
                    What happens when you stop waiting for the perfect moment and start creating your own opportunities? Bella Matasic shares the raw truth behind her journey—failures, pivots, and the relentless mindset that turned setbacks into stepping stones.
                    <br />
                    <a href="#" className="inline-block transition-colors duration-300 hover:text-purple-600">
                      👉 Read the full story here
                    </a>
                  </p>
                </div>
              </div>

              {/* Article 4 */}
              <div className="relative bg-zinc-300 rounded-[10px] p-6 transition-all duration-500">
                <div className="relative z-10">
                  <h3 className="text-3xl font-black font-inter leading-loose mb-2">
                    The Future of AI: Breaking Barriers in Content Creation
                  </h3>
                  <p className="text-3xl font-normal font-inter leading-relaxed">
                    Explore how artificial intelligence is revolutionizing the way we create and consume content. From automated writing to personalized experiences, discover the cutting-edge technologies that are shaping the future of digital media.
                    <br />
                    <a href="#" className="inline-block transition-colors duration-300 hover:text-purple-600">
                      👉 Read the full story here
                    </a>
                  </p>
                </div>
              </div>

              {/* Article 5 */}
              <div className="relative bg-zinc-300 rounded-[10px] p-6 transition-all duration-500">
                <div className="relative z-10">
                  <h3 className="text-3xl font-black font-inter leading-loose mb-2">
                    Innovation in Action: Dune's Impact on Digital Media
                  </h3>
                  <p className="text-3xl font-normal font-inter leading-relaxed">
                    Witness the transformative power of AI-driven content creation as Dune continues to push the boundaries of what's possible in digital media. Learn how our innovative approach is changing the game for content creators worldwide.
                    <br />
                    <a href="#" className="inline-block transition-colors duration-300 hover:text-purple-600">
                      👉 Read the full story here
                    </a>
                  </p>
                </div>
              </div>

              {/* Article 6 - Lorem Ipsum */}
              <div className="relative bg-zinc-300 rounded-[10px] p-6 transition-all duration-500">
                <div className="relative z-10">
                  <h3 className="text-3xl font-black font-inter leading-loose mb-2">
                    Lorem Ipsum Dolor Sit Amet
                  </h3>
                  <p className="text-3xl font-normal font-inter leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    <br />
                    <a href="#" className="inline-block transition-colors duration-300 hover:text-purple-600">
                      👉 Read the full story here
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Media;