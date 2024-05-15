import { HomeIcon, DocumentDuplicateIcon } from '@heroicons/react/24/outline';

const roles = {
  superadmin: [
    { name: 'Home', href: '/dashboard', icon: HomeIcon },
    {
      name: 'Solicitudes Empresas',
      href: '/dashboard/superadmin/requestsCompanies',
      icon: DocumentDuplicateIcon,
    },
    {
      name: 'Solicitudes Coworkings',
      href: '/dashboard/superadmin/requestsCoworkings',
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
