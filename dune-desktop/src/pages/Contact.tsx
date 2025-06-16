import React from "react";
import SocialIcon from "../components/SocialIcon";
import { FaInstagram, FaFacebook, FaEnvelope } from "react-icons/fa";

const Contact: React.FC = () => {
  return (
    // <div className="w-[1280px] h-[832px] relative bg-black overflow-hidden">
    <section className="w-full min-h-[900px] mx-auto py-32 px-4 bg-black relative flex flex-col items-center justify-center overflow-hidden">
      {/* Ghost DUNE Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="text-white/5 text-[400px] font-bold font-['Oswald']">DUNE</span>
      </div>

      {/* Main Content Container */}
      <div className="flex flex-col items-center justify-center flex-1 mt-64">
        {/* Title */}
        <div className="text-center mb-24">
          <span className="text-white text-5xl font-bold font-['Inter']">grow</span>
          <span className="text-white text-5xl font-extralight font-['Inter']"> with us</span>
        </div>

        {/* Contact Links Container */}
        <div className="flex flex-col gap-16">
          {/* Instagram */}
          <div className="flex items-center gap-6">
            <div className="w-20 flex justify-center">
              <SocialIcon Icon={FaInstagram} />
            </div>
            <span className="text-white text-3xl font-normal font-['Inter'] transition-all duration-300 hover:text-purple-400 cursor-pointer">INSTAGRAM</span>
          </div>

          {/* Facebook */}
          <div className="flex items-center gap-6">
            <div className="w-20 flex justify-center">
              <SocialIcon Icon={FaFacebook} />
            </div>
            <span className="text-white text-3xl font-normal font-['Inter'] transition-all duration-300 hover:text-purple-400 cursor-pointer">FACEBOOK</span>
          </div>

          {/* Email */}
          <div className="flex items-center gap-6">
            <div className="w-20 flex justify-center">
              <SocialIcon Icon={FaEnvelope} />
            </div>
            <span className="text-white text-3xl font-normal font-['Inter'] transition-all duration-300 hover:text-purple-400 cursor-pointer">EMAIL</span>
          </div>

          <a
            href="https://www.linkedin.com/company/dune-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl font-black font-inter leading-loose"
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com/dune_ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl font-black font-inter leading-loose"
          >
            Twitter
          </a>
          <a
            href="https://www.instagram.com/dune_ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl font-black font-inter leading-loose"
          >
            Instagram
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-auto mb-4 text-center text-white text-base font-extralight font-['Inter']">
        ©2024 Dune Media. All rights reserved.
      </div>
    </section>
  );
};

export default Contact;