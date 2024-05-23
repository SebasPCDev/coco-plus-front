import IProfileCompany from '@/utils/types/companies/companyProfileInterface'

export const INITIAL_PROFILE_COMPANY: IProfileCompany = {
  id: "",
  name: "",
  email: "",
  phone: "",
  quantityBeneficiaries: 0,
  businessSector: "",
  size: "",
}

export const INITIAL_PROFILE_COMPANY_ERROR = {
  name: "",
  email: "",
  phone: "",
  quantityBeneficiaries: "",
  businessSector: "",
  size: "",
}