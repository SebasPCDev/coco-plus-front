import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import IAddEmployeeInfo from '@/utils/types/requests/companiesFormAddEmployeeInterface';
import IAddMembersErrorInfo from '@/utils/types/requests/companiesFormAddEmployeeErrorInterface';
import {
  INITIAL_COMPANIES_ADD_EMPLOYEE_INFO,
  INITIAL_COMPANIES_INFO_ADD_EMPLOYEE_ERROR,
} from '@/utils/constants/requests/initialCompaniesAddEmployee';
import companyAddEmployeeValidation from '@/utils/formValidation/companyAddEmployeeValidation';
import PostCompanyAddEmployee from '@/utils/posts/postCompanyAddEmployee';
import createEmployee from '@/utils/api/company/createEmployee';
import getProfile from '@/utils/api/users/getProfile';

const useCompaniesFormAddEmployee = () => {
  const router = useRouter();
  const [companiesInfoAddEmployee, setcompaniesInfoAddEmployee] =
    useState<IAddEmployeeInfo>(INITIAL_COMPANIES_ADD_EMPLOYEE_INFO);
  const [companiesInfoErrorAddEmployee, setcompaniesInfoErrorAddEmployee] =
    useState<IAddMembersErrorInfo>(INITIAL_COMPANIES_INFO_ADD_EMPLOYEE_ERROR);

  useEffect(() => {
    const errors = companyAddEmployeeValidation(companiesInfoAddEmployee);
    setcompaniesInfoErrorAddEmployee(errors);
  }, [companiesInfoAddEmployee]);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setcompaniesInfoAddEmployee({
      ...companiesInfoAddEmployee,
      [name]: value,
    });
  };

  const handleChangePhone = (name: string, value: string) => {
    setcompaniesInfoAddEmployee({
      ...companiesInfoAddEmployee,
      [name]: value,
    });
  };

  const handleCancel = () => {
    router.push('/');
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const profile = await getProfile();
      const companyId = profile?.employee.company?.id;
      companiesInfoAddEmployee.companyId = companyId;
      companiesInfoAddEmployee.role = 'employee';
      companiesInfoAddEmployee.status = 'active';
      companiesInfoAddEmployee.passes = Number(companiesInfoAddEmployee.passes);
      companiesInfoAddEmployee.passesAvailable = Number(
      companiesInfoAddEmployee.passes,
      );
      console.log(profile);
      console.log(companiesInfoAddEmployee);
      const response = await createEmployee(companiesInfoAddEmployee);
      console.log(response);
      Swal.fire({
        title: 'Empleado creado',
        /* text: '', */
        icon: 'success',
        width: '32em',
      });
      router.push('/dashboard/adminCompany/empleados');
    } catch (error: any) {
      console.error('Error al enviar la solicitud:', error);
      Swal.fire({
        title: 'Error enviando la solicitud',
        text: error,
        icon: 'error',
      });
    }
  };
  return {
    companiesInfoAddEmployee,
    companiesInfoErrorAddEmployee,
    handleChange,
    handleChangePhone,
    handleSubmit,
    handleCancel,
  };
};

export default useCompaniesFormAddEmployee;
