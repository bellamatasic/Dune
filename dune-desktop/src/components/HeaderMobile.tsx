import React from "react";
import { Link } from "react-router-dom";

const HeaderMobile: React.FC = () => {
    return (
        <header className="fixed top-0 left-0 w-full bg-black z-50">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link to="/" className="text-white text-9xl font-bold font-['Oswald'] leading-none">DUNE</Link>
                <button className="text-white text-2xl">Menu</button>
            </div>
        </header>
    );
};

export default HeaderMobile; 