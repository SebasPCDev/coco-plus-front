'use client';
import React from 'react';

import useCoworkings from './useCoworkings';
import Coworking from './coworking';
import SearchCoworking from './searchCoworking';

export const Coworkings: React.FC = () => {

  const { coworkings, countries, states, cities, handleChange } = useCoworkings();

  return (
    <section
      className='pt-[65px] -mt-[65px] lg:pt-0 lg:mt-0' id="coworkings">
      <h2 className="text-[#161c2c] text-4xl font-bold text-center mt-10 lg:mt-40">
        Nuestras oficinas
      </h2>

      <SearchCoworking countries={countries} states={states} cities={cities} handleChange={handleChange} />


      <main className="w-full mt-20">
        <section className="flex flex-wrap justify-center gap-4">
          {coworkings.map((coworking) => {
            return (<Coworking key={coworking.id} coworking={coworking} />)
          })}
        </section>
      </main>
    </section>
  );
};

export default Coworkings;
