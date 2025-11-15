
import { useState } from 'react';
import { Message } from './types';

export const useAIBot = () => {
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
      botResponse = "ClickXo offers professional Web Development, creative Graphic Designing, and strategic Digital Marketing services. Which service are you interested in learning more about?";
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

  return {
    messages,
    input,
    isTyping,
    suggestions,
    handleInputChange,
    handleSubmit,
    handleSuggestionClick
  };
};
