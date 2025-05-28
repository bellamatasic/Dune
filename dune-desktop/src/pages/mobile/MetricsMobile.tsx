import React from "react";

const MetricsMobile: React.FC = () => {
    return (
        <section className="w-full min-h-[600px] bg-white overflow-hidden relative flex flex-col items-center justify-center px-4 py-12 gap-12">
            {/* Headlines */}
            <div className="flex flex-col items-center gap-4">
                <h2 className="text-5xl font-bold font-oswald text-black">5X Faster</h2>
                <p className="text-3xl font-['Kite_One'] text-black text-center">Content Production with AI</p>
            </div>

            <div className="flex flex-col items-center gap-4">
                <h2 className="text-5xl font-bold font-oswald text-black">0 Guesswork</h2>
                <p className="text-3xl font-['Kite_One'] text-black text-center">Data-Driven Results</p>
            </div>

            <div className="flex flex-col items-center gap-4">
                <h2 className="text-5xl font-bold font-oswald text-black">100% Focus</h2>
                <p className="text-3xl font-['Kite_One'] text-black text-center">On Making You Money</p>
            </div>
        </section>
    );
};

export default MetricsMobile; 