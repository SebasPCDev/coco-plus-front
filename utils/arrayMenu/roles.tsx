import {
  HomeIcon,
  DocumentDuplicateIcon,
  UserGroupIcon,
  BookOpenIcon,
  ArchiveBoxIcon,
  BookmarkIcon,
} from '@heroicons/react/24/outline';

import { Roles } from '../types/rolesNavLinkInterface';

const roles: Roles = {
  superadmin: [
    { name: 'Home', href: '/dashboard/superadmin', icon: HomeIcon },
    {
      name: 'Solicitudes',
      href: '/dashboard/superadmin/requests',
      icon: BookOpenIcon,
    },
    {
      name: 'Ver Coworkings',
      href: '/dashboard/superadmin/coworkings',
      icon: ArchiveBoxIcon,
    },
    {
      name: 'Ver Empresas',
      href: '/dashboard/superadmin/companies',
      icon: BookmarkIcon,
    },
    {
      name: 'Lista de Usuarios',
      href: '/dashboard/superadmin/users',
      icon: UserGroupIcon,
    },
  ],
  adminCoworking: [
    { name: 'Home', href: '/dashboard/adminCoworking', icon: HomeIcon },
    {
      name: 'Mis Coworkings',
      href: '/dashboard/adminCoworking/myCoworkings',
      icon: DocumentDuplicateIcon,
    },
  ],
  adminCompany: [
    { name: 'Home', href: '/dashboard/adminCompany', icon: HomeIcon },
    {
      name: 'Empleados',
      href: '/dashboard/adminCompany/empleados',
      icon: DocumentDuplicateIcon,
    },
  ],
  employee: [
    { name: 'Perfil', href: '/dashboard/employee', icon: HomeIcon },
    {
      name: 'Coworkings',
      href: '/dashboard/employee/coworkings',
      icon: HomeIcon,
    },
  ],
};

export default roles;
