"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ContactPage() {
    return (
        <section className="bg-black text-white px-6 py-20 md:px-10">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-14"
            >
                <h1 className="text-4xl md:text-5xl font-bold">Contact Me</h1>
                <p className="text-gray-400 mt-2 text-sm">For Any Project, Knock Us</p>
                <div className="w-20 h-1 bg-[#027922] mx-auto mt-4" />
            </motion.div>

            {/* Contact Left + Right Section */}
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
                {/* Left: Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <h2 className="text-3xl font-semibold mb-6">Get in Touch With Us</h2>
                    <form className="space-y-6">
                        <input
                            type="text"
                            placeholder="Name"
                            className="w-full bg-transparent border-b border-gray-600 py-2 placeholder-gray-400 focus:outline-none focus:border-[#027922]"
                        />
                        <input
                            type="text"
                            placeholder="Subject"
                            className="w-full bg-transparent border-b border-gray-600 py-2 placeholder-gray-400 focus:outline-none focus:border-[#027922]"
                        />
                        <textarea
                            placeholder="Message"
                            rows={4}
                            className="w-full bg-transparent border-b border-gray-600 py-2 placeholder-gray-400 focus:outline-none focus:border-[#027922]"
                        />
                        <button
                            type="submit"
                            className="bg-[#027922] hover:bg-[#035c1a] px-6 py-2 rounded-full text-white transition duration-300"
                        >
                            Send
                        </button>
                    </form>
                </motion.div>

                {/* Right: Map and Info */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="space-y-6"
                >
                    <div className="w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden border border-[#027922]/30">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.9122070525435!2d-122.0842496846912!3d37.421999979825994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb5c5af6f6e4b%3A0x93e94cc2b12bbbf2!2sGoogleplex!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={false}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>

                    <div className="text-sm text-gray-400 space-y-1 text-center lg:text-left">
                        <p>📍 Street Avenue 21, CA</p>
                        <p>📞 +91 6261234567</p>
                        <p>📧 <a href="mailto:info@aaronn.com" className="hover:text-[#027922]">info@aaronn.com</a></p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
