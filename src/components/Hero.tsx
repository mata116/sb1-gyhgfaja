import React from 'react';
import { Search, TrendingUp, BarChart } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-8 font-mono">
            AI-Powered Meme Coin Analysis
          </h1>
          <p className="text-green-400 text-xl mb-12 font-mono">
            Detect bundles. Analyze trends. Find the next moonshot.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="bg-green-500 hover:bg-green-600 text-black px-8 py-3 rounded-lg font-mono font-bold transition-all hover:scale-105">
              Start Now
            </button>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-mono font-bold transition-all hover:scale-105"
            >
              Twitter
            </a>
            <a
              href="https://telegram.org"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-400 hover:bg-blue-500 text-white px-8 py-3 rounded-lg font-mono font-bold transition-all hover:scale-105"
            >
              Telegram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;