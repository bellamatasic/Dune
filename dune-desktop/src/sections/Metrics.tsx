const MetricsSection: React.FC = () => {
    return (
        <section className="w-full min-h-[832px] bg-white overflow-hidden relative flex flex-col items-center justify-center px-4 py-20 gap-20">
        {/* Headlines */}
        <div className="flex flex-col items-center gap-6">
            <h2 className="text-7xl font-bold font-oswald text-black">5X Faster</h2>
            <p className="text-5xl font-['Kite_One'] text-black text-center">Content Production with AI</p>
        </div>

        <div className="flex flex-col items-center gap-6">
            <h2 className="text-7xl font-bold font-oswald text-black">0 Guesswork</h2>
            <p className="text-5xl font-['Kite_One'] text-black text-center">Data-Driven Results</p>
        </div>

        <div className="flex flex-col items-center gap-6">
            <h2 className="text-7xl font-bold font-oswald text-black">100% Focus</h2>
            <p className="text-5xl font-['Kite_One'] text-black text-center">On Making You Money</p>
        </div>

        {/* Decorative gradients (optional) */}
        <div className="absolute left-5 bottom-10 w-6 h-52 bg-gradient-to-b from-neutral-500/10 to-stone-300/10" />
        <div className="absolute right-5 top-10 w-6 h-52 bg-gradient-to-b from-neutral-500/10 to-stone-300/10 rotate-180" />
        </section>
    );
};

export default MetricsSection;