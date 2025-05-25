// import { FaInstagram } from "react-icons/fa";
import React from "react";
const SocialIcon = ({ Icon }: { Icon: React.ElementType }) => (
  <div className="relative w-16 h-16 flex items-center justify-center">
    {/* Glowing background icon */}
    <Icon className="absolute text-purple-500 text-4xl blur-sm drop-shadow-[0_0_12px_rgba(168,85,247,0.9)]" />
    
    {/* Bright white icon on top */}
    <Icon className="relative text-white text-3xl z-10" />
  </div>
);
  
export default SocialIcon;
