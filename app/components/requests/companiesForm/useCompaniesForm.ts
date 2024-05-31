import React from 'react';

import { useState, useEffect } from 'react';
import 'react-international-phone/style.css';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';

import ICompaniesInfo from '@/utils/types/requests/companiesFormInterface';
import PostCompany from '@/utils/posts/postCompany';
import companyValidation from '@/utils/formValidation/companyValidation';
import ICompaniesErrorInfo from '@/utils/types/requests/companiesFormErrorInterface';
import {
  INITIAL_COMPANIES_INFO,
  INITIAL_COMPANIES_INFO_ERROR,
} from '@/utils/constants/requests/initialCompanies';

const useCompaniesForm = () => {
  const router = useRouter();
  const [companiesInfo, setCompaniesInfo] = useState<ICompaniesInfo>(
    INITIAL_COMPANIES_INFO,
  );

  const [companiesInfoError, setCompaniesInfoError] =
    useState<ICompaniesErrorInfo>(INITIAL_COMPANIES_INFO_ERROR);

  const [trigger, setTrigger] = useState<boolean>(false);

  useEffect(() => {
    const errors = companyValidation(companiesInfo);
    setCompaniesInfoError(errors);
  }, [companiesInfo]);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;

    setCompaniesInfo({
      ...companiesInfo,
      [name]: value,
    });
  };

  const handleChangePhone = (name: string, value: string) => {
    setCompaniesInfo({
      ...companiesInfo,
      [name]: value,
    });
  };

  const handleCancel = () => {
    router.push('/');
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = companyValidation(companiesInfo);
    if (Object.keys(errors).length > 0) {
      Swal.fire({
        title: 'Error en el formulario',
        text: `Por favor, complete los campos correctamente`,
        icon: 'error',
        confirmButtonColor: '#222B2D',
      });
      return;
    }
    try {
      const response = await PostCompany(companiesInfo);
      Swal.fire({
        title: 'Solicitud enviada',
        text: 'La respuesta se enviara a tu correo electronico',
        icon: 'success',
        width: '32em',
      });
      router.push('/');
    } catch (error: any) {
      Swal.fire({
        title: 'Error enviando la solicitud',
        text: error,
        icon: 'error',
      });
    }
  };

  return {
    companiesInfo,
    companiesInfoError,
    handleChange,
    handleChangePhone,
    handleSubmit,
    handleCancel,
  };
};
export default useCompaniesForm;
