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
    <div className="w-[400px] h-[233px] bg-neutral-100 rounded-[10px] shadow-[10px_10px_0px_0px_rgba(0,0,0,0.25)] p-4 relative flex flex-col">
      <div
        className="font-abhaya text-black text-6xl font-extrabold absolute left-[-20px] top-[-22px] z-20 drop-shadow-[2px_2px_2px_rgba(0,0,0,0.3)] pointer-events-none select-none"
      >
        &ldquo;
      </div>

      <div className="text-black text-xl font-black font-['Inter'] leading-tight mb-2 line-clamp-1">
        {title}
      </div>
      <div className="text-black text-lg font-extralight font-['Inter'] leading-snug mb-4 flex-grow line-clamp-4">
        {message}
      </div>
      <div className="flex items-center gap-3">
        <img
          src={avatar}
          alt={name}
          className="w-6 h-6 rounded-full object-cover"
        />
        <span className="text-black text-xl font-extrabold font-['Inter'] truncate">{name}</span>
      </div>
    </div>
  );
};

export default TestimonialCard;
