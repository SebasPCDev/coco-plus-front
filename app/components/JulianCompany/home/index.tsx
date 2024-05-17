import React from 'react';
import Navbar from './navbarHome';
import SectionTitle from './sectionTitle';
import WorkspaceGrid from './workspaceGrid';
import TopPicksList from './topPicksList';
import Footer from './footerHome';

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
      <Footer />
    </div>
  );
};

export default HomePage;