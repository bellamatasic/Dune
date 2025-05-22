import React from "react";

type TestimonialCardProps = {
  name: string;
  title: string;
  message: string;
  avatar: string;
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  title,
  message,
  avatar,
}) => {
  return (
    <div className="w-96 bg-neutral-100 rounded-[10px] shadow-[10px_10px_0px_0px_rgba(0,0,0,0.25)] p-4 relative">
      <div className="text-black text-8xl font-extrabold absolute left-[-20px] top-[-20px] font-['Abhaya_Libre_ExtraBold'] leading-[60px]">
        “
      </div>
      <div className="text-black text-xs font-black font-['Inter'] leading-loose mb-1">
        {title}
      </div>
      <div className="text-black text-xs font-extralight font-['Inter'] leading-loose mb-4">
        {message}
      </div>
      <div className="flex items-center gap-3">
        <img
          src={avatar}
          alt={name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <span className="text-black text-sm font-extrabold font-['Inter']">{name}</span>
      </div>
    </div>
  );
};

export default TestimonialCard;
