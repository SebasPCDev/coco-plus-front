export interface statusItem {
  name: string;
  value: string;
}

export interface statusHandler {
  [key: string]: statusItem[];
}

const statusHandler: statusHandler = {
  users: [
    { name: 'active', value: 'Activo' },
    { name: 'inactive', value: 'Inactivo' },
    { name: 'blocked', value: 'Bloqueado' },
  ],
  companies: [
    { name: 'pending', value: 'Pendiente' },
    { name: 'acepted', value: 'Aceptado' },
    { name: 'completed', value: 'Completado' },
    { name: 'active', value: 'Activo' },
    { name: 'inactive', value: 'Inactivo' },
  ],
  coworkings: [
    { name: 'pending', value: 'Pendiente' },
    { name: 'active', value: 'Activo' },
    { name: 'inactive', value: 'Inactivo' },
  ],
};

export default statusHandler;
