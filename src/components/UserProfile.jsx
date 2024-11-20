import React, { useState } from 'react';

function UserProfile() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Function to handle mouse enter
  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  // Function to handle mouse leave
  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div 
      className="relative flex items-center" 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
    >
      <img 
        src="https://xsgames.co/randomusers/assets/images/favicon.png" 
        className="w-12 h-12 rounded-full"
        alt="User Profile"
      />
      <h3 className="text-lg font-semibold md:text-md lg:text-lg sm:text-sm mx-3">Fakhar Naveed</h3>
      <i className="fa-solid fa-chevron-down"></i>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div className="absolute right-0 mt-1 w-48 bg-white border rounded-md shadow-lg z-10">
          <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200">
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default UserProfile;
