// src/components/SearchBar.js
import React from 'react';

function SearchBar({ onSearch }) {
  return (
  
    <input
      type="text"
      className="w-full max-w-96 p-2 border-2 border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
      placeholder="Search"
      onChange={(e) => onSearch(e.target.value)}
    />
  
  );
}

export default SearchBar;
