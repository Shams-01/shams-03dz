"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
    {
        title: "Brand Journey Improvements",
        image: "/img/project1.webp",
        category: "UI/UX",
        client: "Figma",
        type: "Logo Design",
    },
    {
        title: "Brand Grouping",
        image: "/img/project2.webp",
        category: "Branding",
        client: "Sketch",
        type: "App Design",
    },
    {
        title: "NFT Glimpse",
        image: "/img/project3.webp",
        category: "3D Art",
        client: "Adobe",
        type: "AR Visual",
    },
    {
        title: "Brand Suggestions",
        image: "/img/project4.webp",
        category: "Concept",
        client: "Blender",
        type: "Mockup",
    },
];

export default function ProjectsHighlight() {
    return (
        <section className="w-full bg-black text-white pb-20 pt-5 px-6 md:px-10">
            <div className="max-w-6xl mx-auto text-center">
                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold mb-4"
                >
                    My Projects Highlight
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-gray-400 text-md mb-8"
                >
                    A glimpse into the work I’ve done and the clients I’ve collaborated with.
                </motion.p>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <Link
                        href="/work"
                        className="inline-block border border-[#027922] text-white px-6 py-2 rounded-full hover:bg-[#027922] transition duration-300"
                    >
                        Explore More
                    </Link>
                </motion.div>

                {/* Project Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            className="bg-[#1a1a1a] rounded-3xl overflow-hidden shadow-lg hover:shadow-[#027922]/50 transition duration-300"
                        >
                            <div className="w-full h-64 relative group">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-6 space-y-2 text-left">
                                <h3 className="text-xl font-semibold">{project.title}</h3>
                                <p className="text-sm text-gray-400">
                                    In which I worked with{" "}
                                    <span className="text-[#027922] font-medium">{project.client}</span> on{" "}
                                    <span className="italic">{project.type}</span> in{" "}
                                    <span>{project.category}</span>.
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
