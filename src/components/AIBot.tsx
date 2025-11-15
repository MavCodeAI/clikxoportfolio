
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X, SendHorizontal, ChevronUp, Sparkles, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const AIBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hello! I'm MavBot, your AI assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([
    "Tell me about your services",
    "What industries do you work with?",
    "How can AI help my business?",
    "I need a quote for my project"
  ]);
  const { toast } = useToast();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const simulateBotResponse = (userMessage: string) => {
    setIsTyping(true);
    
    // Simulate different responses based on user input
    let botResponse = "I'm analyzing your request...";
    
    if (userMessage.toLowerCase().includes('pricing') || userMessage.toLowerCase().includes('cost')) {
      botResponse = "Our pricing is tailored to your specific needs. Generally, our AI solutions start at $1,500 per month. Would you like me to prepare a custom quote for you?";
    } else if (userMessage.toLowerCase().includes('service') || userMessage.toLowerCase().includes('help')) {
      botResponse = "MavIntel offers AI-powered web development, business automation, data analytics, and chatbot integration services. Which area are you interested in learning more about?";
    } else if (userMessage.toLowerCase().includes('contact') || userMessage.toLowerCase().includes('talk')) {
      botResponse = "I'd be happy to connect you with our team. You can schedule a consultation by using our contact form, or I can gather some information and have someone reach out to you directly. What would you prefer?";
    } else if (userMessage.toLowerCase().includes('industry') || userMessage.toLowerCase().includes('work with')) {
      botResponse = "We work with clients across various industries including finance, healthcare, e-commerce, education, and manufacturing. Our AI solutions are tailored to specific industry needs and challenges.";
    } else if (userMessage.toLowerCase().includes('ai') && userMessage.toLowerCase().includes('business')) {
      botResponse = "AI can transform your business by automating repetitive tasks, providing data-driven insights, personalizing customer experiences, optimizing operations, and enabling predictive capabilities. Would you like to explore a specific AI application for your business?";
    } else {
      botResponse = "Thank you for your message. Our AI solutions are designed to help businesses like yours achieve digital transformation. Would you like to know more about our specific services or see some case studies?";
    }
    
    // Generate new suggestions based on the conversation
    const newSuggestions = generateSuggestions(userMessage);
    
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          content: botResponse,
          sender: 'bot',
          timestamp: new Date()
        }
      ]);
      setSuggestions(newSuggestions);
    }, 1500);
  };
  
  const generateSuggestions = (userMessage: string): string[] => {
    // Generate contextual suggestions based on the conversation
    if (userMessage.toLowerCase().includes('pricing') || userMessage.toLowerCase().includes('cost')) {
      return [
        "Can you provide a detailed quote?",
        "Do you offer monthly subscriptions?",
        "What's included in the basic package?",
        "Are there any discounts available?"
      ];
    } else if (userMessage.toLowerCase().includes('service') || userMessage.toLowerCase().includes('help')) {
      return [
        "Tell me about your web development",
        "How does your automation work?",
        "What data analytics services do you offer?",
        "Can you integrate AI into my existing systems?"
      ];
    } else {
      return [
        "Show me some case studies",
        "What makes your AI solutions different?",
        "Do you offer custom solutions?",
        "I'd like to schedule a consultation"
      ];
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim()) return;
    
    const newMessage: Message = {
      id: Date.now().toString(),
      content: input,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages((prev) => [...prev, newMessage]);
    setInput('');
    
    simulateBotResponse(input);
  };
  
  const handleSuggestionClick = (suggestion: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      content: suggestion,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages((prev) => [...prev, newMessage]);
    simulateBotResponse(suggestion);
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
            
            {/* Suggestions */}
            <div className="p-3 bg-white/5 backdrop-blur-md border-t border-white/5">
              <div className="flex flex-wrap gap-2">
                {suggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="text-xs px-3 py-1.5 bg-white/10 hover:bg-white/20 transition-colors rounded-full text-white/80 hover:text-white flex items-center"
                  >
                    <Sparkles size={12} className="mr-1 text-mavintel-purple-light" />
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="p-4 bg-white/5 backdrop-blur-md border-t border-white/5">
              <div className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={handleInputChange}
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
