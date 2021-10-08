import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cabeçalho from './Cabeçalho';
import TableBody from './TableBody';
import { setRemoveExpensive, editInfos as editInfosAction } from '../../../../actions';

// Link referencia Estrutura de tables https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_tbody

function Table({ expenses, removeItem, editInfos }) {
  function hadlerClickDelete({ target }) {
    const { id } = target.parentElement.parentElement;
    const newExpenses = expenses.filter((expense) => parseInt(id, 10) !== expense.id);

    removeItem(newExpenses);
  }
  function hadlerClickEdit({ target }) {
    const { id } = target.parentElement.parentElement;
    const newExpenses = expenses.filter((expense) => parseInt(id, 10) === expense.id)[0];
    editInfos({ ...newExpenses, enabled: true });
  }
  return (
    <table className="conteiner-table-main">
      <thead>
        <Cabeçalho />
      </thead>
      <tbody>
        <TableBody
          expenses={ expenses }
          hadlerClickDelete={ hadlerClickDelete }
          hadlerClickEdit={ hadlerClickEdit }
        />
      </tbody>
    </table>
  );
}

const mapStateToProps = (
  { wallet: { expenses }, infosEdit },
) => ({ expenses, infosEdit });
const mapDispatchToProps = (dispatch) => ({
  removeItem: (payload) => dispatch(setRemoveExpensive(payload)),
  editInfos: (payload) => dispatch(editInfosAction(payload)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Table);

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeItem: PropTypes.func.isRequired,
  editInfos: PropTypes.func.isRequired,
};
