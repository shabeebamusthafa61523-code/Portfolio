import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Hero = () => {
  const sectionRef = useRef(null);

  // 1. Scroll-driven animations (Parallax & Fade out on scroll)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.75], [1, 0.95]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -30]);

  // 2. Dynamic Rotating Roles
  const roles = ["Full-Stack Developer", "MERN Architect", "UI/UX Specialist"];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [roles.length]);

  // 3. 3D Tilt Motion for Image Card
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 200, damping: 18 });
  const mouseYSpring = useSpring(y, { stiffness: 200, damping: 18 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleCardMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleCardMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // 4. Magnetic CTA Button Motion
  const btnX = useMotionValue(0);
  const btnY = useMotionValue(0);
  const btnXSpring = useSpring(btnX, { stiffness: 250, damping: 15 });
  const btnYSpring = useSpring(btnY, { stiffness: 250, damping: 15 });

  const handleBtnMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    btnX.set((e.clientX - centerX) * 0.3);
    btnY.set((e.clientY - centerY) * 0.3);
  };

  const handleBtnMouseLeave = () => {
    btnX.set(0);
    btnY.set(0);
  };

  // Framer Motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25, filter: "blur(6px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const words = [
    { text: "Crafting", gradient: false },
    { text: "Scalable", gradient: true },
    { text: "Digital", gradient: false },
    { text: "Architecture.", gradient: false },
  ];

  return (
    <section 
      ref={sectionRef} 
      className="relative min-h-screen flex items-center justify-center px-6 lg:px-12 py-20 bg-[#050505] overflow-hidden"
    >
      {/* Animated Ambient Background Pulse Glow */}
      <motion.div 
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.12, 0.05],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-tr from-blue-500 via-indigo-500 to-purple-500 rounded-full blur-[160px] pointer-events-none z-0"
      />

      {/* Main Container with Scroll-Driven Fade & Scale */}
      <motion.div 
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="max-w-6xl mx-auto w-full z-10"
      >
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
        >
          
          {/* LEFT SIDE: Narrative & Text (7 Cols) */}
          <motion.div style={{ y: textY }} className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Status Pill with Rotating Text */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md text-xs font-mono text-gray-400">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-white font-medium">Shabeeba Musthafa</span>
                <span className="text-gray-600">•</span>
                
                {/* Animated Text Switcher */}
                <div className="h-4 overflow-hidden relative min-w-[140px] flex items-center">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={roles[roleIndex]}
                      initial={{ y: 12, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -12, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="absolute text-blue-400 font-mono text-xs font-medium"
                    >
                      {roles[roleIndex]}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.08] flex flex-wrap gap-x-3.5 gap-y-1"
            >
              {words.map((word, idx) => (
                <span
                  key={idx}
                  className={word.gradient ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400" : ""}
                >
                  {word.text}
                </span>
              ))}
            </motion.h1>

            {/* Concise Bio */}
            <motion.p 
              variants={itemVariants}
              className="text-gray-400 text-base sm:text-lg max-w-xl leading-relaxed font-light"
            >
              Specializing in the <span className="text-white font-medium">MERN stack</span> to build high-performance web applications. Architect of solutions like <span className="text-white font-medium">Pacha.Cart</span> and <span className="text-white font-medium">Le Tohfa Resort</span>.
            </motion.p>

            {/* Magnetic Action Row */}
            <motion.div variants={itemVariants} className="flex items-center gap-5 pt-2">
              <motion.a 
                href="#work" 
                style={{ x: btnXSpring, y: btnYSpring }}
                onMouseMove={handleBtnMouseMove}
                onMouseLeave={handleBtnMouseLeave}
                className="group relative inline-flex items-center gap-2 px-7 py-3.5 bg-white text-black font-semibold rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-300 active:scale-95 text-sm shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]"
              >
                <span>View Work</span>
                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </motion.a>

              <a 
                href="#contact" 
                className="px-6 py-3.5 text-gray-400 hover:text-white font-medium text-sm transition-colors duration-300 hover:bg-white/[0.04] rounded-full"
              >
                Contact Me
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE: 3D Parallax & Tilt Image Card (5 Cols) */}
          <motion.div 
            style={{ y: imageY }}
            variants={itemVariants}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            {/* 3D Tilt Container */}
            <motion.div 
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
              className="relative w-full max-w-[350px] sm:max-w-[380px] group cursor-pointer"
            >
              {/* Soft Ambient Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-indigo-500/20 rounded-[2rem] blur-xl opacity-60 group-hover:opacity-100 transition duration-700" />

              {/* Main Photo Card Frame */}
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 bg-neutral-900 shadow-2xl transition-all duration-300 group-hover:border-white/20">
                <img 
                  src="/hero-profile.jpg" 
                  alt="Shabeeba Musthafa" 
                  className="w-full h-full object-cover object-center filter brightness-[0.96] contrast-[1.02] transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Bottom Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/70 via-transparent to-transparent opacity-60 pointer-events-none" />
              </div>
            </motion.div>
          </motion.div>

        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;