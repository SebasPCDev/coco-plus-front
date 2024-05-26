import { ICompanyProfile } from '../types/companies/companyProfileInterface';
import ICompanyProfileFormError from '../types/companies/companyProfileFormError';

export default function profileCompanyValidation(
  values: ICompanyProfile,
): ICompanyProfileFormError {
  let errors: ICompanyProfileFormError = {};
  if (!values.name) {
    errors.name = 'El nombre es requerido';
  } else if (
    !/^(?=\S)(?!.*[^\x20-\x7E])(?=.{3,50}$)[a-zA-Z ]+$/.test(values.name)
  ) {
    errors.name = 'El nombre es inválido';
  } else if (!/^\s*(\+\d{1,3}\s*)?\d{9,15}\s*$/.test(values.phone)) {
    errors.phone = 'El teléfono debe tener entre 11 y 15 caracteres';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'El email es requerido';
  } else if (
    !values.quantityBeneficiaries &&
    values.quantityBeneficiaries !== 0
  ) {
    errors.quantityBeneficiaries = 'La cantidad de beneficiarios es requerida';
  } else if (
    isNaN(values.quantityBeneficiaries) ||
    values.quantityBeneficiaries <= 0
  ) {
    errors.quantityBeneficiaries = 'Debe tener mínimo un beneficiario';
  } else if (!values.businessSector) {
    errors.businessSector = 'Debe definir un sector empresarial';
  } else if (!/^.{2,50}$/.test(values.businessSector)) {
    errors.businessSector =
      'El sector empresarial debe tener entre 2 y 50 caracteres';
  } else if (!values.size) {
    errors.size = 'Debe definir el tamaño de la empresa';
  }

  return errors;
}
