import React from 'react'; // Add this line
import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Component Imports
import CustomCursor from './components/animations/CustomCursor';
import Navbar from './components/sections/Navbar';
import Hero from './components/sections/Hero';
import BentoGrid from './components/sections/BentoGrid';
import ProjectGrid from './components/sections/ProjectGrid';
import Footer from './components/sections/Footer';

export default function Home() {
  // Since we don't have <Head>, we set the title using useEffect
  useEffect(() => {
    document.title = "Full-Stack Developer | MERN & UI/UX Specialist";
  }, []);

  return (
    <div className="bg-[#050505] min-h-screen text-white selection:bg-blue-500/30">
      {/* 1. Global Interactivity */}
      <CustomCursor />
      
      {/* 2. Navigation */}
      <Navbar />

      <AnimatePresence mode="wait">
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative overflow-hidden"
        >
          {/* 3. Hero Section */}
          <section className="relative z-10">
            <Hero />
          </section>

          {/* 4. Bento Grid */}
          <section className="relative z-10 bg-[#080808]">
             <BentoGrid />
          </section>

          {/* 5. Projects */}
          <section className="relative z-10">
            <ProjectGrid />
          </section>

          {/* 6. Footer */}
          <section className="relative z-10 bg-black">
            <Footer />
          </section>

          {/* Ambient Glows */}
          <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
            <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[150px]" />
            <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[150px]" />
          </div>
        </motion.main>
      </AnimatePresence>
    </div>
  );
}