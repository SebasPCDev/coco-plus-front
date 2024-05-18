export enum CompanySize {
  MICRO_BUSINESS = '0 - 30',
  SMALL_BUSINESS = '31 - 100',
  MEDIUM_BUSINESS = '101 - 500',
  LARGE_BUSINESS = '501 - en adelante'
}

export const COMPANY_SIZE = [
  { id: CompanySize.MICRO_BUSINESS, value: CompanySize.MICRO_BUSINESS },
  { id: CompanySize.SMALL_BUSINESS, value: CompanySize.SMALL_BUSINESS },
  { id: CompanySize.MEDIUM_BUSINESS, value: CompanySize.MEDIUM_BUSINESS },
  { id: CompanySize.LARGE_BUSINESS, value: CompanySize.LARGE_BUSINESS }
]