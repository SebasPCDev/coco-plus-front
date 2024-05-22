import { ChangeEventHandler } from 'react';
import SearchIcon from '@/app/ui/searchIcon';

interface IProps {
  countries: string[];
  states: string[];
  cities: string[];
  handleChange: ChangeEventHandler<HTMLSelectElement>;
}

const SearchCoworking = ({
  countries,
  states,
  cities,
  handleChange,
}: IProps) => {
  return (
    <header className=" mt-10 flex w-full flex-wrap justify-evenly gap-4">
      <div className="group relative w-[200px]">
        <SearchIcon className="search-icon-booking" />
        <select
          className="select-form-booking"
          name="country"
          id="country"
          onChange={handleChange}
        >
          <option className="select-option" value="">
            País
          </option>
          {countries.map((country, index) => (
            <option
              className="select-option"
              value={country}
              key={`${country}-${index}`}
            >
              {country}
            </option>
          ))}
        </select>
      </div>
      <div className="group relative w-[200px]">
        <SearchIcon className="search-icon-booking" />
        <select
          className="select-form-booking"
          name="state"
          id="state"
          onChange={handleChange}
        >
          <option className="select-option" value="">
            Estado/Provincia
          </option>
          {states.map((state, index) => (
            <option
              className="select-option"
              value={state}
              key={`${state}-${index}`}
            >
              {state}
            </option>
          ))}
        </select>
      </div>
      <div className="group relative w-[200px]">
        <SearchIcon className="search-icon-booking" />

        <select
          className="select-form-booking"
          name="city"
          id="city"
          onChange={handleChange}
        >
          <option className="select-option" value="">
            Ciudad
          </option>
          {cities.map((city, index) => (
            <option
              className="select-option"
              value={city}
              key={`${city}-${index}`}
            >
              {city}
            </option>
          ))}
        </select>
      </div>
    </header>
  );
};
export default SearchCoworking;
