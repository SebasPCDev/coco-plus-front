import React from 'react';
import ProgressCircle from '../2ProgressCircle';

// Define una interfaz para los objetos estadísticos
interface Stat {
  label: string;
  value: number;
  progress?: boolean;
  locations?: string[];
  unit?: string;
}

const WorkspaceStatistics = () => {
  const employeeStats: Stat[] = [
    { label: 'Escritorios utilizados por empleado', value: 20 },
    { label: 'Promedio de ocupación de escritorios', value: 75, progress: true },
    { label: 'Reuniones por empleado', value: 5 },
    { label: 'Capacidad promedio de salas utilizadas', value: 60, progress: true },
    { label: 'Videoconferencias', value: 40, progress: true },
    { label: 'Oficinas privadas reservadas', value: 3 },
    { label: 'Promedio de ocupación de oficinas privadas', value: 70, progress: true },
    { label: 'Eventos asistidos por empleado', value: 4 },
    { label: 'Capacidad promedio de eventos', value: 80, progress: true },
  ];

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-8 text-center">Estadísticas de Uso por Empleado</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {employeeStats.map((stat, index) => (
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

export default WorkspaceStatistics;
