import React from 'react';
import Sidebar from './Sidebar';
import MainContent from './MainContent';

const Layout = () => {
  return (
    <div className="min-h-screen bg-black text-green-400 flex">
      <Sidebar />
      <MainContent />
    </div>
  );
};

export default Layout;