// Header.tsx
import { useUserContext } from '@/app/components/context';
import GetCompany from '@/utils/gets/getCompany';
import GetProfile from '@/utils/gets/getProfile';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const Header = ({
  quantityBeneficiaries,
  totalEmployees,
}: {
  quantityBeneficiaries: number;
  totalEmployees: number;
}) => {
  const [isCompanyActive, setIsCompanyActive] = useState('');
  const [addEmployees, setAddEmployees] = useState(false);
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

  const handleClick = async () => {
    if (quantityBeneficiaries - totalEmployees <= 0) {
      Swal.fire({
        icon: 'warning',
        title: 'No puedes agregar más empleados',
        text: 'Has alcanzado el límite de empleados para tu plan',
      });
      setAddEmployees(false);
      return;
    }

    setAddEmployees(true);
  };

  return (
    <div className="w-full bg-white px-8 py-6 shadow-md">
      <div className="max-w-8xl mx-auto flex items-center justify-between">
        <h1 className="text-3xl font-semibold text-gray-800">
          Empleados de la Compañía
        </h1>
        <div className="flex space-x-6">
          <Link
            href={
              addEmployees ? '/dashboard/adminCompany/agregarEmpleados' : ''
            }
            onClick={handleClick}
          >
            <button
              className={`btn rounded-lg bg-custom-secondary px-4 py-2 font-semibold text-custom-white hover:bg-custom-primary hover:text-custom-secondary ${
                isCompanyActive === 'inactive'
                  ? 'cursor-not-allowed bg-gray-400 text-gray-200 hover:bg-gray-400 hover:text-gray-200'
                  : 'bg-custom-secondary text-custom-white hover:bg-custom-primary hover:text-custom-secondary'
              }`}
              disabled={isCompanyActive === 'inactive'}
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
