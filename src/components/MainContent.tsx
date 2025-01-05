import React from 'react';
import { Search, TrendingUp, BarChart } from 'lucide-react';
import MetricsGrid from './MetricsGrid';
import Terminal from './Terminal';
import { useAppState } from '../hooks/useAppState';

const MainContent = () => {
  const { isChatOpen } = useAppState();

  return (
    <div className="flex-1 p-6">
      <div className="mb-8">
        <h2 className="font-vt323 text-3xl text-green-400 mb-2">SYSTEM STATUS</h2>
        <div className="grid grid-cols-3 gap-4">
          <MetricsCard
            icon={<Search className="w-5 h-5" />}
            label="ACTIVE SCANS"
            value="1,337"
          />
          <MetricsCard
            icon={<TrendingUp className="w-5 h-5" />}
            label="SIGNALS DETECTED"
            value="42"
          />
          <MetricsCard
            icon={<BarChart className="w-5 h-5" />}
            label="MARKET SCORE"
            value="89%"
          />
        </div>
      </div>
      <MetricsGrid />
      {isChatOpen && (
        <div className="mt-8 border border-green-500/30 rounded-lg overflow-hidden">
          <Terminal />
        </div>
      )}
    </div>
  );
};

const MetricsCard = ({ icon, label, value }) => (
  <div className="bg-black/50 border border-green-500/30 p-4 rounded-lg">
    <div className="flex items-center gap-2 mb-2 text-green-400">
      {icon}
      <span className="font-vt323 text-sm">{label}</span>
    </div>
    <div className="font-vt323 text-2xl text-green-400">{value}</div>
  </div>
);

export default MainContent;