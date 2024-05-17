import React from 'react';
import OfertaSection from '../ofertaSection';
import ImageCoworkMobile from '../imageCoworkMobile';

const HeaderMain: React.FC = () => {
  return (
    <div className="mx-[100px] mb-20 flex">
      <div className="flex w-full flex-col items-center md:flex-row">
        <div className=" mb-8 w-full md:mb-0 md:mr-4 md:w-1/2">
          {/* Agregamos un margen derecho para separar los componentes */}
          <OfertaSection />
        </div>
        <div className="w-full md:ml-4 md:w-1/2">
          {' '}
          {/* Agregamos un margen izquierdo para separar los componentes */}
          <ImageCoworkMobile />
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;
