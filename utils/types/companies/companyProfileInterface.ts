import { CompanyStatus } from './companyStatus.enum';

export interface ICompanyProfile {
  id: string;
  name: string;
  email: string;
  phone: string;
  quantityBeneficiaries: number;
  businessSector: string;
  size: string;
  totalPasses: number;
  status: string;
}

export interface ICompanyProfileUpdDto extends Partial<Omit<ICompanyProfile, 'id'>> { }


