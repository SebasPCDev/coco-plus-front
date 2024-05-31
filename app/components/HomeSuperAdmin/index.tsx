// 'use client';
import React from 'react';
import ProgressCircle from '@/app/components/JulianCompany/home/homeEstadistico/2ProgressCircle';
import styles from './HomeSuperAdmin.module.css';
import Link from 'next/link';
import getAllCoworkings from '@/utils/api/coworkings/getAllCoworkings';
import getAllCompanies from '@/utils/api/company/getAllCompanies';
import getAllRequests from '@/utils/api/requests/getAllrequests';
import getAllUsers from '@/utils/api/users/getAllUsers';

interface Stat {
  label: any;
  value: any;
  progress?: any;
  locations?: any[];
  unit?: any;
  link?: any;
}

export const HomeSuperAdmin = async () => {
  const allCoworkings = await getAllCoworkings();
  const allCoworkingsActive = allCoworkings.filter(coworking => coworking.status === 'active')

  const allCompanies = await getAllCompanies();
  const allCompaniesActive = allCompanies.filter(company => company.status === 'active')

  const allRequests = await getAllRequests();
  const allRequestsPending = allRequests.filter(requests => requests.status === 'pending')

  const allUsers = await getAllUsers();

  const superadminStats: Stat[] = [
    {
      label: 'Coworkings Activos',
      value: allCoworkingsActive.length,
      progress: false,
      link: '/dashboard/superadmin/coworkings',
    },
    {
      label: 'Empresas Activas',
      value: allCompaniesActive.length,
      progress: false,
      link: '/dashboard/superadmin/companies',
    },
    {
      label: 'Usuarios registrados',
      value: allUsers.users.length,
      link: '/dashboard/superadmin/users',
    },
    {
      label: 'Total de Solicitudes',
      value: allRequests.length,
      link: '/dashboard/superadmin/requests',
    },
    {
      label: 'Total de Solicitudes Pendientes',
      value: allRequestsPending.length,
      link: '/dashboard/superadmin/requests',
    },
  ];

  return (
    <div className={styles.gralgridtextcont}>
      <h2 className="mb-8 text-3xl font-bold">
        Estadísticas Generales de la plataforma.
      </h2>
      <div className={styles.gridcont}>
        {superadminStats.map((stat, index) => (
          <div key={index} className="">
            <div className={styles.container}>
              <div className={styles.box}>
                <h3 className="mb-4 text-xl font-semibold">{stat.label}</h3>
                <div className={styles.estraGraphContainer}>
                  <div className="flex items-center justify-between">
                    {stat.progress ? (
                      <ProgressCircle
                        value={stat.value as number}
                        color="green"
                      />
                    ) : (
                      <span
                        style={{ fontSize: '2.5rem' }}
                        className={styles.titledecor}
                      >
                        {stat.value} {stat.unit || ''}
                      </span>
                    )}
                  </div>
                  <div className="">
                    <Link href={stat.link}>
                      <button className="btn btn-confirm">Ver mas</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeSuperAdmin;
