import React from 'react';
import { motion } from 'framer-motion';

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative w-12 h-12">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Top Right Curve (Blue) */}
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            d="M50 20C70 20 85 35 85 55C85 75 70 85 50 85"
            stroke="#1d4ed8" /* Dark Blue */
            strokeWidth="3"
            strokeLinecap="round"
          />
          
          {/* Left Side Curve (Yellow to Red) */}
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.2, ease: "easeInOut" }}
            d="M50 20C30 20 15 35 15 55C15 75 30 85 50 85"
            stroke="url(#bulbGradientLeft)"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* Bottom Bases (Rectangles in the image) */}
          <motion.rect
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            x="35" y="88" width="30" height="4" rx="2"
            fill="url(#baseGradient)"
          />
          <motion.rect
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            x="38" y="94" width="24" height="3" rx="1.5"
            fill="url(#baseGradient)"
          />
          
          <defs>
            <linearGradient id="bulbGradientLeft" x1="15" y1="20" x2="50" y2="85" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#fbbf24" /> {/* Yellow */}
              <stop offset="50%" stopColor="#f97316" /> {/* Orange */}
              <stop offset="100%" stopColor="#ef4444" /> {/* Red */}
            </linearGradient>
            <linearGradient id="baseGradient" x1="35" y1="88" x2="65" y2="88" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#ef4444" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#000" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="flex flex-col -ml-1">
        <span className="text-white font-display font-light text-2xl tracking-tighter leading-none">
          idea
        </span>
        <span className="text-[10px] text-orange-500 font-bold uppercase tracking-[0.3em] leading-none mt-1 pl-0.5">
          brew
        </span>
      </div>
    </div>
  );
}
