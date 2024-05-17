import React from 'react';
import { HiChevronLeft } from 'react-icons/hi';

const Breadcrumb = () => {
  return (
    <div className="flex items-center space-x-2 px-4 ">
      <button className="text-gray-600 hover:text-gray-800 focus:outline-none">
        <HiChevronLeft className="h-5 w-5" />
      </button>
      <span className="text-sm text-gray-600">Back</span>
    </div>
  );
};

export default Breadcrumb;