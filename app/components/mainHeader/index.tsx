import React from 'react';
import OfertaSection from '../ofertaSection';
import ImageCoworkMobile from '../imageCoworkMobile';

const HeaderMain: React.FC = () => {
  return (
    <div className="my-20 flex max-w-[1024px] mx-auto">
      <div className="flex w-full flex-col md:flex-row gap-16 md:gap-0 items-center">
        <div className="w-full md:w-2/3">
          <OfertaSection />
        </div>
        <div className="w-full md:ml-4 md:w-1/3">
          <ImageCoworkMobile />
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;
