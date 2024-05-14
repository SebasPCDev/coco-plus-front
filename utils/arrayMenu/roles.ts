import { HomeIcon, DocumentDuplicateIcon } from '@heroicons/react/24/outline';

const roles = {
  superadmin: [
    { name: 'Home', href: '/dashboard', icon: HomeIcon },
    {
      name: 'Solicitudes Empresas',
      href: '/dashboard/requestsCompanies',
      icon: DocumentDuplicateIcon,
    },
    {
      name: 'Solicitudes Coworkings',
      href: '/dashboard/requestsCoworkings',
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
