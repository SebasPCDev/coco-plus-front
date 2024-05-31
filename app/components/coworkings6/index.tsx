'use client';
import React from 'react';
import useCoworkings from './useCoworkings';
import Coworking from './coworking';
import SearchCoworking from './searchCoworking';
import MapCoworking from './mapCoworkings';

export const Coworkings3 = () => {
  const {
    coworkings,
    handleChange,
    cameraPropsNew,
    states,
    cities,
    FilterMap,
    allCountries,
  } = useCoworkings();

  return (
    <section className="-mt-[65px] pt-[65px] lg:mt-0 lg:pt-0" id="coworkings">
      <h2 className="mt-10 text-center text-4xl font-bold text-[#161c2c] lg:mt-40">
        Nuestras oficinas
      </h2>

      <SearchCoworking
        countries={allCountries}
        states={states}
        cities={cities}
        handleChange={handleChange}
      />

      <div className="mt-12">
        <MapCoworking
          coworkings={coworkings}
          cameraPropsNew={cameraPropsNew}
          FilterMap={FilterMap}
        />
      </div>

      <main className="mt-20 h-[1000px] w-full overflow-y-auto">
        <section className="flex flex-wrap justify-center gap-4">
          {coworkings.map((coworking) => {
            return <Coworking key={coworking.id} coworking={coworking} />;
          })}
        </section>
      </main>
    </section>
  );
};

export default Coworkings3;
