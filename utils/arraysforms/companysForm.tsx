export interface elementForm {
  name: string;
  label: string;
  type: string;
  placeholder: string;
  required: boolean;
}

export const formDataCompanies: elementForm[] = [
  {
    name: "name",
    label: "Nombre",
    type: "text",
    placeholder: "Nombre",
    required: true,
  },
  {
    name: "lastname",
    label: "Apellido",
    type: "text",
    placeholder: "Apellido",
    required: true,
  },
  {
    name: "phone",
    label: "Teléfono",
    type: "text",
    placeholder: "Teléfono",
    required: true,
  },
  {
    name: "email",
    label: "Correo electronico",
    type: "email",
    placeholder: "Email",
    required: true,
  },
  {
    name: "identification",
    label: "Número de documento",
    type: "text",
    placeholder: "Número de documento",
    required: true,
  },
  {
    name: "position",
    label: "Cargo",
    type: "text",
    placeholder: "Cargo dentro de la empresa",
    required: true,
  },
  {
    name: "companyName",
    label: "Nombre de la empresa",
    type: "text",
    placeholder: "Nombre de la empresa",
    required: true,
  },
  {
    name: "companyEmail",
    label: "Email de la empresa",
    type: "email",
    placeholder: "Email de la empresa",
    required: true,
  },
  {
    name: "companyPhone",
    label: "Teléfono de la empresa",
    type: "text",
    placeholder: "Teléfono de la empresa",
    required: true,
  },
  {
    name: "quantityBeneficiaries",
    label: "Cantidad de beneficiarios",
    type: "number",
    placeholder: "Cantidad de empleados con el beneficio",
    required: false,
  },
  {
    name: "businessSector",
    label: "Sector empresarial",
    type: "text",
    placeholder: "Sector empresarial",
    required: false,
  },
  {
    name: "size",
    label: "Tamaño de la empresa (empleados)",
    type: "number",
    placeholder: "Tamaño de la empresa",
    required: true,
  },
  {
    name: "message",
    label: "Mensaje",
    type: "text",
    placeholder: "Mensaje",
    required: false,
  },
];
