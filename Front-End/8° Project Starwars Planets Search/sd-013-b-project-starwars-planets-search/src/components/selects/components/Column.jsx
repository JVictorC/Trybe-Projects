import React from 'react';
import PropTypes from 'prop-types';

export default function Column({ setColumn, optionsSelect }) {
  return (
    <label htmlFor="filterNumbers">
      Filtrar Por:
      <select
        name="filterNumbers"
        id="filterNumbers"
        data-testid="column-filter"
        onChange={ ({ target }) => setColumn(target.value) }
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
  );
}

Column.propTypes = {
  setColumn: PropTypes.func.isRequired,
  optionsSelect: PropTypes.arrayOf(String).isRequired,
};
