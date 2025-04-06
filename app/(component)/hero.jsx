"use client";
import { useEffect, useState } from "react";
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";
import { motion } from "framer-motion";

function Hero() {
    const titles = ["web developer", "software developer", "dev designer", "front-end developer"];
    const [index, setIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        const currentTitle = titles[index];

        if (charIndex < currentTitle.length) {
            const timeout = setTimeout(() => {
                setDisplayText((prev) => prev + currentTitle[charIndex]);
                setCharIndex((prev) => prev + 1);
            }, 100);
            return () => clearTimeout(timeout);
        } else {
            const pause = setTimeout(() => {
                setDisplayText("");
                setCharIndex(0);
                setIndex((prev) => (prev + 1) % titles.length);
            }, 2000);
            return () => clearTimeout(pause);
        }
    }, [charIndex, index, titles]);

    return (
        <section className="w-full h-screen relative overflow-hidden bg-black text-white">
            {/* 🌊 Background Wave */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <svg
                    className="w-[200%] h-full animate-wave-motion"
                    viewBox="0 0 1440 320"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill="#027922"
                        fillOpacity="0.1"
                        d="M0,64L60,80C120,96,240,128,360,144C480,160,600,160,720,154.7C840,149,960,139,1080,117.3C1200,96,1320,64,1380,48L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
                    ></path>
                </svg>
            </div>

            {/* 🌟 Foreground Content */}
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6 mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-3xl sm:text-5xl font-bold leading-snug"
                >
                    Md Shams Raza is a{" "}
                    <span className="text-[#027922]">
                        {displayText}
                        <span className="animate-pulse">|</span>
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="text-md sm:text-lg text-gray-400 mt-4"
                >
                    He crafts responsive websites where technologies meet creativity.
                </motion.p>

                <motion.button
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.9, duration: 0.4 }}
                    className="mt-6 px-6 py-2 border border-[#027922] text-white rounded-md hover:bg-[#027922] transition"
                >
                    Contact me!!
                </motion.button>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                    className="mt-6 flex gap-6 justify-center"
                >
                    <a href="https://github.com/mdshamsraza" target="_blank" rel="noopener noreferrer">
                        <Github className="w-6 h-6 text-white hover:text-[#027922]" />
                    </a>
                    <a href="https://linkedin.com/in/mdshamsraza" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-6 h-6 text-white hover:text-[#027922]" />
                    </a>
                    <a href="https://twitter.com/mdshamsraza" target="_blank" rel="noopener noreferrer">
                        <Twitter className="w-6 h-6 text-white hover:text-[#027922]" />
                    </a>
                    <a href="https://instagram.com/mdshamsraza" target="_blank" rel="noopener noreferrer">
                        <Instagram className="w-6 h-6 text-white hover:text-[#027922]" />
                    </a>
                </motion.div>
            </div>

            {/* 🌊 Tailwind Keyframes */}
            <style jsx>{`
                @keyframes wave-motion {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
                .animate-wave-motion {
                    animation: wave-motion 10s linear infinite;
                }
            `}</style>
        </section>
    );
}

export default Hero;
