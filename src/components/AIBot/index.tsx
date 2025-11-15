
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import MessageList from './MessageList';
import Suggestions from './Suggestions';
import MessageInput from './MessageInput';
import { useAIBot } from './useAIBot';

const AIBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();
  const {
    messages,
    input,
    isTyping,
    suggestions,
    handleInputChange,
    handleSubmit,
    handleSuggestionClick
  } = useAIBot();

  const toggleBot = () => {
    setIsOpen(!isOpen);
    
    if (!isOpen) {
      // Notify user when opening the bot
      toast({
        title: "AI Assistant Activated",
        description: "MavBot is ready to help with your questions",
        duration: 3000,
      });
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-20 right-6 w-80 sm:w-96 h-[500px] max-h-[calc(100vh-120px)] rounded-2xl overflow-hidden shadow-lg z-50 flex flex-col neo-blur border border-white/10"
          >
            <div className="p-4 bg-gradient-to-r from-mavintel-accent to-mavintel-purple flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Bot className="w-5 h-5 text-white" />
                <h3 className="text-white font-medium">MavBot</h3>
              </div>
              <button
                onClick={toggleBot}
                className="p-1 rounded-full hover:bg-white/10 transition-colors text-white"
              >
                <X size={18} />
              </button>
            </div>
            
            <MessageList messages={messages} isTyping={isTyping} />
            <Suggestions suggestions={suggestions} onSuggestionClick={handleSuggestionClick} />
            <MessageInput 
              input={input} 
              isTyping={isTyping} 
              onChange={handleInputChange} 
              onSubmit={handleSubmit} 
            />
          </motion.div>
        )}
      </AnimatePresence>
      
      <button
        onClick={toggleBot}
        className={cn(
          "fixed bottom-6 right-6 p-4 rounded-full shadow-lg z-50 transition-all duration-300",
          isOpen
            ? "bg-white text-mavintel-accent rotate-180"
            : "bg-gradient-to-r from-mavintel-accent to-mavintel-purple text-white hover:shadow-lg hover:shadow-mavintel-accent/20"
        )}
      >
        {isOpen ? <ChevronUp size={24} /> : <Bot size={24} />}
      </button>
    </>
  );
};

export default AIBot;
