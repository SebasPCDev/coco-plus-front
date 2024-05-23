// WorkspaceStatistics.jsx
import React from 'react';
import StatisticCard from '../statisticCard';

const WorkspaceStatistics = () => {
  const hotDeskStats = [
    'Número total de escritorios disponibles: 2,500',
    'Porcentaje de ocupación promedio: 75%',
    'Número de ubicaciones con escritorios: 15',
    'Top 3 ubicaciones más populares: Ciudad 1, Ciudad 2, Ciudad 3',
  ];

  const meetingRoomStats = [
    'Cantidad total de salas de reuniones: 350',
    'Capacidad promedio de personas por sala: 8',
    'Porcentaje de salas con equipo de videoconferencia: 80%',
    'Top 3 salas de reuniones más reservadas: Sala A, Sala B, Sala C',
  ];

  const privateOfficeStats = [
    'Número total de oficinas privadas: 120',
    'Tamaño promedio de oficinas privadas: 25 m²',
    'Porcentaje de oficinas con vistas panorámicas: 40%',
    'Top 3 oficinas privadas más solicitadas: Oficina X, Oficina Y, Oficina Z',
  ];

  const eventSpaceStats = [
    'Cantidad total de espacios para eventos: 25',
    'Capacidad máxima promedio: 150 personas',
    'Porcentaje de espacios con instalaciones de catering: 60%',
    'Top 3 espacios para eventos más populares: Salón 1, Salón 2, Salón 3',
  ];

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-6">Estadísticas de Espacios de Trabajo</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatisticCard title="Hot Desks" stats={hotDeskStats} />
        <StatisticCard title="Salas de Reuniones" stats={meetingRoomStats} />
        <StatisticCard title="Oficinas Privadas" stats={privateOfficeStats} />
        <StatisticCard title="Espacios para Eventos" stats={eventSpaceStats} />
      </div>
    </div>
  );
};

export default WorkspaceStatistics;