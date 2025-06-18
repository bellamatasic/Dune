// import { FaInstagram } from "react-icons/fa";
import React from "react";
const SocialIcon = ({ Icon }: { Icon: React.ElementType }) => (
  <div className="relative w-24 h-24 flex items-center justify-center">
    {/* Glowing background icon */}
    <Icon className="absolute text-purple-500 text-6xl blur-sm drop-shadow-[0_0_8px_rgba(168,85,247,0.7)]" />
    
    {/* Bright white icon on top */}
    <Icon className="relative text-white text-5xl z-10" />
  </div>
);
  
export default SocialIcon;
