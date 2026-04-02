import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Background Decorative Text (Subtle) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none">
        <h2 className="text-[20vw] font-bold text-white/[0.02] leading-none uppercase">
          Builder
        </h2>
      </div>

      <div className="max-w-7xl mx-auto w-full z-10">
        <div className="flex flex-col items-center text-center">
          
          {/* 1. Name Intro */}
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-blue-500 font-mono text-xs uppercase tracking-[0.4em] mb-4 block mt-20"
          >
            Hi, I am Shabeeba Musthafa
          </motion.span>

          {/* 2. Animated Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400/80 text-[10px] uppercase tracking-widest mb-8 flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
            Available for New Projects
          </motion.div>

          {/* 3. Main Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.9]"
          >
            Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500">Scalable</span> <br />
            Digital Architecture.
          </motion.h1>

          {/* 4. Subtext */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-gray-400 text-base md:text-lg max-w-xl mb-12 leading-relaxed font-light"
          >
            Full-Stack Developer specializing in the <span className="text-white">MERN stack</span>. 
            I architect high-performance solutions like <span className="text-white">Pacha.Cart</span> and 
            curate premium experiences like <span className="text-white font-medium">Le Tohfa Resort</span>.
          </motion.p>

          {/* 5. Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="#work" className="px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300 active:scale-95 text-sm">
              View My Work
            </a>
            <a href="#contact" className="px-10 py-4 bg-transparent border border-white/10 hover:border-white/40 text-white font-bold rounded-full transition-all duration-300 active:scale-95 text-sm">
              Contact Me
            </a>
          </motion.div>
        </div>
      </div>

      {/* 6. Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-gray-600 font-mono">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-blue-500 to-transparent" />
      </motion.div>
    </div>
  );
};

export default Hero;