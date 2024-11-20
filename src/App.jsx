// src/App.js
import React, { useState } from 'react';
import EmployeeCard from './components/EmployeeCard';
import SearchBar from './components/SearchBar';
import FilterButton from './components/FilterButton';
import './index.css';
import UserProfile from './components/UserProfile';

const employees = [
  { name: 'Johnson Wood', role: 'Front End Developer', email: 'johnsonwood@microsoft.com', status: 'active', url:'https://www.pngitem.com/pimgs/m/404-4042710_circle-profile-picture-png-transparent-png.png' },
  { name: 'John Doe', role: 'Team Lead', email: 'johndoe@microsoft.com', status: 'active',url:'https://i.pinimg.com/736x/dc/28/a7/dc28a77f18bfc9aaa51c3f61080edda5.jpg' },
  { name: 'Fakhar Naveed', role: 'UI/UX Designer', email: 'fakhar@microsoft.com', status: 'active',url:'https://xsgames.co/randomusers/assets/images/favicon.png' },
  { name: 'Alex Made', role: 'Backend Developer', email: 'alexmade@microsoft.com', status: 'active',url:'https://64.media.tumblr.com/9879e87bc4befcdff1fbd94db38e8f7d/12f973c55eb29cef-d0/s500x750/054b6826c3565c7ceacc06559ac948cbcefc0ac0.png' },
  { name: 'Jeffrey Dale', role: 'Backend Developer', email: 'jeffreydale@microsoft.com', status: 'inactive',url:'https://xsgames.co/randomusers/assets/images/favicon.png' },
  { name: 'John Mack', role: 'Backend Developer', email: 'johnmack@microsoft.com', status: 'inactive',url:'https://64.media.tumblr.com/9879e87bc4befcdff1fbd94db38e8f7d/12f973c55eb29cef-d0/s500x750/054b6826c3565c7ceacc06559ac948cbcefc0ac0.png' },



  
  // Add more employee data as needed
];

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');

  const handleSearch = (query) => setSearchQuery(query);
  const handleFilterChange = (status) => setFilterStatus(status);

  const filteredEmployees = employees.filter((employee) => {
    const matchesSearch = employee.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus === 'All' || employee.status.toLowerCase() === filterStatus.toLowerCase();
    return matchesSearch && matchesStatus;
  });

  return (
   
    <div className="min-h-screen bg-gradient-to-r from-purple-200 via-purple-50 to-white p-8">
      <header className="max-w-4xl mx-auto flex justify-between items-center mb-4">
        <SearchBar onSearch={handleSearch} />
        <UserProfile />
      </header>
      <div className="max-w-4xl mx-auto flex justify-between items-center mb-4 mt-8">
        <p className='font-bold lg:text-2xl md:text-xl'>Employees</p>
      <FilterButton filterStatus={filterStatus} onFilterChange={handleFilterChange} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 max-w-4xl mx-auto mt-6">
        {filteredEmployees.map((employee) => (
          <EmployeeCard key={employee.name} {...employee} />
        ))}
      </div>
    </div>
   
  );
}

export default App;
