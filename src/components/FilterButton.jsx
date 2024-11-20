// src/components/FilterButton.js
import React from 'react';

function FilterButton({ filterStatus, onFilterChange }) {
  return (
    <div className="flex justify-center space-x-4 mb-4">
      {['All', 'Active', 'Inactive'].map((status) => (
        <button
          key={status}
          className={`px-4 py-1 rounded-full font-medium ${
            filterStatus === status 
              ? 'bg-purple-600 text-white' 
              : 'bg-gray-200 text-gray-700'
          } focus:outline-none`}
          onClick={() => onFilterChange(status)}
        >
          {status}
        </button>
      ))}
    </div>
  );
}

export default FilterButton;
