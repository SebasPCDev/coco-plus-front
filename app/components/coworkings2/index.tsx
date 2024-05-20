'use client';
import React from 'react';

import useCoworkings from './useCoworkings';
import SearchIcon from '@/app/components/icons/SearchIcon';
import Coworking from './coworking';

export const Coworkings: React.FC = () => {

  const { coworkings, countries, states, cities, handleChange } = useCoworkings();

  return (
    <section className='py-16'>
      <div className='flex flex-wrap justify-center gap-4 w-full'>
        <div className='relative group w-[300px]'>
          <SearchIcon className="search-icon" />
          <select
            className='select-form'
            name='country'
            id='country'
            onChange={handleChange}
          >
            <option className='select-option' value="">País</option>
            {countries.map((country, index) => (
              <option className='select-option'
                value={country} key={`${country}-${index}`}>
                {country}
              </option>
            ))}
          </select>
        </div>
        <div className='relative group w-[300px]'>
          <SearchIcon className='search-icon' />
          <select
            className='select-form'
            name='state'
            id='state'
            onChange={handleChange}
          >
            <option className='select-option' value="">Estado/Provincia</option>
            {states.map((state, index) => (
              <option className='select-option'
                value={state} key={`${state}-${index}`}>
                {state}
              </option>
            ))}
          </select>
        </div>
        <div className='relative group w-[300px]'>
          <SearchIcon className='search-icon' />

          <select
            className='select-form'
            name='city'
            id='city'
            onChange={handleChange}
          >
            <option className='select-option' value="">Ciudad</option>
            {cities.map((city, index) => (
              <option className='select-option'
                value={city} key={`${city}-${index}`}>
                {city}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="w-full mt-16">

        <section className="flex flex-wrap justify-center gap-8">
          {coworkings.map((coworking) => {
            return (<Coworking key={coworking.id} coworking={coworking} />)
          })}
        </section>
      </div>
    </section>
  );
};

export default Coworkings;
