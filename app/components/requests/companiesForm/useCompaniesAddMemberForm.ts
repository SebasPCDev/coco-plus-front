// components/yourPath/useCompaniesForm.ts

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import IAddEmployeeInfo from "@/utils/types/requests/companiesFormAddEmployeeInterface";
import IAddMembersErrorInfo from "@/utils/types/requests/companiesFormAddEmployeeErrorInterface";
import { INITIAL_COMPANIES_ADD_EMPLOYEE_INFO, INITIAL_COMPANIES_INFO_ADD_EMPLOYEE_ERROR } from "@/utils/constants/requests/initialCompaniesAddEmployee";
import companyAddEmployeeValidation from "@/utils/formValidation/companyAddEmployeeValidation";
import PostCompanyAddEmployee from "@/utils/posts/postCompanyAddEmployee";

const useCompaniesFormAddEmployee = () => {
  const router = useRouter();
  const [companiesInfoAddEmployee, setcompaniesInfoAddEmployee] = useState<IAddEmployeeInfo>(INITIAL_COMPANIES_ADD_EMPLOYEE_INFO);
  const [companiesInfoErrorAddEmployee, setcompaniesInfoErrorAddEmployee] = useState<IAddMembersErrorInfo>(INITIAL_COMPANIES_INFO_ADD_EMPLOYEE_ERROR);

  useEffect(() => {
    const errors = companyAddEmployeeValidation(companiesInfoAddEmployee);
    setcompaniesInfoErrorAddEmployee(errors);
  }, [companiesInfoAddEmployee]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
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
    router.push("/");
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = companyAddEmployeeValidation(companiesInfoAddEmployee);
    setcompaniesInfoErrorAddEmployee(errors);

    if (Object.values(errors).every(error => error === '')) {
      try {
        const response = await PostCompanyAddEmployee(companiesInfoAddEmployee);
        Swal.fire({
          title: 'Solicitud enviada',
          text: "La respuesta se enviará a tu correo electrónico",
          icon: "success",
          width: '32em'
        });
        router.push("/");
      } catch (error: any) {
        Swal.fire({
          title: "Error enviando la solicitud",
          text: error.message,
          icon: "error",
        });
      }
    } else {
      Swal.fire({
        title: "Error en el formulario",
        text: "Por favor corrige los errores antes de enviar",
        icon: "error",
      });
    }
  };

  return { companiesInfoAddEmployee, companiesInfoErrorAddEmployee, handleChange, handleChangePhone, handleSubmit, handleCancel }
}

export default useCompaniesFormAddEmployee;
