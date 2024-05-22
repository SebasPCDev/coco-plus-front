export interface elementForm {
  name: string;
  label: string;
  type: string;
  placeholder: string;
  required: boolean;
}

export const formDataCompanies: elementForm[] = [
  {
    name: 'name',
    label: 'Nombre',
    type: 'text',
    placeholder: 'Nombre',
    required: true,
  },
  {
    name: 'lastname',
    label: 'Apellido',
    type: 'text',
    placeholder: 'Apellido',
    required: true,
  },
  {
    name: 'phone',
    label: 'Teléfono',
    type: 'text',
    placeholder: '+54',
    required: true,
  },
  {
    name: 'email',
    label: 'Correo electronico',
    type: 'email',
    placeholder: 'Email',
    required: true,
  },
  {
    name: 'position',
    label: 'Cargo',
    type: 'text',
    placeholder: 'Cargo dentro de la empresa',
    required: true,
  },
  {
    name: 'companyName',
    label: 'Nombre de la empresa',
    type: 'text',
    placeholder: 'Nombre de la empresa',
    required: true,
  },
  {
    name: 'size',
    label: 'Tamaño de la empresa (empleados)',
    type: 'number',
    placeholder: 'Tamaño de la empresa',
    required: true,
  },
  {
    name: 'message',
    label: 'Mensaje',
    type: 'text',
    placeholder: 'Mensaje',
    required: false,
  },
];
