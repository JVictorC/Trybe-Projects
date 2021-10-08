import React, { useCallback, useContext } from 'react';
import MainContext from '../../context/MainContext';

export default function SearchBar() {
  const { handleFilterByName, data } = useContext(MainContext);

  const handleChange = useCallback(
    ({ target }) => {
      const arrayFiltered = data.filter(((planet) => (
        planet.name
          .toUpperCase()
          .includes(target.value.toUpperCase())
      )));
      handleFilterByName(target.value, arrayFiltered);
    },
    [data, handleFilterByName],
  );

  return (
    <div>
      <form>
        <label htmlFor="search-bar">
          Pesquisar:
          <input
            data-testid="name-filter"
            type="text"
            name="searchBar"
            id="search-bar"
            placeholder="Pesquisar Pelo nome"
            onChange={ handleChange }
          />
        </label>
      </form>
    </div>
  );
}
