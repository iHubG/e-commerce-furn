import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({ text, className = '' }) => {
  return (
    <div className={`relative w-full max-w-md ${className}`}>
        <input
            type="text"
            placeholder={text}
            className="w-full lg:px-4 px-3 lg:py-3 py-2 text-sm lg:text-lg pr-12 rounded-full outline-none border border-white bg-white/20 backdrop-blur-md text-white placeholder-white"
        />

      <button
        type="button"
        className="absolute lg:right-2 right-7 top-1/2 -translate-y-1/2 bg-yellow-500 p-1 lg:p-2 rounded-full hover:bg-yellow-600 transition-colors cursor-pointer"
      >
        <Search size={20} className="text-white" />
      </button>
    </div>
  );
};

export default SearchBar;
