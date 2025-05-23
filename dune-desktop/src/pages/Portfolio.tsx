import React from "react";

const PortfolioSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-20 flex flex-col items-center">
      {/* Title */}
      <div className="text-center">
        <h2 className="text-black text-9xl font-bold font-oswald leading-[150px] tracking-[58.5px]">
          PORT
        </h2>
        <h2 className="text-black text-9xl font-bold font-oswald leading-[150px] tracking-[37.5px]">
          FOLIO
        </h2>
      </div>

      {/* Large Image */}
      <div className="w-full flex justify-center mt-16">
        <img
          className="w-[90%] max-w-[1187px] h-auto rounded-[10px] object-cover"
          src="https://placehold.co/1187x152"
          alt="Portfolio Banner"
        />
      </div>

      {/* Two Smaller Images Side-by-Side */}
      <div className="w-full flex flex-col md:flex-row gap-6 justify-center items-center mt-10">
        <img
          className="w-[90%] md:w-[579px] h-auto rounded-[10px] object-cover"
          src="https://placehold.co/579x151"
          alt="Portfolio Item 1"
        />
        <img
          className="w-[90%] md:w-[585px] h-auto rounded-[10px] object-cover"
          src="https://placehold.co/585x289"
          alt="Portfolio Item 2"
        />
      </div>
    </section>
  );
};

export default PortfolioSection;
