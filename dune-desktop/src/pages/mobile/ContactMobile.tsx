import React from "react";
import SocialIcon from "../../components/SocialIcon";
import { FaInstagram, FaFacebook, FaEnvelope } from "react-icons/fa";

const ContactMobile: React.FC = () => {
    return (
        <section className="w-full min-h-[400px] mx-auto py-24 px-4 bg-black relative flex flex-col items-center justify-center overflow-hidden">
            {/* Ghost DUNE Text */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="text-white/5 text-[300px] font-bold font-['Oswald']">DUNE</span>
            </div>

            {/* Main Content Container */}
            <div className="flex flex-col items-center justify-center flex-1 mt-48">
                {/* Title */}
                <div className="text-center mb-16">
                    <span className="text-white text-7xl font-extralight font-['Oswald'] leading-snug">get in </span>
                    <span className="text-white text-7xl font-bold font-['Oswald'] leading-snug">touch</span>
                </div>

                {/* Contact Links Container */}
                <div className="flex flex-col gap-12">
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
                </div>

                {/* DUNE Text */}
                <div className="mt-16 mb-16">
                    <span className="text-white text-9xl font-bold font-['Oswald']">DUNE</span>
                </div>
            </div>

            {/* Copyright */}
            <div className="mt-8 mb-4 text-center text-white text-base font-extralight font-['Inter']">
                ©2024 Dune Media. All rights reserved.
            </div>
        </section>
    );
};

export default ContactMobile; 