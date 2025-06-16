import React from "react";
import useCountAnimation from "../hooks/useCountAnimation";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const MetricsSection: React.FC = () => {
    const { targetRef, isIntersecting } = useIntersectionObserver();
    const fasterCount = useCountAnimation({ targetValue: 5, trigger: isIntersecting });
    const guessworkCount = useCountAnimation({ targetValue: 0, trigger: isIntersecting });
    const focusCount = useCountAnimation({ targetValue: 100, trigger: isIntersecting });

    return (
        <section ref={targetRef} className="w-full min-h-[832px] bg-white overflow-hidden relative flex flex-col items-center justify-center px-4 py-20 gap-20">
        {/* Headlines */}
        <div className="flex flex-col items-center gap-6">
            <h2 className="text-7xl font-bold font-oswald text-black">{fasterCount}X Faster</h2>
            <p className="text-5xl font-['Kite_One'] text-black text-center">Content Production with AI</p>
        </div>

        <div className="flex flex-col items-center gap-6">
            <h2 className="text-7xl font-bold font-oswald text-black">{guessworkCount} Guesswork</h2>
            <p className="text-5xl font-['Kite_One'] text-black text-center">Data-Driven Results</p>
        </div>

        <div className="flex flex-col items-center gap-6">
            <h2 className="text-7xl font-bold font-oswald text-black">{focusCount}% Focus</h2>
            <p className="text-5xl font-['Kite_One'] text-black text-center">On Making You Money</p>
        </div>

        {/* Decorative gradients */}
        <div className="absolute left-8 bottom-10 w-[34px] h-[548px] bg-gradient-to-b from-neutral-500/10 to-stone-100/10" />
        <div className="absolute left-28 bottom-10 w-[34px] h-[676px] bg-gradient-to-b from-neutral-500/10 to-stone-100/10" />
        <div className="absolute left-48 bottom-10 w-[34px] h-[612px] bg-gradient-to-b from-neutral-500/10 to-stone-100/10" />
        <div className="absolute right-8 top-10 w-[34px] h-[548px] bg-gradient-to-b from-neutral-500/10 to-stone-100/10 rotate-180" />
        <div className="absolute right-28 top-10 w-[34px] h-[676px] bg-gradient-to-b from-neutral-500/10 to-stone-100/10 rotate-180" />
        <div className="absolute right-48 top-10 w-[34px] h-[612px] bg-gradient-to-b from-neutral-500/10 to-stone-100/10 rotate-180" />
        </section>
    );
};

export default MetricsSection;