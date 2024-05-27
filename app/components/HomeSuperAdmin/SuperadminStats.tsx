// superadminStats.ts
import getForInfoCompanies from '@/utils/gets/getForInfoCompanies';
import getForInfoRequests from '@/utils/gets/getForInfoRequests';
import getForInfoUsers from '../../../utils/gets/getForInfoUsers';
import Cookie from 'js-cookie';
import getForInfoCoworkings from '@/utils/gets/getForInfoCoworkings';

interface Stat {
  label: any;
  value: any;
  progress?: any;
  locations?: any[];
  unit?: any;
  link?: any;
}

export const fetchSuperadminStats = async (): Promise<Stat[]> => {
  const token: string = Cookie.get('token')!;
  let activePercentageCow = null;
  let activePercentage = null;
  let userQuantity = null;
  let totalRequests = null;
  let totalPendingRequests = null;

  try {
    activePercentageCow = await getForInfoCoworkings(token);
    activePercentage = await getForInfoCompanies(token);
    totalRequests = await getForInfoRequests(token);
    userQuantity = await getForInfoUsers(token);
  } catch (error) {
    console.error('Error al obtener la cantidad de usuarios:', error);
  }

  totalPendingRequests = totalRequests.filter(
    (request: any) => request.status === 'pending',
  );

  console.log(totalPendingRequests.length);

  const stats: Stat[] = [
    {
      label: 'Coworkings Activos',
      value: activePercentageCow !== null && activePercentageCow,
      progress: false,
      link: '/dashboard/superadmin/coworkings',
    },
    {
      label: 'Empresas Activas',
      value: activePercentage !== null && activePercentage,
      progress: false,
      link: '/dashboard/superadmin/companies',
    },
    {
      label: 'Usuarios registrados',
      value: userQuantity !== null ? userQuantity : 'Cargando...',
      link: '/dashboard/superadmin/users',
    },
    {
      label: 'Total de Solicitudes',
      value:
        totalRequests.length !== null ? totalRequests.length : 'Cargando...',
      link: '/dashboard/superadmin/requests',
    },
    {
      label: 'Total de Solicitudes Pendientes',
      value:
        totalPendingRequests.length !== null
          ? totalPendingRequests.length
          : 'Cargando...',
      link: '/dashboard/superadmin/requests',
    },
  ];

  return stats;
};
