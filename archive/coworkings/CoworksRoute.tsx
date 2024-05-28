'use client';
import styles from '../coworkings/CoworksRoute.module.css';
import React, { useState, useEffect } from 'react';
import CoworkCard from '@/app/components/CoworkCard';
import IResponseCoworking from '@/utils/types/coworkingsResponse';
import getCountriesfilter from '@/utils/gets/countriesFilter';
import GetCoworkingsFilter from '@/utils/gets/getCoworkingsFilter';
import getoptions from '@/utils/gets/getoptionsFilter';
import Link from 'next/link';

/////////////
// Santiago
////////////

export const CoworksRoute: React.FC = () => {
  const urlBase = process.env.NEXT_PUBLIC_API_URL;
  const [coworkings, setCoworkings] = useState<IResponseCoworking[]>([]);
  const [countries, setCountries] = useState<any[]>([]);
  const [states, setStates] = useState<any[]>([]);
  const [cities, setCities] = useState<any[]>([]);
  const [filter, setFilter] = useState({ country: '', state: '', city: '' });

  useEffect(() => {
    const getCountries = async () => {
      const countries = await getCountriesfilter();

      const currentcoworkings = await GetCoworkingsFilter({ filter });
      setCoworkings(currentcoworkings.coworking);
      setCountries(countries);
    };
    getCountries();
  }, []);

  useEffect(() => {
    const getOptions = async () => {
      const options = await getoptions({ filter });
      if (filter.city) {
        const currentcoworkings = await GetCoworkingsFilter({ filter });
        setCoworkings(currentcoworkings.coworking);
      } else if (filter.state) {
        setCities(options);
        const currentcoworkings = await GetCoworkingsFilter({ filter });
        setCoworkings(currentcoworkings.coworking);
      } else {
        if (filter.country) setStates(options);
        const currentcoworkings = await GetCoworkingsFilter({ filter });
        setCoworkings(currentcoworkings.coworking);
      }
    };
    getOptions();
  }, [filter]);

  const handleChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    const newfilter = { country: '', state: '', city: '' };
    if (name === 'country') {
      newfilter.country = value;
      newfilter.state = '';
      newfilter.city = '';
      setCities([]);
      setStates([]);
    }
    if (name === 'state') {
      newfilter.country = filter.country;
      newfilter.state = value;
      newfilter.city = '';
      setCities([]);
    }
    if (name === 'city') {
      newfilter.country = filter.country;
      newfilter.state = filter.state;
      newfilter.city = value;
    }
    setFilter(newfilter);
  };

  return (
    <section className="relative py-8">
      <div className="mx-auto w-full px-4 md:px-8">
        <div className="">
          <div className="col-span-12 w-full max-md:mx-auto max-md:max-w-md md:col-span-3">
            <div className="box w-full  rounded-xl bg-white p-6">
              <div className="mb-5 items-center gap-1">
                <div className="input-container my-2 !flex w-full justify-evenly">
                  <div className="input-wrapper my-2 w-80">
                    <div className="h-15 before:content[''] group relative w-full overflow-hidden rounded-full border border-solid border-gray-300 bg-gray-100 before:absolute before:right-0 before:h-12 before:w-14 before:rounded-full before:bg-green-300 before:blur-lg before:[box-shadow:-60px_20px_10px_10px_#f7fac8]">
                      <svg
                        y="0"
                        xmlns="http://www.w3.org/2000/svg"
                        x="0"
                        width="100"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="xMidYMid meet"
                        height="100"
                        className="absolute right-0 top-1.5 -rotate-45 stroke-gray-700 duration-300 group-hover:rotate-0"
                        style={{
                          width: '3rem',
                          height: '3rem',
                          marginRight: '.5rem',
                          marginTop: '1px',
                        }}
                      >
                        <path
                          strokeWidth="4"
                          strokeLinejoin="round"
                          strokeLinecap="round"
                          fill="none"
                          d="M60.7,53.6,50,64.3m0,0L39.3,53.6M50,64.3V35.7m0,46.4A32.1,32.1,0,1,1,82.1,50,32.1,32.1,0,0,1,50,82.1Z"
                          className="svg-stroke-primary h-16 w-16"
                        ></path>
                      </svg>
                      <select
                        className=" relative block w-full appearance-none border border-neutral-500 bg-transparent p-2.5 font-bold text-gray-600 placeholder-violet-700 outline-none ring-0 hover:placeholder-shown:bg-emerald-500 focus:border-violet-500 focus:ring-violet-500"
                        style={{
                          height: '4rem',
                          fontSize: '13px',
                          paddingLeft: '17px',
                          borderRadius: '99px',
                        }}
                        name="country"
                        id="country"
                        onChange={handleChange}
                      >
                        <option value="">País</option>
                        {countries.map((country, index) => (
                          <option value={country} key={`${country}-${index}`}>
                            {country}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className={`my-2 w-80`}>
                    <div className="h-15 before:content[''] group relative w-full overflow-hidden rounded-full border border-solid border-gray-300 bg-gray-100 before:absolute before:right-0 before:h-12 before:w-14 before:rotate-45 before:rounded-full before:bg-green-300 before:blur-lg before:[box-shadow:-60px_20px_10px_10px_#f7fac8]">
                      <svg
                        y="0"
                        xmlns="http://www.w3.org/2000/svg"
                        x="0"
                        width="100"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="xMidYMid meet"
                        height="100"
                        className="absolute right-0 top-1.5 -rotate-45 stroke-gray-700 duration-300 group-hover:rotate-0"
                        style={{
                          width: '3rem',
                          height: '3rem',
                          marginRight: '.5rem',
                          marginTop: '1px',
                        }}
                      >
                        <path
                          strokeWidth="4"
                          strokeLinejoin="round"
                          strokeLinecap="round"
                          fill="none"
                          d="M60.7,53.6,50,64.3m0,0L39.3,53.6M50,64.3V35.7m0,46.4A32.1,32.1,0,1,1,82.1,50,32.1,32.1,0,0,1,50,82.1Z"
                          className="svg-stroke-primary h-16 w-16"
                        ></path>
                      </svg>
                      <select
                        className=" relative block w-full appearance-none border border-neutral-500 bg-transparent p-2.5 font-bold text-gray-600 placeholder-violet-700 outline-none ring-0 hover:placeholder-shown:bg-emerald-500 focus:border-violet-500 focus:ring-violet-500"
                        style={{
                          height: '4rem',
                          fontSize: '13px',
                          paddingLeft: '17px',
                          borderRadius: '99px',
                        }}
                        id="state"
                        name="state"
                        onChange={handleChange}
                      >
                        <option value="">Estado/provincia</option>
                        {states.map((state, index) => (
                          <option value={state} key={`${state}-${index}`}>
                            {state}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="my-2 w-80">
                    <div className="h-15 before:content[''] group relative w-full overflow-hidden rounded-full border border-solid border-gray-300 bg-gray-100 before:absolute before:right-0 before:h-12 before:w-14 before:rotate-180 before:rounded-full before:bg-green-300 before:blur-lg before:[box-shadow:-60px_20px_10px_10px_#f7fac8]">
                      <svg
                        y="0"
                        xmlns="http://www.w3.org/2000/svg"
                        x="0"
                        width="100"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="xMidYMid meet"
                        height="100"
                        className="absolute right-0 top-1.5 -rotate-45 stroke-gray-700 duration-300 group-hover:rotate-0"
                        style={{
                          width: '3rem',
                          height: '3rem',
                          marginRight: '.5rem',
                          marginTop: '1px',
                        }}
                      >
                        <path
                          strokeWidth="4"
                          strokeLinejoin="round"
                          strokeLinecap="round"
                          fill="none"
                          d="M60.7,53.6,50,64.3m0,0L39.3,53.6M50,64.3V35.7m0,46.4A32.1,32.1,0,1,1,82.1,50,32.1,32.1,0,0,1,50,82.1Z"
                          className="svg-stroke-primary h-16 w-16"
                        ></path>
                      </svg>
                      <select
                        className=" relative block w-full appearance-none border border-neutral-500 bg-transparent p-2.5 font-bold text-gray-600 placeholder-violet-700 outline-none ring-0 hover:placeholder-shown:bg-emerald-500 focus:border-violet-500 focus:ring-violet-500"
                        style={{
                          height: '4rem',
                          fontSize: '13px',
                          paddingLeft: '17px',
                          borderRadius: '99px',
                        }}
                        id="city"
                        name="city"
                        onChange={handleChange}
                      >
                        <option value="">Ciudad</option>
                        {cities.map((city, index) => (
                          <option value={city} key={`${city}-${index}`}>
                            {city}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <div className={styles.containercoworks}>
              <ul className={styles.coworklist}>
                {coworkings.map((cowork) => {
                  return (
                    <li key={cowork.name}>
                      <Link href={`/coworkings/${cowork.id}`}>
                        <CoworkCard cowork={cowork} />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoworksRoute;
