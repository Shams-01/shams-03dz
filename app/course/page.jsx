"use client";
import { motion } from "framer-motion";
import {useEffect, useRef, useState} from "react";

import emailjs from "@emailjs/browser";
import {toast, ToastContainer} from "react-toastify";
export default function ComingSoon() {

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


  const [launchDate] = useState(new Date("2025-06-01T00:00:00"));
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const diff = launchDate.getTime() - now.getTime();
      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const m = Math.floor((diff / 1000 / 60) % 60);
      const s = Math.floor((diff / 1000) % 60);
      setTimeLeft({ days: d, hours: h, mins: m, secs: s });
    }, 1000);

    return () => clearInterval(timer);
  }, [launchDate]);

  return (
    <div className="h-screen w-full flex items-center justify-center bg-gradient-to-br from-black to-gray-900 text-white relative overflow-hidden">
      {/* ✨ Background Wave */}
      <ToastContainer/>
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg
          className="w-[200%] h-full animate-wave-motion opacity-10"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#027922"
            fillOpacity="0.2"
            d="M0,128L60,138.7C120,149,240,171,360,160C480,149,600,107,720,106.7C840,107,960,149,1080,149.3C1200,149,1320,107,1380,85.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
        </svg>
      </div>

      {/* ✨ Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 text-center p-6"
      >
        <h1 className="text-4xl sm:text-6xl font-bold mb-4 text-[#027922]">
          Coming Soon
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 mb-6">
          We’re working hard on something amazing. Stay tuned!
        </p>

        {/* Countdown */}
        <div className="flex gap-6 justify-center text-center mt-6 text-xl">
          {["days", "hours", "mins", "secs"].map((key, index) => (
            <div key={index}>
              <div className="text-3xl font-bold">{timeLeft[key]}</div>
              <div className="text-sm text-gray-400 uppercase">{key}</div>
            </div>
          ))}
        </div>

        {/* Email Input (Optional) */}
        <div className="mt-8">
          <form ref={form} onSubmit={sendEmail}>
          <input
            type="email"
            placeholder="Notify me"
            required
            className="px-4 py-2 rounded-l-md bg-white text-black"
          />
          <button type={"submit"} className="px-4 py-2 bg-[#027922] hover:bg-green-700 transition rounded-r-md">
            Notify Me
          </button>
              </form>
        </div>
      </motion.div>

      {/* 🌊 Wave Animation Style */}
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
    </div>
  );
}
