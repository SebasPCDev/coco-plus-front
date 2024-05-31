import ICoworkingsErrorInfo from '../types/requests/coworkingFormErrorInterface';
import ICoworkingsInfo from '../types/requests/coworkingsFormInterface';

export default function newCoworkingValidation(
  values: ICoworkingsInfo,
): ICoworkingsErrorInfo {
  let errors: ICoworkingsErrorInfo = {};
  if (!values.name) {
    errors.name = 'El nombre es requerido';
  } else if (
    !/^(?=\S)(?!.*[^\x20-\x7E])(?=.{2,50}$)[a-zA-Z ]+$/.test(values.name)
  ) {
    errors.name = 'El nombre es inválido';
  } else if (!/^\s*(\+\d{1,3}\s*)?\d{11,15}\s*$/.test(values.phone)) {
    errors.phone = 'El teléfono debe tener entre 11 y 15 caracteres';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'El correo es requerido';
  } else if (!/^.{5,255}$/.test(values.address)) {
    errors.address = 'La dirección debe tener entre 5 y 255 caracteres';
  } else if (!values.open) {
    errors.open = 'La hora de apertura es requerida';
    /* Implementar array de horas que Sebas pasó */
  } else if (!values.close) {
    errors.close = 'La hora de cierre es requerida';
  }
  return errors;
}
