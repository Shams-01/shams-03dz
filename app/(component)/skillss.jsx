"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

// Skills Data
const skills = [
  { title: "HTML,Css", level: 90 },
  { title: "JavaScript , Java", level: 85 },
  { title: "React.js , Next.js", level: 75 },
  { title: "PHP,MySQL", level: 80 },
  { title: "Node,MongoDB", level: 70 },
  { title: "Git", level: 88 },
];

// Animated Counter Component
function AnimatedCounter({ target }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let current = 0;
      const duration = 1000;
      const increment = target / (duration / 16);

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, 16);
    }
  }, [isInView, target]);

  return (
    <span ref={ref} className="text-5xl font-bold text-[#027922]">
      {count}+
    </span>
  );
}

// Main Portfolio Component
export default function FramerPortfolio() {
  return (
    <main className="min-h-screen bg-black text-white ">
      {/* Skills Section */}
      <section className="px-6 bg-black">
        <div className="max-w-5xl mx-auto">
          <h3 className="pt-10 text-4xl md:text-5xl font-bold leading-tight text-center text-white">
            My Core Skills
          </h3>
          {/* Intro Section */}
          <section className="px-6 pt-6 mb-8">
            <div className="max-w-3xl mx-auto text-center">
              <motion.p
                className=" text-lg text-gray-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                With a strong foundation in modern programming languages and
                frameworks, I specialize in developing clean, efficient, and
                scalable code — creating seamless digital solutions that blend
                functionality with user-focused design.
              </motion.p>
            </div>
          </section>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="p-6 border rounded-2xl shadow-xl bg-[#111111] border-[#027922]/20 hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <h4 className="mb-3 text-lg font-semibold text-white">
                  {skill.title}
                </h4>
                <div className="w-full h-2 bg-gray-700 rounded-full">
                  <motion.div
                    className="h-2 bg-[#027922] rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
