import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { ArrowUpRight, RotateCw, GraduationCap, Code2, MapPin, Briefcase, Sparkles, Github, Linkedin, Mail, Copy, Check } from 'lucide-react';

const Hero = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [copied, setCopied] = useState(false);
  const email = "shabeebamusthafa61523@gmail.com";

  const handleCopyEmail = (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

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

          {/* RIGHT SIDE: 3D Parallax & Flippable Image Card (5 Cols) */}
          <motion.div 
            style={{ y: imageY }}
            variants={itemVariants}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            {/* 3D Perspective Outer Container */}
            <div 
              className="relative w-full max-w-[350px] sm:max-w-[385px] aspect-[4/5] cursor-pointer group select-none"
              style={{ perspective: "1200px" }}
              onMouseMove={!isFlipped ? handleCardMouseMove : undefined}
              onMouseLeave={!isFlipped ? handleCardMouseLeave : undefined}
              onClick={() => setIsFlipped(!isFlipped)}
            >
              {/* Subtle Ambient Radial Gradient Spotlight */}
              <div className="absolute -inset-6 bg-gradient-to-tr from-blue-600/25 via-indigo-500/20 to-purple-600/25 rounded-[3rem] blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0" />

              {/* 3D Mouse Tilt Wrapper */}
              <motion.div
                className="w-full h-full relative z-10"
                style={{
                  rotateX: isFlipped ? 0 : rotateX,
                  rotateY: isFlipped ? 0 : rotateY,
                  transformStyle: "preserve-3d",
                }}
              >
                {/* 3D Flip Card Container */}
                <motion.div 
                  className="relative w-full h-full rounded-3xl shadow-2xl"
                  initial={false}
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 180,
                    damping: 20,
                    mass: 0.8
                  }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* FRONT FACE: Photo */}
                  <div 
                    className="absolute inset-0 w-full h-full rounded-3xl overflow-hidden border border-white/10 bg-[#0a0b10] group-hover:border-blue-500/40 transition-colors duration-300"
                    style={{ 
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden" 
                    }}
                  >
                    <img 
                      src="/hero-profile.jpg" 
                      alt="Shabeeba Musthafa" 
                      className="w-full h-full object-cover object-center filter brightness-[0.96] contrast-[1.02] transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Bottom Vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/85 via-[#050505]/20 to-transparent pointer-events-none" />

                    {/* Front Prompt Badge - Minimal & Low Visibility */}
                    <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 text-[10px] font-mono text-gray-400/70 opacity-40 group-hover:opacity-90 transition-all flex items-center gap-1.5 pointer-events-none">
                      <RotateCw size={10} className="text-blue-400/80" />
                      <span>Flip</span>
                    </div>
                  </div>

                  {/* BACK FACE: Quick Details, GitHub Stats & Tactile Copy Button */}
                  <div 
                    className="absolute inset-0 w-full h-full rounded-3xl bg-[#0c0d12] border border-blue-500/40 p-5 sm:p-6 flex flex-col justify-between text-white shadow-2xl backdrop-blur-xl"
                    style={{ 
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                      WebkitTransform: "rotateY(180deg)"
                    }}
                  >
                    {/* Header: Title + Active Badge + Flip Back Icon */}
                    <div>
                      <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3">
                        <div>
                          <h3 className="text-lg font-bold text-white tracking-tight flex items-center gap-1.5">
                            Shabeeba Musthafa
                            <Sparkles size={15} className="text-blue-400" />
                          </h3>
                          <p className="text-[11px] font-mono text-blue-400 font-medium">Full-Stack MERN Architect</p>
                        </div>
                        
                        <div 
                          className="p-1.5 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                          title="Click to flip back"
                        >
                          <RotateCw size={13} className="text-blue-400" />
                        </div>
                      </div>
                    </div>

                    {/* GitHub Stats Widget Preview */}
                    <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-3 space-y-2 backdrop-blur-sm">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Github size={15} className="text-white" />
                          <span className="text-xs font-semibold text-gray-200 font-mono">GitHub Telemetry</span>
                        </div>
                        <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          Active Dev
                        </span>
                      </div>

                      {/* Stats Grid */}
                      <div className="grid grid-cols-3 gap-1.5 pt-0.5">
                        <div className="bg-black/50 rounded-xl p-2 text-center border border-white/5">
                          <span className="block text-sm font-extrabold text-blue-400 font-mono">250+</span>
                          <span className="text-[8px] text-gray-400 uppercase font-mono tracking-wider">Commits</span>
                        </div>
                        <div className="bg-black/50 rounded-xl p-2 text-center border border-white/5">
                          <span className="block text-sm font-extrabold text-purple-400 font-mono">12+</span>
                          <span className="text-[8px] text-gray-400 uppercase font-mono tracking-wider">Repos</span>
                        </div>
                        <div className="bg-black/50 rounded-xl p-2 text-center border border-white/5">
                          <span className="block text-sm font-extrabold text-emerald-400 font-mono">100%</span>
                          <span className="text-[8px] text-gray-400 uppercase font-mono tracking-wider">MERN</span>
                        </div>
                      </div>
                    </div>

                    {/* Quick-Contact Social Links */}
                    <div className="space-y-2 text-xs">
                      <div className="flex items-center justify-between text-gray-300 bg-white/[0.02] p-2.5 rounded-xl border border-white/5">
                        <div className="flex items-center gap-2 overflow-hidden">
                          <Mail size={14} className="text-blue-400 shrink-0" />
                          <span className="font-mono text-[11px] truncate text-gray-300">{email}</span>
                        </div>
                        <a 
                          href={`mailto:${email}`}
                          onClick={(e) => e.stopPropagation()}
                          className="text-[10px] text-blue-400 hover:text-blue-300 font-mono flex items-center gap-0.5 shrink-0 hover:underline"
                        >
                          Send <ArrowUpRight size={11} />
                        </a>
                      </div>

                      <div className="flex items-center gap-2">
                        <a 
                          href="https://github.com/shabeebamusthafa61523-code"
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs text-gray-300 hover:text-white transition-all font-mono"
                        >
                          <Github size={13} />
                          <span>GitHub</span>
                          <ArrowUpRight size={11} className="opacity-60" />
                        </a>
                        <a 
                          href="https://www.linkedin.com/in/shabeebamusthafa"
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-blue-600/10 hover:bg-blue-600/20 border border-blue-500/20 text-xs text-blue-400 hover:text-blue-300 transition-all font-mono"
                        >
                          <Linkedin size={13} />
                          <span>LinkedIn</span>
                          <ArrowUpRight size={11} className="opacity-60" />
                        </a>
                      </div>
                    </div>

                    {/* Tactile Copy Email Button with Copy Confirmation Micro-interaction */}
                    <div className="pt-1 border-t border-white/10">
                      <button
                        onClick={handleCopyEmail}
                        className={`w-full py-2.5 px-4 rounded-xl text-xs font-mono font-medium flex items-center justify-center gap-2 transition-all duration-300 active:scale-[0.98] ${
                          copied 
                            ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-[0_0_15px_rgba(16,185,129,0.3)]" 
                            : "bg-white text-black hover:bg-blue-500 hover:text-white shadow-md"
                        }`}
                      >
                        <AnimatePresence mode="wait">
                          {copied ? (
                            <motion.span 
                              key="copied"
                              initial={{ scale: 0.7, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              exit={{ scale: 0.7, opacity: 0 }}
                              className="flex items-center gap-1.5 font-bold"
                            >
                              <Check size={14} className="text-emerald-400 stroke-[3]" />
                              Email Copied to Clipboard!
                            </motion.span>
                          ) : (
                            <motion.span 
                              key="copy"
                              initial={{ scale: 0.7, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              exit={{ scale: 0.7, opacity: 0 }}
                              className="flex items-center gap-1.5"
                            >
                              <Copy size={14} />
                              Copy Email Address
                            </motion.span>
                          )}
                        </AnimatePresence>
                      </button>
                    </div>

                  </div>

                </motion.div>
              </motion.div>
            </div>
          </motion.div>

        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;