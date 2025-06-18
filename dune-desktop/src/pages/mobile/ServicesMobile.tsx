import React, { useState } from "react";
import Accordion from "../../components/Accordion";

const ServicesMobile: React.FC = () => {
    const [openAccordions, setOpenAccordions] = useState<Set<string>>(new Set());

    const toggleAccordion = (id: string) => {
        setOpenAccordions(prev => {
            const newSet = new Set(prev);
            if (newSet.has(id)) {
                newSet.delete(id);
            } else {
                newSet.add(id);
            }
            return newSet;
        });
    };

    const services = [
        {
            id: "done-for-you",
            title: "DONE-FOR-YOU AI CONTENT",
            content: "We handle your content creation with AI, so you can focus on growing your business."
        },
        {
            id: "coaching",
            title: "COACHING & TRAINING",
            content: "Learn how to use AI tools effectively to streamline your processes."
        },
        {
            id: "automation",
            title: "AUTOMATION & SYSTEMS SETUP",
            content: "We build AI-powered systems that automate repetitive content tasks, saving you hours each week."
        },
        {
            id: "strategy",
            title: "AI STRATEGY & CONSULTING",
            content: "We help you integrate AI into your workflow to save time and boost results."
        }
    ];

    return (
        <section className="w-full bg-white relative">
            {/* Title Section with Blur Effect */}
            <div className="relative w-full h-24 mt-[60px]">
                <div className="absolute w-full text-center text-8xl font-bold font-oswald leading-[100px] text-purple-500/0 blur-lg">
                    SERVICES
                </div>
                <div className="absolute w-full text-center text-8xl font-bold font-oswald leading-[100px] text-purple-500/0 blur-[10px]">
                    SERVICES
                </div>
                <div className="absolute w-full text-center text-8xl font-bold font-oswald leading-[100px] text-purple-500 drop-shadow-[0_0_20px_rgba(168,85,247,0.8)]">
                    SERVICES
                </div>
                <div className="absolute w-full text-center text-8xl font-bold font-oswald leading-[100px] text-white [text-shadow:_-2px_-2px_0_#a855f7,_2px_-2px_0_#a855f7,_-2px_2px_0_#a855f7,_2px_2px_0_#a855f7]">
                    SERVICES
                </div>
            </div>

            {/* Caption */}
            <div className="max-w-[450px] mx-auto px-4 text-center text-lg font-normal font-['Kite_One'] text-gray-500 mt-4 mb-8">
                AI SOLUTIONS TAILORED TO BOOST <br/>
                YOUR CONTENT CREATION STRATEGY
            </div>

            {/* Service Cards Container */}
            <div className="max-w-[450px] mx-auto px-4 space-y-4 pb-64">
                {services.map((service) => (
                    <div key={service.id}>
                        <Accordion
                            title={service.title}
                            content={service.content}
                            isOpen={openAccordions.has(service.id)}
                            onToggle={() => toggleAccordion(service.id)}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ServicesMobile; 