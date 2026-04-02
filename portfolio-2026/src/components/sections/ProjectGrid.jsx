import React from 'react';
import { motion } from 'framer-motion';
import projectsData from '../../data/projects.json';

const ProjectGrid = () => {
  const projects = projectsData || [];

  return (
    <section id="work" className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-4xl font-bold mb-4 text-white">Selected <span className="text-gray-500 font-light">Works</span></h2>
        <p className="text-gray-400 max-w-md">A collection of full-stack applications and premium digital experiences built since 2025.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group bg-[#0A0A0A] border border-white/5 rounded-[2rem] overflow-hidden flex flex-col h-full hover:border-blue-500/30 transition-all duration-500"
          >
            {/* Project Image Area */}
            <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-900/20 to-black">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 text-[9px] font-mono bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-blue-400 uppercase tracking-widest">
                  {project.category}
                </span>
              </div>
            </div>

            {/* Project Content */}
            <div className="p-8 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>

              {/* Tech Pills */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech?.map(t => (
                  <span key={t} className="text-[10px] text-gray-500 border border-white/5 px-2 py-1 rounded-md bg-white/[0.02]">
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                <a 
                  href={project.liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-white flex items-center gap-2 hover:text-blue-400 transition-colors"
                >
                  Live Preview <span className="text-lg">↗</span>
                </a>
                <a 
                  href={project.github} 
                  className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors"
                  aria-label="GitHub Repository"
                >
                  <svg className="w-4 h-4 fill-gray-400" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectGrid;