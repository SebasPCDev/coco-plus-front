export enum CompanySize {
  MICRO_BUSINESS = '1 - 10',
  SMALL_BUSINESS = '10 - 50',
  MEDIUM_BUSINESS = '50 - 250',
  LARGE_BUSINESS = '250 - 500',
  EXTRALARGE_BUSINESS = 'más de 500',
}

export const COMPANY_SIZE = [
  { id: CompanySize.MICRO_BUSINESS, value: CompanySize.MICRO_BUSINESS },
  { id: CompanySize.SMALL_BUSINESS, value: CompanySize.SMALL_BUSINESS },
  { id: CompanySize.MEDIUM_BUSINESS, value: CompanySize.MEDIUM_BUSINESS },
  { id: CompanySize.LARGE_BUSINESS, value: CompanySize.LARGE_BUSINESS },
  {
    id: CompanySize.EXTRALARGE_BUSINESS,
    value: CompanySize.EXTRALARGE_BUSINESS,
  },
];
