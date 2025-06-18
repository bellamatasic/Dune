import React from "react";

const MediaMobile: React.FC = () => {
    return (
        <section className="w-full py-12 px-4 bg-white relative overflow-hidden">
            {/* Vertical MEDIA text on the left */}
            <div className="absolute left-[calc(50%-500px)] top-[450px] rotate-[-90deg] text-[250px] font-bold font-oswald text-black leading-none pointer-events-none select-none">
                MEDIA
            </div>

            {/* Content container */}
            <div className="max-w-[350px] ml-[calc(50%-50px)] mt-[200px]">
                {/* Media Articles Grid */}
                <div className="grid grid-cols-1 gap-8 h-[650px] overflow-y-auto scrollbar-hide">
                    {/* Article 1 */}
                    <div className="w-[100%] bg-zinc-300 rounded-[10px] p-6">
                        <h3 className="text-2xl font-black font-inter leading-loose mb-2">
                            From Doubt to Domination: The Relentless Journey of Bella Matasic
                        </h3>
                        <p className="text-xl font-normal font-inter leading-relaxed">
                            What does it really take to go from uncertainty to unstoppable? Bella Matasic breaks down the raw, unfiltered truth of building a business, learning from failures, and taking action before you're "ready."
                            <br />
                            <span className="transition-colors duration-300 hover:text-purple-500 cursor-pointer">👉 Read the full story here</span>
                        </p>
                    </div>

                    {/* Article 2 */}
                    <div className="w-[100%] bg-zinc-300 rounded-[10px] p-6">
                        <h3 className="text-2xl font-black font-inter leading-loose mb-2">
                            The AI Revolution: Transforming Content Creation
                        </h3>
                        <p className="text-xl font-normal font-inter leading-relaxed">
                            Discover how artificial intelligence is reshaping the landscape of content creation, making it faster, more efficient, and more impactful than ever before.
                            <br />
                            <span className="transition-colors duration-300 hover:text-purple-500 cursor-pointer">👉 Read the full story here</span>
                        </p>
                    </div>

                    {/* Article 3 */}
                    <div className="w-[100%] bg-zinc-300 rounded-[10px] p-6">
                        <h3 className="text-2xl font-black font-inter leading-loose mb-2">
                            Dune's Journey to Taking Over the AI Content Industry
                        </h3>
                        <p className="text-xl font-normal font-inter leading-relaxed">
                            What happens when you stop waiting for the perfect moment and start creating your own opportunities? Bella Matasic shares the raw truth behind her journey—failures, pivots, and the relentless mindset that turned setbacks into stepping stones.
                            <br />
                            <span className="transition-colors duration-300 hover:text-purple-500 cursor-pointer">👉 Read the full story here</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MediaMobile; 