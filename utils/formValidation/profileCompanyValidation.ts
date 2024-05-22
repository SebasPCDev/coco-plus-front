import { ICompanyProfile } from '../types/companies/companyProfile';
import ICompanyProfileFormError from '../types/companies/companyProfileFormError';

export default function profileCompanyValidation(values: ICompanyProfile): ICompanyProfileFormError {
  let errors: ICompanyProfileFormError = {};
  if (!values.name) {
    errors.name = "Requerido";
  } else if (!/^(?=\S)(?!.*[^\x20-\x7E])(?=.{3,50}$)[a-zA-Z ]+$/.test(values.name)) {
    errors.name = "El nombre es inválido";
  } else if (!/^\s*(\+\d{1,3}\s*)?\d{11,15}\s*$/.test(values.phone)) {
    errors.phone = "Debe tener entre 11 y 15 caracteres";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Requerido";
  }
  else if (!values.quantityBeneficiaries && values.quantityBeneficiaries !== 0) {
    errors.quantityBeneficiaries = "Requerido";
  } else if (isNaN(values.quantityBeneficiaries) || values.quantityBeneficiaries < 0) {
    errors.quantityBeneficiaries = "Mínimo un beneficiario";
  } else if (!values.businessSector) {
    errors.businessSector = "Requerido";
  } else if (!/^.{2,50}$/.test(values.businessSector)) {
    errors.businessSector = "Requerido";
  } else if (!values.size) {
    errors.size = "Requerido";
  }

  return errors;
}