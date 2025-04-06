"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const projects = [
    { id: 1, title: "Smart Student Portal", image: "/img/work1.webp", tag: "EduLink" },
    // { id: 2, title: "chartered professional account", image: "/img/work2.webp", tag: "TCPA " },
    { id: 3, title: "Fragments", image: "/img/work3.webp", tag: "ShopEase" },
    // { id: 4, title: "E-Commerce Website", image: "/img/work4.webp", tag: "wishingBasket" },
    { id: 5, title: "PortfolioX", image: "/img/work5.webp", tag: "Personal Portfolio with Admin Panel" },
    // { id: 6, title: "B2C Portal", image: "/img/b2c.png", tag: "Aircontrip" },
    // { id: 7, title: "Room Booking Portal", image: "/img/work7.webp", tag: "The Moon" },
    { id: 8, title: "Amazon Clone", image: "/img/amazon.png", tag: "Amazon" },
    // { id: 9, title: "B2B Portal", image: "/img/b2b.png", tag: "aircontrip" },
];

export default function MyWorks() {
    const [selectedId, setSelectedId] = useState(null);

    const selectedProject = projects.find((p) => p.id === selectedId);

    return (
        <section className="bg-gradient-to-br from-black to-gray-900 text-white py-20 px-4 sm:px-6 lg:px-10">
            <div className="text-center mb-14">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-bold"
                >
                    My works
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="text-gray-400 text-sm mt-2"
                >
                    Showcase Visual Mastery.
                </motion.p>
                <div className="w-20 h-1 bg-[#027922] mx-auto mt-4" />
            </div>

            {/* Project Grid */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                variants={{
                    hidden: {},
                    visible: {
                        transition: {
                            staggerChildren: 0.1,
                        },
                    },
                }}
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
            >
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        variants={{
                            hidden: { opacity: 0, scale: 0.95 },
                            visible: { opacity: 1, scale: 1 },
                        }}
                        className="bg-[#1a1a1a] rounded-xl overflow-hidden border border-[#027922]/30 hover:shadow-[#027922]/30 hover:shadow-lg transition duration-300 cursor-pointer"
                        onClick={() => setSelectedId(project.id)}
                    >
                        <div className="w-full h-56 relative" id={`project-${project.id}`}>
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="p-4 text-center">
                            <h3 className="text-lg font-semibold">{project.title}</h3>
                            <p className="text-gray-400 text-sm">{project.tag}</p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* Modal */}
            <AnimatePresence>
                {selectedId && (
                    <motion.div
                        className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedId(null)}
                    >
                        <motion.div
                            className="bg-[#1a1a1a] border border-[#027922] rounded-xl p-6 max-w-xl w-full relative"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedId(null)}
                                className="absolute top-2 right-2 text-gray-400 hover:text-white"
                            >
                                ✕
                            </button>
                            <h2 className="text-2xl font-bold mb-4">{selectedProject?.title}</h2>
                            <Image
                                src={selectedProject?.image || ""}
                                alt={selectedProject?.title || ""}
                                width={600}
                                height={400}
                                className="rounded-xl mb-4 object-cover"
                            />
                            <p className="text-gray-400">{selectedProject?.tag}</p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
