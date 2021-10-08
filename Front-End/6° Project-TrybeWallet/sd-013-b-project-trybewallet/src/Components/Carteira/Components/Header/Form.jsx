import React from 'react';
import PropTypes from 'prop-types';
import Select from './Select';
import SelectCoins from './SelectCoins';

export default function Form({ coins, handlerChange, form }) {
  const { value, method, description, currency, tag } = form;
  return (
    <form className="header-form">
      <label htmlFor="valor">
        Valor:
        <input
          onChange={ handlerChange }
          id="valor"
          type="text"
          name="value"
          value={ value }
        />
      </label>
      <label htmlFor="describe">
        Descrição:
        <input
          onChange={ handlerChange }
          type="text"
          id="describe"
          name="description"
          value={ description }
        />
      </label>
      <SelectCoins
        handlerChange={ handlerChange }
        coins={ coins }
        Value={ currency }
      />
      <Select
        handlerChange={ handlerChange }
        Label="Método de Pagamento"
        Id="pagemento"
        Value={ method }
        Name="method"
        Options={ ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'] }
      />
      <Select
        handlerChange={ handlerChange }
        Label="Tag:"
        Id="tag"
        Value={ tag }
        Name="tag"
        Options={ ['Lazer', 'Trabalho', 'Transporte', 'Alimentação', 'Saúde'] }
      />
    </form>
  );
}

Form.propTypes = {
  coins: PropTypes.arrayOf(PropTypes.string).isRequired,
  handlerChange: PropTypes.func.isRequired,
  form: PropTypes.shape({
    value: PropTypes.number,
    method: PropTypes.string,
    description: PropTypes.string,
    currency: PropTypes.string,
    tag: PropTypes.string,
  }).isRequired,
};
