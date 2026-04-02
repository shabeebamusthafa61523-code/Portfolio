import React from 'react';
import { motion } from 'framer-motion';

const BentoGrid = () => {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="text-3xl font-bold mb-12"
      >
        The <span className="text-gray-500 font-light">Builder</span>
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
        {/* Main Bio Card */}
        <motion.div 
          className="md:col-span-2 row-span-1 bg-[#0A0A0A] border border-white/5 p-10 rounded-[2.5rem] flex flex-col justify-center relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-transparent opacity-50" />
          <h3 className="text-3xl font-bold mb-6">Building from 2025</h3>
          <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
            Since August 2025, I have been architecting scalable solutions using the **MERN stack**. 
            I specialize in turning complex logic into premium, aesthetic interfaces, 
            ensuring every project like <span className="text-white">Pacha.Cart</span> feels high-performance.
          </p>
        </motion.div>

        {/* Tech Stack Card - Visual Version */}
       <motion.div 
  className="row-span-2 bg-[#0A0A0A] border border-white/5 p-8 rounded-[2.5rem] flex flex-col relative overflow-hidden"
  whileHover={{ scale: 1.01 }}
>
  <h3 className="text-xl font-bold mb-8 text-white">Tech Stack</h3>
  
  {/* 1. Core Skills (Progress Bars) */}
  <div className="space-y-6 flex-grow">
    {[
      { name: "React.js", level: "90%" },
      { name: "Node.js & Express", level: "85%" },
      { name: "MongoDB", level: "85%" },
      { name: "Tailwind CSS", level: "95%" },
      { name: "Cloudinary / Razorpay", level: "80%" }
    ].map((tech) => (
      <div key={tech.name}>
        <div className="flex justify-between text-[11px] font-mono mb-2 uppercase tracking-wider">
          <span className="text-gray-400">{tech.name}</span>
          <span className="text-blue-500">{tech.level}</span>
        </div>
        <div className="h-[2px] w-full bg-white/5 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: tech.level }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]" 
          />
        </div>
      </div>
    ))}
  </div>

  {/* 2. Professional Tooling (New Section) */}
  <div className="mt-10 pt-8 border-t border-white/5">
    <span className="text-[10px] font-mono text-gray-600 uppercase tracking-[0.3em] mb-4 block">
      Professional Workflow
    </span>
    <div className="flex flex-wrap gap-2">
      {["Git", "Postman", "Vercel", "Netlify", "Framer Motion"].map((tool) => (
        <span 
          key={tool} 
          className="px-3 py-1 text-[10px] font-medium text-gray-400 bg-white/[0.03] border border-white/5 rounded-md hover:border-blue-500/30 hover:text-white transition-all duration-300"
        >
          {tool}
        </span>
      ))}
    </div>
  </div>
          
          {/* Subtle Background Icon/Shape */}
          <div className="absolute -bottom-10 -right-10 text-[12rem] font-bold text-white/[0.02] select-none">
            MERN
          </div>
        </motion.div>

        {/* Location/Status Card - Interactive */}
        <motion.div 
          className="col-span-1 row-span-1 bg-blue-600/5 border border-blue-500/10 p-8 rounded-[2.5rem] flex flex-col items-center justify-center text-center group"
          whileHover={{ backgroundColor: "rgba(37, 99, 235, 0.1)" }}
        >
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse mb-4 shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
          <p className="text-white font-medium mb-1">Available for new projects</p>
          <p className="text-blue-400/60 text-xs font-mono uppercase tracking-widest">Based in India</p>
        </motion.div>
        {/* Education Card - Minimalist & Academic */}
<motion.div 
  className="col-span-1 row-span-1 bg-[#0A0A0A] border border-white/5 p-8 rounded-[2.5rem] flex flex-col justify-center"
  whileHover={{ y: -5 }}
>
  <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-4">
    Academic Foundation
  </span>
  <div className="space-y-4">
    <div>
      <h4 className="text-sm font-bold text-white">MSc Computer Science</h4>
      <p className="text-xs text-gray-500 italic">Bharathidasan University • In Progress</p>
    </div>
    <div className="w-full h-[1px] bg-white/5" />
    <div>
      <h4 className="text-sm font-bold text-gray-300 text-white/80">BSc Degree</h4>
      <p className="text-xs text-gray-500">Calicut University</p>
    </div>
  </div>
</motion.div>
      </div>
    </section>
  );
};

export default BentoGrid;