export interface IChangePassForm {
  name: string;
  label: string;
  type: string;
  placeholder: string;
}

export const ChangePassFormArray: IChangePassForm[] = [
  {
    name: "password",
    label: "Contraseña",
    type: "password",
    placeholder: "Contraseña",
  },
  {
    name: "confPassword",
    label: "Confirmación contraseña",
    type: "password",
    placeholder: "Conf contraseña",
  },
];
