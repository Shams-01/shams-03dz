"use client";
import Image from "next/image";
import "../about-me/aboutme.css";
import { motion } from "framer-motion";

function AboutMeSection() {
    return (
        <section className="w-full bg-black text-white py-20 relative overflow-hidden">
            {/* ✅ Wavy Background Animation */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute bottom-0 left-0 w-[200%] h-64 flex overflow-hidden z-0">
                    <svg
                        className="w-[100%] h-full animate-wave-motion"
                        viewBox="0 0 1440 320"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                    >
                        <path
                            fill="#027922"
                            fillOpacity="0.12"
                            d="M0,224L80,208C160,192,320,160,480,160C640,160,800,192,960,213.3C1120,235,1280,245,1360,250.7L1440,256L1440,320L0,320Z"
                        />
                    </svg>
                </div>
            </div>

            {/* 🌟 Foreground Content */}
            <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center gap-12 z-10 relative">
                {/* 🧠 Text Content */}
                <motion.div
                    className="flex-1 space-y-6 text-center md:text-left"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                        Let’s get to know <br /> me a little closer
                    </h2>
                    <p className="text-gray-400 text-base leading-relaxed">
                        {/* Replace this with your actual bio */}
                        I’m Md Shams Raza, a passionate front-end developer and UI designer who blends clean code with striking visuals to craft engaging digital experiences.
                    </p>
                    <button className="bg-[#027922] hover:bg-[#02631b] text-white px-6 py-3 rounded-full transition duration-300">
                        Discover More About Me
                    </button>
                </motion.div>

                {/* 👤 Image Section */}
                <motion.div
                    className="relative flex-1 max-w-sm w-full"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="overflow-hidden rounded-3xl shadow-lg shadow-[#027922]/10">
                        <Image
                            src="/img/about.webp"
                            width={500}
                            height={500}
                            alt="Profile"
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    {/* Floating Decorators */}
                    <motion.span
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6, duration: 0.4 }}
                        className="absolute top-0 right-0 w-10 h-4 border-2 border-[#027922] rounded-full"
                    ></motion.span>
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.4 }}
                        className="absolute bottom-1/2 left-[-20px] w-4 h-16 border-2 border-[#027922] rounded-full"
                    ></motion.span>
                </motion.div>
            </div>

            {/* 🌀 Tailwind Keyframe for Background */}
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
                    animation: wave-motion 12s linear infinite;
                }
            `}</style>
        </section>
    );
}

export default AboutMeSection;
