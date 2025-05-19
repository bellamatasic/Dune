import React from "react";

const TitleSection: React.FC = () => {
  return (
    <section className="relative w-full h-[832px] bg-gradient-to-b from-fuchsia-600/50 via-purple-500/70 to-white overflow-hidden flex items-center justify-center">
      {/* Text Layers for Depth Effect */}
      <h1 className="absolute text-9xl font-bold font-oswald leading-[90px] text-center text-neutral-100/30 blur-md outlined-text">
        create content smarter, not harder
      </h1>
      <h1 className="absolute text-9xl font-bold font-oswald leading-[90px] text-center text-neutral-100/50 blur-[10px] outlined-text">
        create content smarter, not harder
      </h1>
      <h1 className="text-9xl font-bold font-oswald leading-[90px] text-center text-neutral-100 outlined-text">
        create content smarter, not harder
      </h1>

      {/* Brand Text */}
      <div className="absolute bottom-[15%] text-7xl font-bold font-oswald text-neutral-100 text-center">
        DUNE
      </div>

      {/* Decorative Line */}
      <div className="absolute bottom-[5%] w-64 h-4 bg-neutral-500/10 rounded-full blur-[3px]" />
    </section>
  );
};

export default TitleSection;
