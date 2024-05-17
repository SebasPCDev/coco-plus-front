import React from 'react';
import WorkspaceCard from '../workspaceCard';

const workspaceOptions = [
  {
    image: 'https://www.wework.com/es-LA/ideas/wp-content/uploads/sites/15/2019/11/Web_150DPI-20191106_WeWork_Gateway-1-Salt-Lake-City_004-1120x630.jpg',
    title: 'Hot Desks',
    description: 'Disponible por horas o días en miles de lugares.',
  },
  {
    image: 'https://www.appliedglobal.com/wp-content/uploads/How-to-Create-a-Modern-Meeting-Room-Setup-2048x1152.png', 
    title: 'Salas de Reuniones',
    description: 'Encuentre la sala de reuniones perfecta para usted y su equipo.',
  },
  {
    image: 'https://assets-global.website-files.com/6087aa810ab31f22c090aad8/61af4f83d2583b2c8b2988ee_Benefits%20of%20Private%20Offices.jpg',
    title: 'Oficinas Privadas',
    description: 'Book a private office for the day at one of our top venues.',
  },
  {
    image: 'https://colony.work/wp-content/uploads/2019/12/Copy-of-StarBoulevard-56-min-1024x532.jpg',
    title: 'Espacios para eventos',
    description: 'Reserve una oficina privada para pasar el día en uno de nuestros mejores lugares.',
  },
];

const WorkspaceGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {workspaceOptions.map((option, index) => (
        <WorkspaceCard
          key={index}
          image={option.image}
          title={option.title}
          description={option.description}
        />
      ))}
    </div>
  );
};

export default WorkspaceGrid;