import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full w-full h-20 bg-black border-b border-black flex items-center justify-between px-8 z-50">
      <div className="text-white text-5xl font-bold font-oswald">DUNE</div>
      <nav className="flex gap-10 text-white text-2xl font-inter items-center">
        <a href="#services" className="font-normal">Services</a>
        <a href="#portfolio" className="font-normal">Portfolio</a>
        <a href="#about" className="font-normal">About</a>
        <a href="#contact" className="font-bold">Let's Talk</a>
      </nav>
    </header>
  );
};

export default Header;
