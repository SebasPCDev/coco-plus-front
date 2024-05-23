export interface ElementForm {
    name: string;
    label: string;
    type: string;
    placeholder: string;
    required: boolean;
  }
  
  export const formDataCompaniesAddEmployee: ElementForm[] = [
    {
      name: 'firstName',
      label: 'Nombre',
      type: 'text',
      placeholder: 'Nombre',
      required: true,
    },
    {
      name: 'lastName',
      label: 'Apellido',
      type: 'text',
      placeholder: 'Apellido',
      required: true,
    },
    {
      name: 'email',
      label: 'Correo electrónico',
      type: 'email',
      placeholder: 'Email',
      required: true,
    },
    {
      name: 'phone',
      label: 'Teléfono',
      type: 'text',
      placeholder: '+54',
      required: false,
    },
    {
      name: 'identification',
      label: 'Identificación',
      type: 'text',
      placeholder: 'Identificación',
      required: true,
    },
    {
      name: 'jobRole',
      label: 'Cargo',
      type: 'text',
      placeholder: 'Cargo dentro de la empresa',
      required: true,
    },
    {
      name: 'monthlyTokenLimit',
      label: 'Límite de pases mensuales (opcional)',
      type: 'number',
      placeholder: 'Límite de pases mensuales',
      required: false,
    },
  ];
  