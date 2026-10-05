import React, { useState } from 'react';
import { Terminal, Copy, Check, Play, RefreshCw } from 'lucide-react';

const InteractiveTerminal = () => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('profile');

  const codeSnippets = {
    profile: `const developer = {
  name: "Shabeeba Musthafa",
  role: "Full-Stack MERN Developer",
  location: "Kerala, India (GMT+5:30)",
  education: "MSc Computer Science (In Progress)",
  stack: ["MongoDB", "Express.js", "React.js", "Node.js"],
  status: "Available for High-Impact Projects",
  architecture: "Scalable MERN + AI Microservices"
};`,
    commands: `$ npm run build:production
> Compiling React 18 + Vite client... DONE
> Connecting MERN backend APIs... OK
> Verifying Razorpay & Cloudinary... OK
> Launching Pacha.Cart & Le Tohfa... DEPLOYED ⚡`
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full rounded-2xl bg-[#070709] border border-white/10 overflow-hidden shadow-2xl font-mono text-xs">
      {/* Window Titlebar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#0E0F14] border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
          <span className="ml-2 text-[11px] text-gray-400 font-sans font-medium flex items-center gap-1.5">
            <Terminal size={13} className="text-blue-400" /> shabeeba@dev-workstation:~
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveTab(activeTab === 'profile' ? 'commands' : 'profile')}
            className="px-2.5 py-1 text-[10px] rounded bg-white/5 hover:bg-white/10 border border-white/5 text-gray-300 transition-colors flex items-center gap-1"
          >
            <RefreshCw size={10} className="text-blue-400" /> Switch View
          </button>
          <button
            onClick={handleCopy}
            className="p-1.5 rounded bg-white/5 hover:bg-white/10 border border-white/5 text-gray-400 hover:text-white transition-colors"
            title="Copy snippet"
          >
            {copied ? <Check size={13} className="text-green-400" /> : <Copy size={13} />}
          </button>
        </div>
      </div>

      {/* Code Area */}
      <div className="p-5 text-gray-300 leading-relaxed overflow-x-auto min-h-[160px] bg-[#050507]">
        <pre className="text-blue-300/90 font-mono">
          {codeSnippets[activeTab]}
        </pre>
        <div className="mt-3 flex items-center gap-2 text-emerald-400">
          <span>❯</span>
          <span className="animate-pulse">_</span>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTerminal;
