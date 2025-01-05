import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-105"
        >
          <MessageSquare className="w-6 h-6" />
        </button>
      ) : (
        <div className="bg-black/90 border border-blue-500/30 rounded-lg w-80 h-96 shadow-lg shadow-blue-500/20">
          <div className="flex items-center justify-between p-4 border-b border-blue-500/30">
            <h3 className="text-blue-400 font-mono">AI Assistant</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-blue-400 hover:text-blue-300"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="p-4 h-72 overflow-y-auto">
            <div className="text-blue-400 font-mono">
              How can I help you analyze meme coins today?
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;