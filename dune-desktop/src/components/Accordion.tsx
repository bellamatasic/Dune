import React, { useRef, useEffect } from 'react';

interface AccordionProps {
    title: string;
    content: string;
    isOpen?: boolean;
    onToggle?: () => void;
}

const Accordion: React.FC<AccordionProps> = ({ title, content, isOpen = false, onToggle }) => {
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (contentRef.current) {
            if (isOpen) {
                contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;
            } else {
                contentRef.current.style.maxHeight = '0px';
            }
        }
    }, [isOpen]);

    return (
        <div className="w-full bg-white rounded shadow-[10px_10px_0px_0px_rgba(0,0,0,0.25)]">
            <div 
                className="p-4 flex justify-between items-start cursor-pointer"
                onClick={onToggle}
            >
                <div className="flex-1 text-base font-medium font-inter">
                    {title}
                </div>
                <div className="w-6 h-6 relative">
                    <div className={`w-3 h-3 absolute left-[6px] top-[8px] border-b-2 border-r-2 border-neutral-900 transform transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-45' : 'rotate-[-135deg]'}`} />
                </div>
            </div>
            <div className="h-px bg-zinc-300" />
            <div 
                ref={contentRef}
                className="overflow-hidden transition-all duration-300 ease-in-out"
                style={{ maxHeight: isOpen ? '1000px' : '0px' }}
            >
                <div className="p-4">
                    <p className="text-sm font-extralight font-inter text-neutral-900">
                        {content}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Accordion; 