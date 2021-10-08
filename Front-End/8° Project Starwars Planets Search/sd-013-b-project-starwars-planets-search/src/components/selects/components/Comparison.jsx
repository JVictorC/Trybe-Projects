import React from 'react';
import PropTypes from 'prop-types';

const optionsSelect = [
  'maior que', 'menor que', 'igual a',
];

export default function Comparison({ setComparison }) {
  return (
    <label htmlFor="filterNumbers">
      Faixa de Valor:
      <select
        name="filterNumbers"
        id="filterNumbers"
        data-testid="comparison-filter"
        onChange={ ({ target }) => setComparison(target.value) }
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

Comparison.propTypes = {
  setComparison: PropTypes.func.isRequired,
};
