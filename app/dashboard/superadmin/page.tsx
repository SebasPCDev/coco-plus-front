import React from 'react';
import ProgressCircle from '@/app/components/JulianCompany/home/homeEstadistico/2ProgressCircle';

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
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-8 text-center">Estadisticas Generales de la plataforma.</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SuperadminStats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">{stat.label}</h3>
            <div className="flex items-center justify-between">
              {stat.progress ? (
                <ProgressCircle value={stat.value} color="green" />
              ) : (
                <span className="text-2xl font-bold">
                  {stat.value} {stat.unit || ''}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
