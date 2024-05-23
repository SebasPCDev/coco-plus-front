export interface ICompanyProfile {
  id: string;
  name: string;
  email: string;
  phone: string;
  quantityBeneficiaries: number;
  businessSector: string;
  size: number;
  totalPasses: number;
}

export interface ICompanyProfileUpdDto extends Partial<Omit<ICompanyProfile, 'id'>> { }


