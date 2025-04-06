"use client";
import { motion } from "framer-motion";
import {useRef} from "react";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import {toast, ToastContainer} from "react-toastify";

export default function ContactPage() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm("service_elzkiks", "template_w9g2o97", form.current, "q9pQwzbn9CcqrTbaj")
            .then(
                (res) => {
                    toast.success("Send successfully ", {
                        position: "bottom-right",
                    });
                    console.log(res);
                },
                (error) => {
                    toast.error("Error in sendEmail ", {
                        position: "bottom-right",
                    });
                    console.log(error);
                }
            );
    };
    return (
        <section className="bg-gradient-to-br from-black to-gray-900 text-white px-6 py-20 md:px-10">
            {/* Header */}
            <ToastContainer/>
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
                    <form  ref={form} onSubmit={sendEmail} className="space-y-6">
                        <input
                            type="text"
                            placeholder="Name"
                            name="name"
                            className="w-full bg-transparent border-b border-gray-600 py-2 placeholder-gray-400 focus:outline-none focus:border-[#027922]"
                            required
                        />
                        <input
                            type="email"
                            placeholder="email"
                            name="email"
                            className="w-full bg-transparent border-b border-gray-600 py-2 placeholder-gray-400 focus:outline-none focus:border-[#027922]"
                            required
                        />
                        <input
                            type="text"
                            placeholder="Subject"
                            name=" subject"
                            className="w-full bg-transparent border-b border-gray-600 py-2 placeholder-gray-400 focus:outline-none focus:border-[#027922]"
                            required
                        />
                        <textarea
                            placeholder="Message"
                            rows={4}
                            name="message"
                            className="w-full bg-transparent border-b border-gray-600 py-2 placeholder-gray-400 focus:outline-none focus:border-[#027922]"
                            required
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
                    <div
                        className="w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden border border-[#027922]/30">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.113518424429!2d81.00119607658888!3d26.958970609657246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399959ea1636becf%3A0xbd102a3d103ffce9!2sIntegral%20University%20Boys%20Hostel%20-%20Hall%201!5e0!3m2!1sen!2sin!4v1743940092885!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{border: 0}}
                            allowFullScreen={false}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                    <div className="text-sm text-gray-400 space-y-1 text-center lg:text-left">
                        <p>📍 Integral University, block (A)</p>
                        <p  className="hover:text-[#027922]"> 📧 shams.raza@neuralnexuslab.com</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
