import { ChangeEventHandler } from 'react';
import SearchIcon from '@/app/ui/searchIcon';

interface IpropsReturn {
  id: number;
  name: string;
  lat: string;
  long: string;
}
interface IProps {
  countries: IpropsReturn[];
  states: IpropsReturn[];
  cities: IpropsReturn[];
  handleChange: ChangeEventHandler<HTMLSelectElement>;
}

const SearchCoworking = ({
  countries,
  states,
  cities,
  handleChange,
}: IProps) => {
  return (
    <header className="mt-20 flex w-full flex-wrap justify-center gap-4">
      <div className="group relative w-[300px]">
        <SearchIcon className="search-icon" />
        <select
          className="select-form"
          name="country"
          id="country"
          onChange={handleChange}
        >
          <option className="select-option" value="">
            País
          </option>
          {countries.map((country, index) => {
            const { id, name } = country;
            return (
              <option
                className="select-option"
                value={String(id)}
                id={String(id)}
                key={`${id}-${index}`}
              >
                {name}
              </option>
            );
          })}
        </select>
      </div>
      <div className="group relative w-[300px]">
        <SearchIcon className="search-icon" />
        <select
          className="select-form"
          name="state"
          id="state"
          onChange={handleChange}
        >
          <option className="select-option" value="">
            Estado/Provincia
          </option>
          {states?.map((state, index) => {
            const { id, name } = state;
            return (
              <option
                className="select-option"
                value={String(id)}
                id={String(id)}
                key={`${id}-${index}`}
              >
                {name}
              </option>
            );
          })}
        </select>
      </div>
      <div className="group relative w-[300px]">
        <SearchIcon className="search-icon" />

        <select
          className="select-form"
          name="city"
          id="city"
          onChange={handleChange}
        >
          <option className="select-option" value="">
            Ciudad
          </option>
          {cities.map((city, index) => {
            const { id, name } = city;
            return (
              <option
                className="select-option"
                value={String(id)}
                id={String(id)}
                key={`${id}-${index}`}
              >
                {name}
              </option>
            );
          })}
        </select>
      </div>
    </header>
  );
};
export default SearchCoworking;
