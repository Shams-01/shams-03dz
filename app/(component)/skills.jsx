"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
    {
        name: "Minhad Rizwan",
        text: `Aaron was fantastic to work with from start to finish. We were looking for a simple, stand-out logo and he delivered...`,
    },
    {
        name: "Hamid Asraf",
        text: `Working with Aaron was incredibly smooth. His creative vision and attention to detail made a big difference.`,
    },
    {
        name: "Faizan Ahmad",
        text: `His designs were not only visually impressive but also very effective in communication.`,
    },
    {
        name: "Mehruddin Khan",
        text: `His designs were not only visually impressive but also very effective in communication.`,
    },
];

export default function TestimonialSlider() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % testimonials.length);
        }, 6000); // every 6 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="w-full bg-black text-white py-20 px-4">
            <div className="max-w-5xl mx-auto relative bg-[#111111] rounded-2xl p-10 md:p-14 border border-[#027922]/20 shadow-xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Testimonial</h2>
                <Quote className="absolute top-10 right-10 text-[#027922] opacity-30 w-16 h-16" />

                <AnimatePresence mode="wait">
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">
                            {testimonials[index].text}
                        </p>
                        <p className="font-semibold text-white">- {testimonials[index].name}</p>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}
