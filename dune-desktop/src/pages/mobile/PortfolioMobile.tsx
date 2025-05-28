import React from "react";

const PortfolioMobile: React.FC = () => {
    return (
        <section className="w-full bg-white py-6 flex flex-col items-center relative">
            {/* Title */}
            <div className="text-center absolute -top-32 left-1/2 -translate-x-1/2 z-10">
                <h2 className="text-black text-9xl font-bold font-oswald leading-[150px] tracking-[2px] -mb-4">
                    PORT
                </h2>
                <h2 className="text-black text-9xl font-bold font-oswald leading-[150px] tracking-[2px]">
                    FOLIO
                </h2>
            </div>

            {/* Large Image */}
            <div className="w-full flex justify-center mt-16">
                <img
                    className="w-[65%] h-[200px] rounded-[10px] object-cover"
                    src="https://placehold.co/1187x300"
                    alt="Portfolio Banner"
                />
            </div>

            {/* Two Smaller Images Side-by-Side */}
            <div className="w-full flex flex-row gap-4 justify-center items-start mt-6">
                <img
                    className="w-[32%] h-[250px] rounded-[10px] object-cover"
                    src="https://placehold.co/579x300"
                    alt="Portfolio Item 1"
                />
                <img
                    className="w-[32%] h-[350px] rounded-[10px] object-cover"
                    src="https://placehold.co/585x400"
                    alt="Portfolio Item 2"
                />
            </div>
        </section>
    );
};

export default PortfolioMobile; 