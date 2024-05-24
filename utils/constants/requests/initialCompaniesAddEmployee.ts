import IAddEmployeeInfo from "@/utils/types/requests/companiesFormAddEmployeeInterface";
import IAddMembersErrorInfo from "@/utils/types/requests/companiesFormAddEmployeeErrorInterface";

export const INITIAL_COMPANIES_ADD_EMPLOYEE_INFO: IAddEmployeeInfo = {
  name: '',
  lastname: '',
  email: '',
  phone: '',
  identification: '',
  position: '',
  role: '',
  status: '',
  passes: 0,
  passesAvailable: 0,
  companyId: "",
};

export const INITIAL_COMPANIES_INFO_ADD_EMPLOYEE_ERROR: IAddMembersErrorInfo = {
  name: '',
  lastname: '',
  email: '',
  phone: '',
  identification: '',
  /* role: '', */
  position: '',
  /* status: '', */
  passes: "", 
  /* passesAvailable: 0, */
  /* companyId: "", */ 
};


