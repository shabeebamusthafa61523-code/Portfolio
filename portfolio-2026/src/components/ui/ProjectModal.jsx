import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2, Layers, Cpu } from 'lucide-react';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl bg-[#0B0C10] border border-white/10 rounded-[2.5rem] shadow-2xl overflow-hidden z-10 my-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-gray-400 hover:text-white transition-all z-20"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>

          <div className="max-h-[85vh] overflow-y-auto p-6 sm:p-8 md:p-10">
            {/* Header / Category */}
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3.5 py-1 text-[10px] font-mono font-bold bg-blue-500/10 border border-blue-500/30 text-blue-400 rounded-full uppercase tracking-wider">
                {project.category}
              </span>
              <span className="text-xs font-mono text-gray-500">• Production Architecture</span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              {project.title}
            </h2>

            {/* Banner Image */}
            <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden mb-8 border border-white/10 bg-gradient-to-br from-blue-900/20 to-purple-900/20">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C10] via-transparent to-transparent opacity-80" />
            </div>

            {/* Description */}
            <div className="space-y-6 text-gray-300 leading-relaxed mb-8">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Layers className="text-blue-400" size={18} /> System Overview
              </h3>
              <p className="text-base text-gray-300 font-light leading-relaxed">
                {project.longDescription || project.description}
              </p>
            </div>

            {/* Key Features */}
            {project.features && project.features.length > 0 && (
              <div className="mb-8">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <CheckCircle2 className="text-emerald-400" size={18} /> Core Capabilities & Features
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/5"
                    >
                      <span className="w-2 h-2 rounded-full bg-blue-400 mt-2 shrink-0" />
                      <span className="text-xs text-gray-300 leading-relaxed">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack */}
            <div className="mb-10">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Cpu className="text-purple-400" size={18} /> Tech Stack & Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tech?.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 text-xs font-mono text-gray-300 bg-white/[0.04] border border-white/10 rounded-lg"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Action Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/10">
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm flex items-center gap-2 shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all hover:scale-105 active:scale-95"
                >
                  <span>Launch Live System</span>
                  <ExternalLink size={16} />
                </a>
              )}

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-sm flex items-center gap-2 transition-all hover:border-white/30"
                >
                  <Github size={18} />
                  <span>View Source Code</span>
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectModal;
