export interface roleItem {
  name: string;
  value: string;
}

export interface RoleHandler {
  [key: string]: roleItem[];
}

const roleHandler: RoleHandler = {
  users: [
    { name: 'adminCoworking', value: 'Admin Coworking' },
    { name: 'adminCompany', value: 'Admin Empresa' },
    { name: 'employee', value: 'Empleado' },
    { name: 'coworking', value: 'Recepcionista' },
    { name: 'superadmin', value: 'SuperAdmin' },
  ],
};

export default roleHandler;
