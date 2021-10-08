import React from 'react';
import PropTypes from 'prop-types';
import Td from './Td';

export default function TableBody({ expenses, hadlerClickDelete, hadlerClickEdit }) {
  function removeName(name) {
    const campo = name.split('/');
    return campo[0];
  }
  return (
    <>
      {
        expenses.map((
          { currency, description, tag, method, value, exchangeRates, id },
        ) => (
          <tr key={ id } id={ id } className="conteiner-table-cells">
            <Td name={ description } />
            <Td name={ tag } />
            <Td name={ method } />
            <Td name={ value } />
            <Td name={ removeName(exchangeRates[currency].name) } />
            <Td name={ parseFloat(exchangeRates[currency].ask).toFixed(2) } />
            <Td
              name={ parseFloat(
                exchangeRates[currency].ask * value,
              ).toFixed(2) }
            />
            <Td name="Real" />
            <td className="buttons">
              <input
                type="button"
                value="Editar"
                onClick={ hadlerClickEdit }
                data-testid="edit-btn"
                className="btn btn-edit"
              />
              <input
                type="button"
                value="Excluir"
                data-testid="delete-btn"
                className="btn btn-delete"
                onClick={ hadlerClickDelete }
              />
            </td>
          </tr>
        ))
      }
    </>
  );
}

TableBody.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  hadlerClickDelete: PropTypes.func.isRequired,
  hadlerClickEdit: PropTypes.func.isRequired,
};
