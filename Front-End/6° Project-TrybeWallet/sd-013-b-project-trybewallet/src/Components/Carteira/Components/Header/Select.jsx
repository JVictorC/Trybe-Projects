import React from 'react';
import PropTypes from 'prop-types';

export default function Select({ handlerChange, Label, Id, Value, Name, Options }) {
  return (
    <label htmlFor={ Id }>
      {Label}
      <select onChange={ handlerChange } name={ Name } id={ Id } value={ Value }>
        {
          Options.map((option) => (
            <option value={ option } key={ option }>{option}</option>
          ))
        }
        {/*
        <option value="Dinheiro">Dinheiro</option>
        <option value="Cartão de crédito">Cartão de crédito</option>
        <option value="Cartão de débito">Cartão de débito</option> */}
      </select>
    </label>
  );
}

Select.propTypes = {
  handlerChange: PropTypes.func.isRequired,
  Options: PropTypes.arrayOf(PropTypes.string).isRequired,
  Value: PropTypes.string.isRequired,
  Label: PropTypes.string.isRequired,
  Id: PropTypes.string.isRequired,
  Name: PropTypes.string.isRequired,
};
