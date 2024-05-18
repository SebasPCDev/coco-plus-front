import IChangePassForm from '../types/auth/changePassFormInterface';
import IChangePassErrorForm from '../types/auth/changePassFormErrorInterface';

export default function changePassValidation(values: IChangePassForm): IChangePassErrorForm {
  let errors: IChangePassErrorForm = {};
  if (!values.password) {
    errors.password = "El password es requerido";
  } else if (!values.password) {
    errors.password = "La contraseña es requerida";
  } else if (values.password !== values.confPassword) {
    errors.confPassword = "La contraseña no coincide";
  }
  return errors;
}
