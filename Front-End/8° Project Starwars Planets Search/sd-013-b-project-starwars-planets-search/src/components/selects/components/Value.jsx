import React from 'react';
import PropTypes from 'prop-types';

export default function Value({ setValue }) {
  return (
    <label htmlFor="valorFiltro">
      Valor Para Filtro:
      <input
        type="number"
        name=""
        id="valorFiltro"
        data-testid="value-filter"
        onChange={ ({ target }) => setValue(target.value) }
      />
    </label>
  );
}

Value.propTypes = {
  setValue: PropTypes.func.isRequired,
};
