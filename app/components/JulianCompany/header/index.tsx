// Header.tsx
import React from 'react';

const Header = () => {
  return (
    <div className="bg-white shadow-md py-6 px-8 w-full">
      <div className="flex items-center justify-between mx-auto max-w-7xl">
        <h1 className="text-3xl font-semibold text-gray-800 flex items-center space-x-2 px-4 ">Empleados de la Compañía</h1>
        <div className="flex space-x-6 absolute right-0 m-4">
          {/* <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-3 px-6 rounded-lg">
            Update Company Office
          </button>
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-3 px-6 rounded-lg">
            Edit Booking Rules
          </button> */}
          <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg">
            Agregar Empleados
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
