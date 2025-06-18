import React from 'react';
import { FaTimes } from 'react-icons/fa';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Sidebar Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 z-40 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <div 
        className={`fixed top-0 right-0 h-full w-64 bg-black transform transition-transform duration-300 z-50 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-white text-2xl"
        >
          <FaTimes />
        </button>

        {/* Navigation Links */}
        <nav className="flex flex-col gap-8 mt-24 px-8">
          <a 
            href="#services" 
            className="text-white text-2xl font-inter"
            onClick={onClose}
          >
            Services
          </a>
          <a 
            href="#portfolio" 
            className="text-white text-2xl font-inter"
            onClick={onClose}
          >
            Portfolio
          </a>
          <a 
            href="#about" 
            className="text-white text-2xl font-inter"
            onClick={onClose}
          >
            About
          </a>
          <a 
            href="#contact" 
            className="text-white text-2xl font-bold font-inter"
            onClick={onClose}
          >
            Let's Talk
          </a>
        </nav>
      </div>
    </>
  );
};

export default Sidebar; 