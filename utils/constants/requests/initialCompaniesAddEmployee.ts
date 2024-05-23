import IAddEmployeeInfo from "@/utils/types/requests/companiesFormAddEmployeeInterface";
import IAddMembersErrorInfo from "@/utils/types/requests/companiesFormAddEmployeeErrorInterface";

export const INITIAL_COMPANIES_ADD_EMPLOYEE_INFO: IAddEmployeeInfo = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  identification: '',
  jobRole: '',
  monthlyTokenLimit: undefined,
};

export const INITIAL_COMPANIES_INFO_ADD_EMPLOYEE_ERROR: IAddMembersErrorInfo = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  identification: '',
  jobRole: '',
  monthlyTokenLimit: '',
};
