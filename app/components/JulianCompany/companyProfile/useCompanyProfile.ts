"use client";

import updProfileCompany from '@/utils/api/company/updProfileCompany';
import getProfile from '@/utils/api/users/getProfile';
import { INITIAL_PROFILE_COMPANY, INITIAL_PROFILE_COMPANY_ERROR } from '@/utils/constants/companies/initialProfileCompany';
import { ICompanyProfile } from '@/utils/types/companies/companyProfile';
import ICompanyProfileFormError from '@/utils/types/companies/companyProfileFormError';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const useCompanyProfile = () => {
  const router = useRouter();
  const [companyProfile, setCompanyProfile] = useState<ICompanyProfile>(INITIAL_PROFILE_COMPANY);
  const [companyProfileError, setCompanyProfileError] =
    useState<ICompanyProfileFormError>(INITIAL_PROFILE_COMPANY_ERROR);

  const getData = async () => {
    const data = await getProfile();
    console.log("data.employee.company", data.employee.company);
    setCompanyProfile(data.employee.company)
  }

  useEffect(() => {
    getData();
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;

    setCompanyProfile({
      ...companyProfile,
      [name]: value,
    });
  };

  const handleChangePhone = (name: string, value: string) => {
    setCompanyProfile({
      ...companyProfile,
      [name]: value,
    });
  };

  const handleCancel = () => {
    router.push("/");
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Data", companyProfile);

    const { id, totalPasses, ...data } = companyProfile

    try {
      const response = await updProfileCompany(companyProfile.id, data);
      console.log("response", response);
      await Swal.fire({
        title: 'Perfil modificado',
        // text: 'Perfil modificado',
        icon: 'success',
        width: '32em'
      });
      router.push("/dashboard/adminCompany");
    } catch (error: any) {
      console.log("Error", error);
      Swal.fire({
        title: "Error enviando la solicitud",
        text: error,
        icon: "error",
      });
    }
  }

  return { companyProfile, handleChange, handleChangePhone, companyProfileError, handleCancel, handleSubmit }
}
export default useCompanyProfile