import React from 'react';

const Marquee = ({ items, reverse = false }) => {
  return (
    <div className="relative w-full overflow-hidden select-none py-4 border-y border-white/5 bg-black/40 backdrop-blur-md">
      {/* Ambient edge masks for fading left & right */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#030304] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#030304] to-transparent z-10 pointer-events-none" />

      <div className={`flex w-max gap-8 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}>
        {[...items, ...items, ...items, ...items].map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 px-5 py-2 rounded-full border border-white/10 bg-white/[0.02] text-xs font-mono text-gray-300 hover:border-blue-500/40 hover:text-white transition-all shrink-0"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
