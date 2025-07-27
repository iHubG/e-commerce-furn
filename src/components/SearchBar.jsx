import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({ text, className = '' }) => {
  return (
    <div className={`relative w-full max-w-md ${className}`}>
        <input
            type="text"
            placeholder={text}
            className="w-full px-4 py-3 pr-12 rounded-full outline-none border border-white bg-white/20 backdrop-blur-md text-white placeholder-white"
        />

      <button
        type="button"
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-yellow-500 p-2 rounded-full hover:bg-yellow-600 transition-colors"
      >
        <Search size={20} className="text-white" />
      </button>
    </div>
  );
};

export default SearchBar;
