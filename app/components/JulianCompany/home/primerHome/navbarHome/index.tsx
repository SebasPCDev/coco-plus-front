import React from 'react';
// import { FaGlobe } from 'react-icons/fa';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-4xl font-semibold">Home</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;