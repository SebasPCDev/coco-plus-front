'use client';
import React, { useEffect, useState } from 'react';
import ProgressCircle from '@/app/components/JulianCompany/home/homeEstadistico/2ProgressCircle';
import styles from './HomeSuperAdmin.module.css';
import { fetchSuperadminStats } from './SuperadminStats';
import Link from 'next/link';

interface Stat {
  label: any;
  value: any;
  progress?: any;
  locations?: any[];
  unit?: any;
  link?: any;
}

export const HomeSuperAdmin = () => {
  const [superadminStats, setSuperadminStats] = useState<Stat[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const stats = await fetchSuperadminStats();
        if (superadminStats.length === 0) setSuperadminStats(stats);
      } catch (error) {
        console.error(
          'Error al obtener las estadísticas del superadministrador:',
          error,
        );
      }
    };

    fetchData();
  }, []);

  console.log(superadminStats);

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
