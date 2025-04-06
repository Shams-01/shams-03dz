"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ProjectDetail() {
    return (
        <section className="bg-black text-white px-6 py-20 md:px-10">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <h1 className="text-4xl md:text-5xl font-bold">Project Detail</h1>
                <p className="text-gray-400 mt-2 text-sm">Showcasing full project breakdown</p>
                <div className="w-24 h-1 bg-[#027922] mx-auto mt-4" />
            </motion.div>

            {/* Feature Image */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="rounded-2xl overflow-hidden mb-12 max-w-4xl mx-auto"
            >
                <Image
                    src="/img/feature-project.webp"
                    alt="Feature Project"
                    width={1200}
                    height={700}
                    className="w-full h-auto object-cover"
                />
            </motion.div>

            {/* Project Story */}
            <div className="max-w-5xl mx-auto mb-20">
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">Project Story</h2>
                <p className="text-gray-400 text-md leading-relaxed">
                    This project started as a simple concept to showcase futuristic interface designs for robotics and AI arms.
                    After many iterations and inspiration from digital sculptures, the final form features a hybrid
                    of 3D art and modern UI layering.
                </p>
            </div>

            {/* Day One Images */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-10"
            >
                <div className="rounded-xl overflow-hidden">
                    <Image
                        src="/img/detail-1.webp"
                        alt="Day One Image 1"
                        width={600}
                        height={400}
                        className="w-full h-auto object-cover"
                    />
                </div>
                <div className="rounded-xl overflow-hidden">
                    <Image
                        src="/img/detail-2.webp"
                        alt="Day One Image 2"
                        width={600}
                        height={400}
                        className="w-full h-auto object-cover"
                    />
                </div>
            </motion.div>

            {/* Day One Description */}
            <div className="max-w-5xl mx-auto mb-20">
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">Day One</h2>
                <p className="text-gray-400 text-md leading-relaxed">
                    On Day One, we experimented with forms and light. The skeleton imagery merged with
                    abstract landscapes represents the birth of the digital soul. This direction shaped the project's tone.
                </p>
            </div>

            {/* Navigation (Prev / Next) */}
            <div className="flex justify-between text-sm text-gray-500 border-t border-gray-800 pt-6 max-w-5xl mx-auto">
                <span className="hover:text-[#027922] transition duration-300 cursor-pointer">← Previous Project</span>
                <span className="hover:text-[#027922] transition duration-300 cursor-pointer">Next Project →</span>
            </div>

            {/* Other Projects Section */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="mt-24"
            >
                <h3 className="text-2xl font-bold text-center mb-10">Other Projects</h3>
                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {["Project 1", "Project 2", "Project 3"].map((title, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.03 }}
                            className="rounded-xl overflow-hidden bg-[#111] border border-[#027922]/30 hover:shadow-lg transition duration-300"
                        >
                            <Image
                                src={`/img/other-${index + 1}.webp`}
                                alt={title}
                                width={400}
                                height={500}
                                className="object-cover w-full h-72"
                            />
                            <div className="p-4 text-center text-sm text-white">{title}</div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
