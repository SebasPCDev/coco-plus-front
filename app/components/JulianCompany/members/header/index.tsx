// Header.tsx
import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <div className="bg-white shadow-md py-6 px-8 w-full">
      <div className="flex items-center justify-between mx-auto max-w-8xl">
        <h1 className="text-3xl font-semibold text-gray-800">Empleados de la Compañía</h1>
        <div className="flex space-x-6">
        <Link href="/dashboard/adminCompany/agregarEmpleados">
          <button className="bg-lime-500 hover:bg-lime-600 text-white font-semibold py-3 px-6 rounded-lg">
            Agregar Empleados
          </button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
