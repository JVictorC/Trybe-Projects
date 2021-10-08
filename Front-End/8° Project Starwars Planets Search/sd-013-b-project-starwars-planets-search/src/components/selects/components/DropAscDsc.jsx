import React, { useContext, useState } from 'react';
import MainContext from '../../../context/MainContext';

const optionsSelect = [
  'name', 'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
];

export default function DropAscDsc() {
  const [radio, setRadio] = useState('');
  const [filterBy, setFilterBy] = useState('name');
  const { handlerFilterASCDSC } = useContext(MainContext);

  const handlerFilter = () => {
    const objc = { column: filterBy, sort: radio };
    handlerFilterASCDSC(objc);
  };

  return (
    <form>
      <label htmlFor="ordernar">
        Ordernar Por:
        <select
          name="ordernar"
          id="ordernar"
          data-testid="column-sort"
          onChange={ ({ target }) => setFilterBy(target.value) }
        >
          {
            optionsSelect.map((option) => (
              <option value={ option } key={ option }>
                {option}
              </option>
            ))
          }
        </select>
      </label>

      <label htmlFor="ASC">
        ASC:
        <input
          type="radio"
          name="filterAscDsc"
          id="ASC"
          value="ASC"
          data-testid="column-sort-input-asc"
          onChange={ ({ target }) => setRadio(target.value) }
        />
      </label>
      <label htmlFor="DESC">
        DESC:
        <input
          type="radio"
          name="filterAscDsc"
          data-testid="column-sort-input-desc"
          id="DESC"
          value="DESC"
          onChange={ ({ target }) => setRadio(target.value) }
        />
      </label>

      <button type="button" data-testid="column-sort-button" onClick={ handlerFilter }>
        Ordernar
      </button>
    </form>
  );
}
