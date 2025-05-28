import React from "react";
import SocialIcon from "../components/SocialIcon";
import { FaInstagram, FaFacebook, FaEnvelope } from "react-icons/fa";

const Contact: React.FC = () => {
  return (
    // <div className="w-[1280px] h-[832px] relative bg-black overflow-hidden">
    <section className="w-full min-h-[850px] mx-auto py-24 px-4 bg-black relative flex flex-col items-center overflow-hidden">
      {/* Title */}
      <div className="text-center mb-24">
        <span className="text-white text-4xl font-bold font-['Inter']">grow</span>
        <span className="text-white text-4xl font-extralight font-['Inter']"> with us</span>
      </div>

      {/* Contact Links Container */}
      <div className="flex flex-col gap-16">
        {/* Instagram */}
        <div className="flex items-center gap-6">
          <div className="w-20 flex justify-center">
            <SocialIcon Icon={FaInstagram} />
          </div>
          <span className="text-white text-3xl font-normal font-['Inter']">INSTAGRAM</span>
        </div>

        {/* Facebook */}
        <div className="flex items-center gap-6">
          <div className="w-20 flex justify-center">
            <SocialIcon Icon={FaFacebook} />
          </div>
          <span className="text-white text-3xl font-normal font-['Inter']">FACEBOOK</span>
        </div>

        {/* Email */}
        <div className="flex items-center gap-6">
          <div className="w-20 flex justify-center">
            <SocialIcon Icon={FaEnvelope} />
          </div>
          <span className="text-white text-3xl font-normal font-['Inter']">EMAIL</span>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-auto mb-8 text-center text-white text-lg font-extralight font-['Inter']">
        ©2024 Dune Media. All rights reserved.
      </div>

      {/* DUNE ghost text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="text-white/[0.03] text-[400px] font-bold font-['Oswald']">DUNE</span>
      </div>
    </section>
  );
};

export default Contact;