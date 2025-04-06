"use client";

import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-black text-gray-400 py-12 px-6 border-t border-[#027922]/20">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10">

                {/* Left Section */}
                <div className="space-y-4">

                    <h3 className="text-white text-2xl font-bold">Aaronn</h3>
                    <p className="text-sm max-w-md">
                        I'm a New York-based visual designer focused on branding and visual identity. Let's create impactful digital experiences together.
                    </p>
                    <div className="flex gap-4 pt-2">
                        <a href="#" className="hover:text-[#027922] transition">
                            <Facebook />
                        </a>
                        <a href="#" className="hover:text-[#027922] transition">
                            <Instagram />
                        </a>
                        <a href="#" className="hover:text-[#027922] transition">
                            <Twitter />
                        </a>
                        <a href="#" className="hover:text-[#027922] transition">
                            <Linkedin />
                        </a>
                    </div>
                </div>

                {/* Links Section */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-sm">
                    <div className="space-y-2">
                        <h4 className="text-white font-semibold">Navigation</h4>
                        <ul className="space-y-1">
                            <li><a href="#" className="hover:text-[#027922]">Home</a></li>
                            <li><a href="#" className="hover:text-[#027922]">About</a></li>
                            <li><a href="#" className="hover:text-[#027922]">Projects</a></li>
                        </ul>
                    </div>

                    <div className="space-y-2">
                        <h4 className="text-white font-semibold">Services</h4>
                        <ul className="space-y-1">
                            <li><a href="#" className="hover:text-[#027922]">Branding</a></li>
                            <li><a href="#" className="hover:text-[#027922]">UI/UX Design</a></li>
                            <li><a href="#" className="hover:text-[#027922]">Web Design</a></li>
                        </ul>
                    </div>

                    <div className="space-y-2">
                        <h4 className="text-white font-semibold">Contact</h4>
                        <ul className="space-y-1">
                            <li>Email: <a href="mailto:hello@aaronn.com" className="hover:text-[#027922]">hello@aaronn.com</a></li>
                            <li>Phone: <a href="tel:+123456789" className="hover:text-[#027922]">+1 234 567 89</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Note */}
            <div className="mt-10 text-center text-xs text-gray-500 border-t border-[#027922]/10 pt-6">
                &copy; {new Date().getFullYear()} Aaronn. All rights reserved.
            </div>
        </footer>
    );
}
