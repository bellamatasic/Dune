import React from 'react';
import { FaBars } from 'react-icons/fa';

interface MobileNavProps {
  onMenuClick: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ onMenuClick }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 h-20 bg-black z-50 flex items-center justify-between px-6">
      {/* Logo */}
      <div className="text-white text-4xl font-bold font-oswald">
        DUNE
      </div>

      {/* Hamburger Menu Button */}
      <button 
        onClick={onMenuClick}
        className="text-white text-2xl"
      >
        <FaBars />
      </button>
    </nav>
  );
};

export default MobileNav; 