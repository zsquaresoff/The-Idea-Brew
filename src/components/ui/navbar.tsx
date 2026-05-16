import React from 'react';
import { motion } from 'framer-motion';

import { Logo } from './logo';

export function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl"
    >
      <div className="flex items-center justify-between px-8 py-4 rounded-2xl glass-panel shadow-2xl shadow-black/50">
        {/* Left: Logo */}
        <Logo />

        {/* Right: Links + CTA */}
        <div className="flex items-center">
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400 tracking-wide uppercase">
            <a href="#" className="hover:text-white transition-colors duration-300">Works</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Pricing</a>
            <a href="#" className="hover:text-white transition-colors duration-300">About</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Contact</a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
