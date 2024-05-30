import {
  HomeIcon,
  DocumentDuplicateIcon,
  UserGroupIcon,
  BookOpenIcon,
  ArchiveBoxIcon,
  BookmarkIcon,
  UserCircleIcon,
  UsersIcon,
  PlusCircleIcon,
  BuildingOffice2Icon,
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
    { name: 'Inicio', href: '/dashboard/adminCoworking', icon: HomeIcon },
    {
      name: 'Mis Coworkings',
      href: '/dashboard/adminCoworking/myCoworkings',
      icon: BuildingOffice2Icon,
    },
    {
      name: 'Historial Reservas',
      href: '/dashboard/adminCoworking/bookingsList',
      icon: BookOpenIcon,
    },
  ],
  adminCompany: [
    { name: 'Inicio', href: '/dashboard/adminCompany', icon: HomeIcon },
    {
      name: 'Perfil empresa',
      href: '/dashboard/adminCompany/companyProfile',
      icon: UserCircleIcon,
    },
    {
      name: 'Empleados',
      href: '/dashboard/adminCompany/empleados',
      icon: UsersIcon,
    },
  ],
  employee: [
    { name: 'Inicio', href: '/dashboard/employee/profile', icon: HomeIcon },
    {
      name: 'Historial Reservas',
      href: '/dashboard/employee/bookingsHistory',
      icon: BookOpenIcon,
    },
    {
      name: 'Nueva Reserva',
      href: '/dashboard/employee/bookings',
      icon: PlusCircleIcon,
    },
  ],
  coworking: [
    { name: 'Inicio', href: '/dashboard/coworking', icon: HomeIcon },
    {
      name: 'Historial Reservas',
      href: '/dashboard/coworking/bookingsList',
      icon: BookOpenIcon,
    },
  ],
};

export default roles;
