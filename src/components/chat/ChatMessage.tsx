import React from 'react';
import { Message } from '../../types/chat';

interface ChatMessageProps {
  message: Message;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  return (
    <div className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'} mb-4`}>
      <div className={`max-w-[80%] p-3 rounded-lg ${
        message.role === 'user' 
          ? 'bg-blue-500/20 text-blue-400' 
          : 'bg-green-500/20 text-green-400'
      }`}>
        <p className="font-vt323 text-lg">{message.content}</p>
        <span className="text-xs opacity-50 font-vt323">
          {new Date(message.timestamp).toLocaleTimeString()}
        </span>
      </div>
    </div>
  );
};

export default ChatMessage;