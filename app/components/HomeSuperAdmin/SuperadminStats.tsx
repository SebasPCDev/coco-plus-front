// superadminStats.ts
import getForInfoCompanies from '@/utils/gets/getForInfoCompanies';
import getForInfoRequests from '@/utils/gets/getForInfoRequests';
import getForInfoUsers from '../../../utils/gets/getForInfoUsers';
import Cookie from "js-cookie";
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
  const token: string = Cookie.get('token');
  let activePercentageCow = null;
  let activePercentage = null;
  let userQuantity = null;
  let totalRequests = null;

  try {
    activePercentageCow = await getForInfoCoworkings(token)
    activePercentage = await getForInfoCompanies(token)
    totalRequests = await getForInfoRequests(token)
    userQuantity = await getForInfoUsers(token);
  } catch (error) {
    console.error('Error al obtener la cantidad de usuarios:', error);
  }

  const stats: Stat[] = [
    { 
      label: 'Cantidad de coworkings Activos', 
      value: activePercentageCow !== null && activePercentageCow, 
      progress: true,
      link: '/dashboard/superadmin/coworkings'
    },
    { 
      label: 'Cantidad de empresas activas', 
      value: activePercentage !== null && activePercentage, 
      progress: true,
      link: '/dashboard/superadmin/companies'
    },
    { 
      label: 'Cantidad de Usuarios registrados', 
      value: userQuantity !== null ? userQuantity : 'Cargando...',
      link: '/dashboard/superadmin/users'
    },
    { 
      label: 'Cantidad de solicitudes', 
      value: totalRequests !== null ? totalRequests : 'Cargando...',
      link: '/dashboard/superadmin/requests'
    },
  ];

  return stats;
};
