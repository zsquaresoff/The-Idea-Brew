'use client'

import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight"
import { motion } from "framer-motion"
 
export function SplineSceneBasic() {
  return (
    <div className="w-full h-screen bg-[#030303] relative overflow-hidden flex items-center justify-center">
      {/* Cinematic Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-amber-500/20 rounded-full blur-[80px] pointer-events-none" />
      
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="rgba(255, 160, 60, 0.5)"
      />
      
      {/* 3D Scene Background */}
      <div className="absolute inset-0 z-0">
        <SplineScene 
          scene="https://prod.spline.design/ce2d4Ooh3VX03JtD/scene.splinecode"
          className="w-full h-full object-cover"
        />
        {/* Vignette overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#030303_100%)] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#030303] pointer-events-none" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse-glow" />
          <span className="text-xs font-semibold tracking-[0.2em] text-orange-200 uppercase">Welcome to Idea Brew.</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.4, ease: "easeOut" }}
          className="text-6xl md:text-8xl lg:text-9xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-b from-white via-white/90 to-white/20 tracking-tighter pb-4 text-glow-white"
        >
          Fresh Ideas, <br className="hidden md:block" /> Perfectly Crafted.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
          className="mt-6 text-lg md:text-xl text-neutral-300 max-w-2xl font-light leading-relaxed"
        >
          Make content that matter to you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-12 animate-float"
        >
          <div className="w-[1px] h-24 bg-gradient-to-b from-orange-500 to-transparent" />
        </motion.div>
      </div>
    </div>
  )
}
