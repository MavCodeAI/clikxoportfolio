
import React, { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Message } from './types';

interface MessageListProps {
  messages: Message[];
  isTyping: boolean;
}

const MessageList: React.FC<MessageListProps> = ({ messages, isTyping }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex-1 overflow-y-auto p-4 bg-mavintel-dark/80">
      {messages.map((message) => (
        <div
          key={message.id}
          className={cn(
            "mb-4 max-w-[85%] rounded-lg p-3",
            message.sender === 'user'
              ? "bg-mavintel-accent text-white ml-auto"
              : "bg-white/10 backdrop-blur-sm text-white"
          )}
        >
          <p className="text-sm">{message.content}</p>
          <p className="text-xs mt-1 opacity-70">
            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </p>
        </div>
      ))}
      {isTyping && (
        <div className="bg-white/10 backdrop-blur-sm text-white mb-4 max-w-[85%] rounded-lg p-3">
          <div className="flex space-x-1">
            <div className="w-2 h-2 rounded-full bg-white/50 animate-pulse"></div>
            <div className="w-2 h-2 rounded-full bg-white/50 animate-pulse delay-75"></div>
            <div className="w-2 h-2 rounded-full bg-white/50 animate-pulse delay-150"></div>
          </div>
        </div>
      )}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default MessageList;
