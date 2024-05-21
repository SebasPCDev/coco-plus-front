import IChangePassForm from '../types/auth/changePassFormInterface';
import IChangePassErrorForm from '../types/auth/changePassFormErrorInterface';

export default function changePassValidation(values: IChangePassForm): IChangePassErrorForm {
  let errors: IChangePassErrorForm = {};
  if (!values.password) {
    errors.password = "Requerido";
  } else if (!/^.{8,15}$/.test(values.password)) {
    errors.password = "Debe tener entre 8 y 15 caracteres";
  } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/.test(values.password)) {
    errors.password = "Debe tener al menos una míscula, una mayúscula y un caracter especial (!@#$%^&*)";
  } else if (values.password !== values.confPassword) {
    errors.confPassword = "La confirmación no coincide";
  }
  return errors;
}

