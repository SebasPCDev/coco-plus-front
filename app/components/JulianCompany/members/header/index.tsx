// Header.tsx
import { useUserContext } from '@/app/components/context';
import GetCompany from '@/utils/gets/getCompany';
import GetProfile from '@/utils/gets/getProfile';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Header = () => {
      const [isCompanyActive, setIsCompanyActive] = useState("");
      const { token } = useUserContext();

      useEffect(() => {
        const getData = async () => {
          const profile = await GetProfile({ token });
    
          const companyId = profile?.employee.company?.id;
    
          const company = await GetCompany({ companyId, token });
    
          setIsCompanyActive(company.status);          
        };
        getData();
      }, []); 

  return (
    <div className="bg-white shadow-md py-6 px-8 w-full">
      <div className="flex items-center justify-between mx-auto max-w-8xl">
        <h1 className="text-3xl font-semibold text-gray-800">Empleados de la Compañía</h1>
        <div className="flex space-x-6">
        <Link href="/dashboard/adminCompany/agregarEmpleados">
        <button 
              className={`btn bg-custom-secondary px-4 py-2 font-semibold text-custom-white hover:bg-custom-primary hover:text-custom-secondary rounded-lg ${
                isCompanyActive === "inactive"
                  ? "bg-gray-400 text-gray-200 hover:bg-gray-400 hover:text-gray-200 cursor-not-allowed"
                  : "bg-custom-secondary text-custom-white hover:bg-custom-primary hover:text-custom-secondary"
              }`}
              disabled={isCompanyActive === "inactive"}
            >
              Agregar Empleados
            </button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;

"btn bg-custom-secondary px-4 py-2 font-semibold text-custom-white hover:bg-custom-primary hover:text-custom-secondary rounded-lg"