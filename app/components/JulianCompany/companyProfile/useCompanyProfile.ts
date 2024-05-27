'use client';

import updProfileCompany from '@/utils/api/company/updProfileCompany';
import getProfile from '@/utils/api/users/getProfile';
import {
  INITIAL_PROFILE_COMPANY,
  INITIAL_PROFILE_COMPANY_ERROR,
} from '@/utils/constants/companies/initialProfileCompany';
import { ICompanyProfile } from '@/utils/types/companies/companyProfileInterface';
import ICompanyProfileFormError from '@/utils/types/companies/companyProfileFormError';
import { CompanyStatus } from '@/utils/types/companies/companyStatus.enum';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import profileCompanyValidation from '@/utils/formValidation/profileCompanyValidation';

const useCompanyProfile = () => {
  const router = useRouter();
  const [companyProfile, setCompanyProfile] = useState<ICompanyProfile>(
    INITIAL_PROFILE_COMPANY,
  );
  const [companyProfileError, setCompanyProfileError] =
    useState<ICompanyProfileFormError>(INITIAL_PROFILE_COMPANY_ERROR);

  const getData = async () => {
    try {
      const data = await getProfile();
      setCompanyProfile(data.employee.company);
    } catch (error: any) {
      await Swal.fire({
        title: 'Error obteniendo los datos',
        text: error,
        icon: 'error',
      });
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const errors = profileCompanyValidation(companyProfile);
    setCompanyProfileError(errors);
  }, [companyProfile]);

  const handleChange = (name: string, value: string) => {
    setCompanyProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleChangePhone = (name: string, value: string) => {
    setCompanyProfile({
      ...companyProfile,
      [name]: value,
    });
  };

  const handleCancel = () => {
    router.push('/dashboard/adminCompany/');
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { id, totalPasses, ...data } = companyProfile;

    if (data.status === CompanyStatus.ACCEPTED) {
      const errors = profileCompanyValidation(companyProfile);
      try {
        if (Object.keys(errors).length !== 0) {
          await Swal.fire({
            title: 'Error en los campos',
            text: `${errors.name || ''} ${errors.phone || ''} ${
              errors.businessSector || ''
            } ${errors.size || ''} ${errors.quantityBeneficiaries || ''}`,
            icon: 'error',
            width: '32em',
          });
          return;
        }
        data.status = CompanyStatus.COMPLETED;
        const response = await updProfileCompany(companyProfile.id, data);
        await Swal.fire({
          title: 'Perfil modificado',
          // text: 'Perfil modificado',
          icon: 'success',
          width: '32em',
        });
        router.push('/dashboard/adminCompany');
      } catch (error: any) {
        Swal.fire({
          title: 'Error enviando la solicitud',
          text: error,
          icon: 'error',
        });
      }
    }
  };

  return {
    companyProfile,
    handleChange,
    handleChangePhone,
    companyProfileError,
    handleCancel,
    handleSubmit,
  };
};
export default useCompanyProfile;
