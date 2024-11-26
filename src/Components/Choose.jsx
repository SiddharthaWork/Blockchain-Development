"use client"
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Choose = () => {
    const [selectedId, setSelectedId] = useState(null);

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
            icon: "icon1.svg",
            title: "Customized Blockchain Solutions",
            description:
                "We design tailored blockchain solutions to meet your unique business needs, leveraging cutting-edge technologies for optimal results.",
        },
        {
            id: 3,
            icon: "icon1.svg",
            title: "Scalable and Secure Systems",
            description:
                "Our blockchain solutions are built for scalability and security, ensuring seamless operations and protection for your business.",
        },
        {
            id: 4,
            icon: "icon1.svg",
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
                <div className="grid grid-cols-1 place-items-center md:grid-cols-4 mx-6 gap-4 relative">
                    {items.map((item) => (
                        <motion.div
                            key={item.id}
                            layoutId={`card-${item.id}`}
                            onClick={() => setSelectedId(item.id)}
                            className="w-[150px] h-[150px] rounded-full drop-shadow-lg bg-gradient-to-t from-sky-400 to-sky-600 flex items-center justify-center cursor-pointer relative"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ borderRadius: "0" }}
                            transition={{ duration: 0.7 }}
                        >
                            <img src={item.icon} alt="Icon" />
                        </motion.div>
                    ))}

                    <AnimatePresence>
                        {selectedId && (
                            <motion.div
                                layoutId={`card-${selectedId}`}
                                className="absolute z-50 bg-gradient-to-t from-sky-400 to-sky-600 rounded-lg drop-shadow-lg p-6"
                                style={{
                                    top: `${Math.floor((selectedId - 1) / 4) * 200}px`, // Adjust for grid rows
                                    left: `${((selectedId - 1) % 4) * 200}px`, // Adjust for grid columns
                                    width: "500px",
                                    height: "300px",
                                }}
                                onClick={() => setSelectedId(null)}
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.5 }}
                            >
                                <div className="flex flex-col justify-center items-center space-y-4 text-center">
                                    <img
                                        src={items.find((item) => item.id === selectedId)?.icon}
                                        alt="Icon"
                                        className="w-16 h-16"
                                    />
                                    <h1 className="text-white text-2xl font-nunito font-bold">
                                        {items.find((item) => item.id === selectedId)?.title}
                                    </h1>
                                    <p className="text-white text-base">
                                        {items.find((item) => item.id === selectedId)?.description}
                                    </p>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
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
