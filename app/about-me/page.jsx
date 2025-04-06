"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPage() {
    return (
        <section className="bg-black text-white py-20 px-4 sm:px-6 lg:px-10">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto text-center mb-16"
            >
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">About Me</h1>
                <p className="text-gray-400 text-sm sm:text-base mt-2">Little Brief About Myself</p>
                <div className="w-20 sm:w-24 h-1 bg-[#027922] mx-auto mt-4"></div>
            </motion.div>

            {/* Mission Section */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
                {/* Left - Text */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug">
                        My mission is to make design easier.
                    </h2>
                    <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
                        Create custom Designs with AARONN that converts more visitors than any website.
                        With lots of unique design ideas, you can easily select a logo without hassle.
                        Create custom listings and builds with AARONN that converts more visitors than
                        any website. With lots of reviews, you can easily build a logo without problem.
                    </p>
                </motion.div>

                {/* Right - Images */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                >
                    <div className="rounded-2xl overflow-hidden border border-[#027922]/30 w-full sm:w-[250px]">
                        <Image
                            src="/img/about-1.webp"
                            alt="Team Member 1"
                            width={250}
                            height={300}
                            className="w-full h-auto object-cover grayscale hover:grayscale-0 transition duration-300"
                        />
                    </div>
                    <div className="rounded-2xl overflow-hidden border border-[#027922]/30 w-full sm:w-[250px]">
                        <Image
                            src="/img/about-2.webp"
                            alt="Team Member 2"
                            width={250}
                            height={300}
                            className="w-full h-auto object-cover grayscale hover:grayscale-0 transition duration-300"
                        />
                    </div>
                </motion.div>
            </div>

            {/* Social Links */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="text-center mt-20"
            >
                <p className="text-gray-400 text-sm mb-4">Follow me on:</p>
                <div className="flex flex-wrap justify-center gap-6 text-base sm:text-lg font-medium">
                    {["Dribbble", "Twitter", "Facebook", "Instagram"].map((social) => (
                        <a
                            key={social}
                            href="#"
                            className="text-gray-300 hover:text-[#027922] transition duration-300"
                        >
                            {social}
                        </a>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
