import React from "react";

interface TestimonialCardMobileProps {
    name: string;
    title: string;
    message: string;
    avatar: string;
}

const TestimonialCardMobile: React.FC<TestimonialCardMobileProps> = ({
    name,
    title,
    message,
    avatar,
}) => {
    return (
        <div className="w-[280px] bg-white rounded-[10px] p-4 border border-black">
            <div className="flex items-center gap-3 mb-3">
                <img
                    src={avatar}
                    alt={name}
                    className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                    <h3 className="text-base font-bold font-inter">{name}</h3>
                    <p className="text-xs font-normal font-inter text-gray-600">{title}</p>
                </div>
            </div>
            <p className="text-sm font-normal font-inter leading-relaxed">{message}</p>
        </div>
    );
};

export default TestimonialCardMobile; 