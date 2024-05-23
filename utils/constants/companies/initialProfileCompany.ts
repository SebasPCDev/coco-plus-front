import { ICompanyProfile }  from '@/utils/types/companies/companyProfileInterface'

export const INITIAL_PROFILE_COMPANY: ICompanyProfile = {
  id: "",
  name: "",
  email: "",
  phone: "",
  quantityBeneficiaries: 0,
  businessSector: "",
  size: "",
  totalPasses: 0,
  status: "",
}

export const INITIAL_PROFILE_COMPANY_ERROR = {
  name: "",
  email: "",
  phone: "",
  quantityBeneficiaries: "",
  businessSector: "",
  size: "",
}