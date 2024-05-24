interface IAddMembersErrorInfo {
    name?: string;
    lastname?: string;
    email?: string;
    phone?: string;
    identification?: string;
    role?: string;
    position?: string;
    passes?: string;
  }
  
  export default IAddMembersErrorInfo;
  
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