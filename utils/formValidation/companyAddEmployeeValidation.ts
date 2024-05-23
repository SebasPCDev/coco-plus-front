import IAddEmployeeInfo from "../types/requests/companiesFormAddEmployeeInterface";
import IAddMembersErrorInfo from "../types/requests/companiesFormAddEmployeeErrorInterface";

export default function companyAddEmployeeValidation(values: IAddEmployeeInfo): IAddMembersErrorInfo {
  let errors: IAddMembersErrorInfo = {};
  if (!/^(?=\S)(?!.*[^\x20-\x7E])(?=.{3,50}$)[a-zA-Z ]+$/.test(values.firstName)) errors.firstName = 'El nombre es obligatorio';
  if (!/^(?=\S)(?!.*[^\x20-\x7E])(?=.{3,50}$)[a-zA-Z ]+$/.test(values.lastName)) errors.lastName = 'El apellido es obligatorio';
  if (!/^\s*(\+\d{1,3}\s*)?\d{11,15}\s*$/.test(values.phone)) errors.phone = "Debe tener entre 11 y 15 caracteres";
  if (!/\S+@\S+\.\S+/.test(values.email)) errors.email = 'El correo electrónico es obligatorio';
  if (!/^[0-9-]{7,15}$/.test(values.identification)) errors.identification = 'La identificación debe tener entre 7 y 15 números';
  if (!/^[a-zA-Z\s\-']{3,50}$/.test(values.jobRole)) errors.jobRole = 'El puesto debe tener entre 3 y 50 caracteres y puede incluir letras, espacios, guiones y apóstrofes';

  return errors;
};


