'use client';
import React from 'react';
import useCoworkings from './useCoworkings';
import Coworking from './coworking';
import SearchCoworking from './searchCoworking';
import Pagination from '../pagination/pagination';
import MapCoworking from '../coworkings2/mapCoworkings';

export default function CoworkingsBooking() {
  const {
    coworkings,
    countries,
    states,
    cities,
    handleChange,
    totalCoworkings,
    filter,
  } = useCoworkings();

  const totalPages = Math.ceil(totalCoworkings / 3);

  return (
    <section
      className="-mt-[65px] flex flex-row pt-[65px] lg:mt-0 lg:pt-0"
      id="coworkings"
    >
      <div>
        <SearchCoworking
          countries={countries}
          states={states}
          cities={cities}
          handleChange={handleChange}
        />
        <main className="mt-5 w-full">
          <section className="flex flex-wrap justify-center gap-2">
            {coworkings.map((coworking) => {
              return <Coworking key={coworking.id} coworking={coworking} />;
            })}
          </section>
        </main>
        <div className="mb-10 mt-5 flex w-full justify-center">
          <Pagination totalPages={totalPages} />
        </div>
      </div>
    </section>
  );
}
