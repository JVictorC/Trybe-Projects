import React, { useState, useContext, useEffect } from 'react';
import Column from './components/Column';
import Comparison from './components/Comparison';
import Value from './components/Value';
import MainContext from '../../context/MainContext';
import DropAscDsc from './components/DropAscDsc';

export default function Selects() {
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('0');
  const [optionsSelect, setOptionsSelect] = useState([
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ]);

  const {
    hadlerFilterByComparison, hadlerClearFilter, filters: { filterByNumericValues },
  } = useContext(MainContext);

  useEffect(() => {
    setOptionsSelect([
      'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
    ]);
  }, []);

  const verification = () => {
    const index = optionsSelect.indexOf(column);
    optionsSelect.splice(index, 1);
  };

  const resetValues = () => {
    setColumn(optionsSelect[0]);
    setComparison('maior que');
    setValue('0');
  };

  const handleFilter = () => {
    const obj = { column, comparison, value };
    hadlerFilterByComparison(obj);
    verification();
    resetValues();
  };

  function handleClearFilter(objc) {
    hadlerClearFilter(objc);
    setOptionsSelect([
      'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
    ]);
  }

  return (
    <form onSubmit={ (e) => e.preventDefault() }>
      <Column setColumn={ setColumn } optionsSelect={ optionsSelect } />
      <Comparison setComparison={ setComparison } />
      <Value setValue={ setValue } />
      <div data-testid="filter">
        <ul>
          {
            filterByNumericValues.map((
              { column: columnFilter, comparison: comparisonFilter, value: valueFilter },
            ) => (
              <li key={ columnFilter }>
                <p>{columnFilter}</p>
                <p>{comparisonFilter}</p>
                <p>{valueFilter}</p>
                <button
                  type="button"
                  data-testid="filter"
                  onClick={ () => handleClearFilter({ column, comparison, value }) }
                >
                  X
                </button>
              </li>
            ))
          }
        </ul>

        {/* <button
          type="button"
          data-testid="filter"
          onClick={ handleClearFilter }
        >
          X
        </button> */}
      </div>

      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleFilter }
      >
        Filtrar
      </button>
      <DropAscDsc />
    </form>

  );
}
