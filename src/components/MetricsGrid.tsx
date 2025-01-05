import React from 'react';
import { Search, TrendingUp, BarChart } from 'lucide-react';

const MetricsGrid = () => {
  const metrics = [
    {
      title: 'Bundle Detection',
      description: 'Scanning blockchain networks for whale movements',
      status: 'ACTIVE',
      icon: <Search className="w-6 h-6" />,
    },
    {
      title: 'Social Analysis',
      description: 'Monitoring social media engagement metrics',
      status: 'SCANNING',
      icon: <TrendingUp className="w-6 h-6" />,
    },
    {
      title: 'Market Score',
      description: 'Calculating potential based on aggregated data',
      status: 'PROCESSING',
      icon: <BarChart className="w-6 h-6" />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {metrics.map((metric, index) => (
        <div
          key={index}
          className="border border-green-500/30 rounded-lg p-4 hover:border-green-500/50 transition-all"
        >
          <div className="flex items-center gap-2 mb-3">
            <div className="text-green-400">{metric.icon}</div>
            <h3 className="font-vt323 text-xl text-green-400">{metric.title}</h3>
          </div>
          <p className="font-vt323 text-green-400/80 mb-2">{metric.description}</p>
          <div className="font-vt323 text-sm text-green-500">{metric.status}</div>
        </div>
      ))}
    </div>
  );
};

export default MetricsGrid;