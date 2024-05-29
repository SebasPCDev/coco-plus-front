import React from 'react';
import Navbar from './primerHome/navbarHome';
import SectionTitle from './primerHome/sectionTitle';
import WorkspaceGrid from './primerHome/workspaceGrid';
import TopPicksList from './primerHome/topPicksList';
import Footer from '../../Footer';

const HomePage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto py-8">
        <SectionTitle title="Comienza a explorar espacios de trabajo" />
        <WorkspaceGrid />
      </div>
      <div className="container mx-auto py-8">
        <SectionTitle title="Nuestras mejores opciones" />
        <TopPicksList />
      </div>
      <Footer/>
    </div>
  );
};

export default HomePage;