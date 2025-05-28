import React from 'react';

interface AccordionProps {
    title: string;
    content: string;
    isOpen?: boolean;
    onToggle?: () => void;
}

const Accordion: React.FC<AccordionProps> = ({ title, content, isOpen = true, onToggle }) => {
    return (
        <div className="w-full bg-white rounded shadow-[10px_10px_0px_0px_rgba(0,0,0,0.25)]">
            <div className="p-4 flex justify-between items-start">
                <div className="flex-1 text-base font-medium font-inter">
                    {title}
                </div>
                <div className="w-6 h-6 relative">
                    <div className={`w-3 h-3 absolute left-[6px] top-[8px] border-b-2 border-r-2 border-neutral-900 transform transition-transform duration-200 ${isOpen ? 'rotate-45' : 'rotate-[-135deg]'}`} />
                </div>
            </div>
            <div className="h-px bg-zinc-300" />
            <div className="p-4">
                <p className="text-sm font-extralight font-inter text-neutral-900">
                    {content}
                </p>
            </div>
        </div>
    );
};

export default Accordion; 