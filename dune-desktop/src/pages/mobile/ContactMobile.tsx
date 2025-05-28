import React from "react";
import SocialIcon from "../../components/SocialIcon";
import { FaInstagram, FaFacebook, FaEnvelope } from "react-icons/fa";

const ContactMobile: React.FC = () => {
    return (
        <section className="w-full min-h-[800px] mx-auto py-24 px-4 bg-black relative flex flex-col items-center overflow-hidden">
            {/* Title */}
            <div className="text-center mb-24">
                <span className="text-white text-6xl font-extralight font-['Oswald'] leading-snug">get in </span>
                <span className="text-white text-6xl font-bold font-['Oswald'] leading-snug">touch</span>
            </div>

            {/* Contact Links Container */}
            <div className="flex flex-col gap-16">
                {/* Instagram */}
                <div className="flex items-center gap-4">
                    <div className="w-24 flex justify-center">
                        <SocialIcon Icon={FaInstagram} />
                    </div>
                    <span className="text-white text-2xl font-normal font-['Inter']">INSTAGRAM</span>
                </div>

                {/* Facebook */}
                <div className="flex items-center gap-4">
                    <div className="w-24 flex justify-center">
                        <SocialIcon Icon={FaFacebook} />
                    </div>
                    <span className="text-white text-2xl font-normal font-['Inter']">FACEBOOK</span>
                </div>

                {/* Email */}
                <div className="flex items-center gap-4">
                    <div className="w-24 flex justify-center">
                        <SocialIcon Icon={FaEnvelope} />
                    </div>
                    <span className="text-white text-2xl font-normal font-['Inter']">EMAIL</span>
                </div>
            </div>

            {/* DUNE Text */}
            <div className="mt-16 mb-16">
                <span className="text-white text-9xl font-bold font-['Oswald']">DUNE</span>
            </div>

            {/* Copyright */}
            <div className="mt-auto mb-4 text-center text-white text-base font-extralight font-['Inter']">
                ©2024 Dune Media. All rights reserved.
            </div>
        </section>
    );
};

export default ContactMobile; 