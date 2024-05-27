export enum Role {
  SUPERADMIN = 'superadmin',
  ADMIN_COMPANY = 'adminCompany',
  EMPLOYEE = 'employee',
  ADMIN_COWORKING = 'adminCoworking',
  COWORKING = 'coworking',
}

export default function tradRoles(role: Role) {
  switch (role) {
    case Role.SUPERADMIN:
      return 'Superadmin';
    case Role.ADMIN_COMPANY:
      return 'Admin Empresa';
    case Role.EMPLOYEE:
      return 'Empleado';
    case Role.ADMIN_COWORKING:
      return 'Admin Coworking';
    case Role.COWORKING:
      return 'Recepcionista';
    default:
      return 'No definido';
  }
}
