
import React from 'react';
import { SendHorizontal, Loader2 } from 'lucide-react';

interface MessageInputProps {
  input: string;
  isTyping: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const MessageInput: React.FC<MessageInputProps> = ({ 
  input, 
  isTyping, 
  onChange, 
  onSubmit 
}) => {
  return (
    <form onSubmit={onSubmit} className="p-4 bg-white/5 backdrop-blur-md border-t border-white/5">
      <div className="relative">
        <input
          type="text"
          value={input}
          onChange={onChange}
          placeholder="Ask MavBot anything..."
          className="w-full px-4 py-2 pr-10 rounded-lg bg-white/10 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-1 focus:ring-mavintel-accent"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 rounded-full text-white hover:bg-white/10 transition-colors"
          disabled={isTyping}
        >
          {isTyping ? (
            <Loader2 size={18} className="animate-spin" />
          ) : (
            <SendHorizontal size={18} />
          )}
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
