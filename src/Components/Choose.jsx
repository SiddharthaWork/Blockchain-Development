"use client"
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Choose = () => {
    const [expandedId, setExpandedId] = useState(null);

    const items = [
        {
            id: 1,
            icon: "icon1.svg",
            title: "Expertise in Leading Blockchain Development",
            description:
                "Our team of experts has extensive experience in leading blockchain development, ensuring that your project is built on a solid foundation of expertise and innovation.",
        },
        {
            id: 2,
            icon: "icon22.svg",
            title: "Customized Blockchain Solutions",
            description:
                "We design tailored blockchain solutions to meet your unique business needs, leveraging cutting-edge technologies for optimal results.",
        },
        {
            id: 3,
            icon: "icon23.svg",
            title: "Scalable and Secure Systems",
            description:
                "Our blockchain solutions are built for scalability and security, ensuring seamless operations and protection for your business.",
        },
        {
            id: 4,
            icon: "icon24.svg",
            title: "Expert Support and Maintenance",
            description:
                "We provide ongoing support and maintenance to ensure the smooth functioning and continuous improvement of your blockchain solutions.",
        },
    ];

    return (
        <div className="w-full h-auto md:h-[40rem] bg-white py-12 relative">
            <div className="absolute inset-0">
                <img
                    src="choose.svg"
                    alt="choose"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="max-w-4xl mx-auto space-y-10 relative z-10">
                <h1 className="text-black text-center text-2xl md:text-4xl font-nunito font-bold">
                    Why Choose Us?
                </h1>

                {/* Card Grid */}
                <div className={`grid grid-cols-1 place-items-center md:grid-cols-4 mx-6 gap-4 relative ${expandedId ? 'gap-32' : 'gap-4'}`}>
                    {items.map((item) => (
                        <div key={item.id} className="relative">
                            <div
                                onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                                style={{
                                    transition: 'all 500ms ease-in-out',
                                    width: expandedId === item.id ? '300px' : '150px',
                                    height: expandedId === item.id ? '300px' : '150px',
                                    borderRadius: expandedId === item.id ? '20px' : '9999px',
                                }}
                                className="drop-shadow-lg bg-gradient-to-t from-sky-400 to-sky-600 flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-300 overflow-hidden"
                            >
                                {expandedId !== item.id ? (
                                    <img src={item.icon} alt="Icon" className="w-16 h-16" />
                                ) : (
                                    <div className="p-6 text-center">
                                        <img
                                            src={item.icon}
                                            alt="Icon"
                                            className="w-16 h-16 mx-auto mb-4"
                                        />
                                        <h1 className="text-white text-xl font-nunito font-bold mb-2">
                                            {item.title}
                                        </h1>
                                        <p className="text-white text-sm">
                                            {item.description}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center items-center pt-8">
                    <button className="bg-sky-400 text-white px-4 py-2 rounded-md">
                        Hire Us To Build Your App
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Choose;
