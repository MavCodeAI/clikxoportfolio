
import React from 'react';
import { Sparkles } from 'lucide-react';

interface SuggestionsProps {
  suggestions: string[];
  onSuggestionClick: (suggestion: string) => void;
}

const Suggestions: React.FC<SuggestionsProps> = ({ suggestions, onSuggestionClick }) => {
  return (
    <div className="p-3 bg-white/5 backdrop-blur-md border-t border-white/5">
      <div className="flex flex-wrap gap-2">
        {suggestions.map((suggestion, index) => (
          <button
            key={index}
            onClick={() => onSuggestionClick(suggestion)}
            className="text-xs px-3 py-1.5 bg-white/10 hover:bg-white/20 transition-colors rounded-full text-white/80 hover:text-white flex items-center"
          >
            <Sparkles size={12} className="mr-1 text-mavintel-purple-light" />
            {suggestion}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Suggestions;
