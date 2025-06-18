import React from "react";
import { Link } from "react-router-dom";

const HeaderMobile: React.FC = () => {
    return (
        <header className="fixed top-0 left-0 w-full bg-black z-50">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link to="/" className="text-white text-4xl font-bold font-['Oswald'] leading-none flex-shrink-0">DUNE</Link>
                <div className="flex items-center gap-4">
                    <button className="text-white text-2xl flex-shrink-0">Menu</button>
                    <Link to="/contact" className="text-white text-lg font-semibold px-4 py-2 rounded transition-colors duration-200 shadow-[0_0_8px_2px_rgba(255,255,255,0.7)] hover:shadow-[0_0_16px_4px_rgba(255,255,255,1)] hover:bg-purple-600">let's talk</Link>
                </div>
            </div>
        </header>
    );
};

export default HeaderMobile; 