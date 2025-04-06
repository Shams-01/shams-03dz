"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Menu } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "about-me", id: 0, url: "/about-me" },
        { name: "works", id: 1, url: "/work" },
        { name: "contacts", id: 2, url: "/contact" },
    ];

    return (
        <header className="relative z-50">
            {/* Fixed Top Nav */}
            <div className="fixed top-0 left-0 w-full bg-black/30 backdrop-blur-md text-white py-4 z-50">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <Link href="/">
                            <Image src="/img/logo.png" alt="logo" width={24} height={24} />
                        </Link>
                        <span className="font-semibold">CodeMS</span>
                    </div>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex">
                        <ul className="flex items-center gap-6">
                            {navLinks.map((link) => (
                                <li key={link.id}>
                                    <Link href={link.url} className="flex items-center group">
                                        <span className="text-[#027922] transition-transform duration-200 group-hover:scale-110">#</span>
                                        <span className="ml-1 capitalize transition-colors duration-200 group-hover:text-[#027922]">
                                            {link.name}
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Mobile Toggle */}
                    <div className="md:hidden">
                        <button
                            className="border px-2 py-1 rounded"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
            </div>

            {/* AnimatePresence for Sidebar + Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Overlay with fade-in */}
                        <motion.div
                            className="fixed inset-0 bg-black/50 z-40"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                        />

                        {/* Mobile Sidebar */}
                        <motion.div
                            className="fixed top-0 right-0 h-full w-64 bg-white text-black shadow-lg z-50"
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "tween", duration: 0.3 }}
                        >
                            <button
                                className="absolute top-4 right-4"
                                onClick={() => setIsOpen(false)}
                            >
                                <X />
                            </button>
                            <ul className="p-6 space-y-4 mt-16">
                                {navLinks.map((link) => (
                                    <li key={link.id}>
                                        <Link href={link.url} onClick={() => setIsOpen(false)}>
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
}

export default Header;
