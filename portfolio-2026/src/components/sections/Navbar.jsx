import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100, x: "-50%" }}
      animate={{ y: 0, x: "-50%" }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="fixed top-6 left-1/2 z-50 flex items-center gap-8 px-8 py-4 bg-black/50 backdrop-blur-xl border border-white/5 rounded-full shadow-2xl"
    >
      {/* 1. Your Name / Brand Logo */}
      <div className="flex items-center gap-2 border-r border-white/10 pr-6">
        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
        <span className="text-white font-bold tracking-tighter text-base uppercase">
          Shabeeba.
        </span>
      </div>

      {/* 2. Navigation Links */}
      <div className="flex gap-8 text-[13px] font-medium text-gray-400">
        <a href="#work" className="hover:text-white transition-colors relative group">
          Work
          <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-blue-500 transition-all group-hover:w-full" />
        </a>
        <a href="#about" className="hover:text-white transition-colors relative group">
          Stack
          <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-blue-500 transition-all group-hover:w-full" />
        </a>
        <a href="#contact" className="hover:text-white transition-colors relative group">
          Contact
          <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-blue-500 transition-all group-hover:w-full" />
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;