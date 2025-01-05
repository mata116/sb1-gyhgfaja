import React from 'react';
import { BarChart2, Search, TrendingUp, MessageSquare, Twitter, Send } from 'lucide-react';
import { useAppState } from '../hooks/useAppState';

const Sidebar = () => {
  const { setIsChatOpen } = useAppState();

  return (
    <div className="w-64 border-r border-green-500/30 p-4 flex flex-col">
      <h1 className="font-vt323 text-2xl text-green-400 mb-8">MEME ANALYZER v1.0</h1>
      <nav className="space-y-4">
        <button
          onClick={() => setIsChatOpen(true)}
          className="w-full bg-green-500/20 hover:bg-green-500/30 text-green-400 p-3 rounded font-vt323 flex items-center gap-2 transition-colors"
        >
          <MessageSquare className="w-4 h-4" />
          Start Analysis
        </button>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 p-3 rounded font-vt323 flex items-center gap-2 transition-colors"
        >
          <Twitter className="w-4 h-4" />
          Twitter
        </a>
        <a
          href="https://telegram.org"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-blue-400/20 hover:bg-blue-400/30 text-blue-300 p-3 rounded font-vt323 flex items-center gap-2 transition-colors"
        >
          <Send className="w-4 h-4" />
          Telegram
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;