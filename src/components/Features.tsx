import React from 'react';
import { Search, TrendingUp, BarChart } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Search className="w-8 h-8" />,
      title: 'Bundle Detection',
      description: 'Advanced blockchain analysis to detect potential whale movements',
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Trend Analysis',
      description: 'Real-time social media sentiment and Google search trends',
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: 'Market Scoring',
      description: 'Comprehensive scoring system for meme coin potential',
    },
  ];

  return (
    <div className="bg-black/95 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 border border-green-500/30 rounded-lg backdrop-blur-sm hover:border-green-500/50 transition-all hover:scale-105"
            >
              <div className="text-green-400 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-green-400 mb-2 font-mono">
                {feature.title}
              </h3>
              <p className="text-green-300/80 font-mono">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;