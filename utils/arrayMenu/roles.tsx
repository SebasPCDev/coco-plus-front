import { HomeIcon, DocumentDuplicateIcon } from '@heroicons/react/24/outline';

import { Roles, RoleItem } from '../types/rolesNavLinkInterface';

const roles: Roles = {
  superadmin: [
    { name: 'Home', href: '/dashboard/superadmin', icon: HomeIcon },
    {
      name: 'Solicitudes',
      href: '/dashboard/superadmin/reuqests',
      icon: DocumentDuplicateIcon,
    },
  ],
  admincoworking: [
    { name: 'Home', href: '/dashboard', icon: HomeIcon },
    {
      name: 'Ver Coworkings',
      href: '/dashboard/coworkings',
      icon: DocumentDuplicateIcon,
    },
  ],
};

export default roles;
