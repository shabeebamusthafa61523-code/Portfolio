import React, { useState } from 'react'; // Added useState
import { motion } from 'framer-motion';
import { Github, Instagram, Linkedin, ArrowUpRight, Copy, Check } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const email = "shabeebamusthafa61523@gmail.com";
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer id="contact" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
        
        <div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold leading-tight mb-8"
          >
            Let’s build <br /> 
            <span className="text-gray-500">something </span> 
            iconic.
          </motion.h2>
          
          <div className="flex flex-col gap-2 w-fit">
            <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">Drop me a line</span>
            <div className="flex items-center gap-3">
              {/* Standard Mailto Link */}
              <a 
                href={`mailto:${email}`} 
                className="group flex items-center gap-2 text-xl md:text-2xl font-medium hover:text-blue-400 transition-colors"
              >
                {email}
                <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform shrink-0" />
              </a>

              {/* Copy Button Fallback */}
              <button 
                onClick={handleCopy}
                className="p-2 bg-white/5 rounded-md hover:bg-white/10 transition-all border border-white/5 group relative"
                title="Copy Email"
              >
                {copied ? <Check size={16} className="text-green-500" /> : <Copy size={16} className="text-gray-400" />}
                
                {/* Tooltip */}
                {copied && (
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] bg-blue-500 text-white px-2 py-1 rounded">
                    Copied!
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:items-end gap-8">
          <div className="flex gap-6">
            <a href="https://github.com/shabeebamusthafa61523-code" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-all text-gray-400 hover:text-white">
              <Github size={20} />
            </a>
            {/* <a href="https://instagram.com/techtap" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-all text-gray-400 hover:text-pink-500">
              <Instagram size={20} />
            </a> */}
            <a href="https://www.linkedin.com/in/shabeebamusthafa" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-all text-gray-400 hover:text-blue-500">
              <Linkedin size={20} />
            </a>
          </div>

          <div className="text-gray-500 text-[10px] font-mono text-right uppercase tracking-widest leading-relaxed">
            <p>BASED IN KERALA, INDIA</p>
            <p>© {currentYear} — ALL RIGHTS RESERVED</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;