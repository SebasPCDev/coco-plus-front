import React from 'react';
import ProgressCircle from '@/app/components/JulianCompany/home/homeEstadistico/2ProgressCircle';
import HomeSuperAdmin from '@/app/components/HomeSuperAdmin';

interface Stat {
  label: string;
  value: number;
  progress?: boolean;
  locations?: string[];
  unit?: string;
}

export const Page = () => {
  const SuperadminStats: Stat[] = [
    { label: 'Cantidad de coworkings Activos', value: 75, progress: true },
    { label: 'Cantidad de empresas activas', value: 65, progress: true },
    { label: 'Cantidad de pases Asignados', value: 111 },
    { label: 'Cantidad de pases redimidos', value: 111 },
  ];

  return (
    <HomeSuperAdmin/>
  );
};

export default Page;
