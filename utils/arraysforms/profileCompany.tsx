export interface elementForm {
  name: string;
  label: string;
  type: string;
  placeholder: string;
  required: boolean;
}

export const formProfileCompany: elementForm[] = [
  {
    name: 'name',
    label: 'Nombre de la empresa',
    type: 'text',
    placeholder: 'Nombre de la empresa',
    required: true,
  },
  {
    name: "email",
    label: "Correo del coworking",
    type: "email",
    placeholder: "Email de la compañía o coworking",
    required: true,
  },
  {
    name: "phone",
    label: "Teléfono del coworking",
    type: "text",
    placeholder: "Phone de la compañía o coworking",
    required: true,
  },
  {
    name: 'quantityBeneficiaries',
    label: 'Cantidad de beneficiarios',
    type: 'number',
    placeholder: 'Cantidad de empleados con el beneficio',
    required: false,
  },
  {
    name: 'businessSector',
    label: 'Sector empresarial',
    type: 'text',
    placeholder: 'Sector empresarial',
    required: false,
  },
  {
    name: 'size',
    label: 'Tamaño de la empresa (empleados)',
    type: 'number',
    placeholder: 'Tamaño de la empresa',
    required: true,
  },
];
