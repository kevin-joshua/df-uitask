import React, { useState } from 'react';

function EmployeeCard({ name, role, email, status, url }) { // Include url in the props
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails((prev) => !prev);
  };

  return (
    <div className={`relative bg-gray-500/30 shadow-xl  rounded-2xl p-4`}>
      {/* Top Section: Image and Name side by side */}
      <div className="flex items-center space-x-4 mb-4">
        <img 
          src={url}  // Use the url prop here
          alt={`${name}`} 
          className="w-16 h-16 rounded-full"
        />
        <h3 className="text-lg font-semibold">{name}</h3>
      </div>
      
      {/* Bottom Section: Role, Email, and Buttons */}
      <p className="text-gray-500 mx-4">{role}</p>
      <p className="text-gray-400 mb-4 mx-4 truncate">{email}</p>
      <div className="flex justify-center space-x-4">
        <button className="px-4 py-1 bg-white text-black rounded-md hover:bg-gray-300 border-black border-2">Block</button>
        <button 
          onClick={toggleDetails} 
          className="px-4 py-1 bg-black text-white rounded-md hover:bg-gray-800"
        >
          Details
        </button>
      </div>

      {/* Hover Container for Details */}
      {showDetails && (
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-800 bg-opacity-100 flex justify-center items-center rounded-2xl">
          <div className="text-white p-4 rounded-md shadow-lg">
            <p className="font-semibold">Details:</p>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Status: {status}</p>
            <button 
              onClick={toggleDetails} 
              className="mt-4 px-2 py-1 bg-purple-500 rounded-md hover:bg-purple-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default EmployeeCard;
