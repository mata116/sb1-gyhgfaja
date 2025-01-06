import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useAppState } from '../hooks/useAppState';
import ChatMessage from './chat/ChatMessage';
import ChatInput from './chat/ChatInput';
import { Message } from '../types/chat';

const Terminal = () => {
  const { setIsChatOpen } = useAppState();
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (content: string) => {
    setIsLoading(true);

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      role: 'user',
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);

    // Simulate a delay for "response"
    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: 'Due to high demand, please wait 3-4 minutes before receiving a response.',
        role: 'assistant',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 1500); // Simulate a 1.5 second delay
  };

  return (
    <div className="h-[500px] flex flex-col">
      <div className="flex items-center justify-between border-b border-green-500/30 p-4">
        <h3 className="font-vt323 text-xl text-green-400">MEME COIN ANALYSIS TERMINAL</h3>
        <button
          onClick={() => setIsChatOpen(false)}
          className="text-green-400 hover:text-green-300"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
      <div className="flex-1 p-4 font-vt323 overflow-y-auto">
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
        {isLoading && (
          <div className="text-green-400 opacity-75">
            <span className="typing-animation">Analyzing...</span>
          </div>
        )}
      </div>
      <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
    </div>
  );
};

export default Terminal;
