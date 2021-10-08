import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  fetchCotaçãoMomento, fetchMoedas, setExpensiveEdit, resetEditInfos,
} from '../../../../actions';
import removeEnabled from '../../Helper/removeEnabled';
import totalFunction from '../../Helper/Total';
import HeaderComponent from './HeaderComponent';

function Header({
  email,
  setExpenses,
  setCurrencies, currencies, expenses, infosEdit, setExpensesEdit, resetInfos,
}) {
  const [coins, setCoins] = useState([]);
  const [form, setForms] = useState(infosEdit);
  const [total, setTotal] = useState(0);
  const [editInfos, setEdit] = useState(infosEdit.enabled);
  const [index, setIndex] = useState(0);

  useEffect(() => { setForms(infosEdit); setEdit(infosEdit.enabled); }, [infosEdit]);
  useEffect(() => { setCurrencies(); }, [setCurrencies]);
  useEffect(() => { setTotal(parseFloat(totalFunction(expenses)).toFixed(2)); }, [expenses]);
  useEffect(() => { setCoins(currencies); }, [currencies]);
  useEffect(() => { setForms(infosEdit); }, [expenses]);

  const handlerChange = ({ target: { name, value } }) => setForms(
    { ...form, [name]: value },
  );

  function handlerClick() {
    let globalForm = { id: index, ...form };
    if (infosEdit.enabled) {
      const newForm = removeEnabled(form);
      const filterExpenses = expenses.filter(({ id }) => id !== globalForm.id);
      globalForm = [...filterExpenses, { ...newForm, id: infosEdit.id }];
      setExpensesEdit(globalForm.sort((a, b) => a.id - b.id));
      resetInfos();
    } else {
      setExpenses(globalForm);
    }
    setEdit(false);
    setIndex(index + 1);
  }

  return (
    <HeaderComponent
      email={ email }
      total={ total }
      coins={ coins }
      handlerChange={ handlerChange }
      form={ form }
      editInfos={ editInfos }
      handlerClick={ handlerClick }
    />
  );
}

const mapStateToProps = (
  { user: { email }, wallet: { currencies, expenses }, infosEdit },
) => (
  { email, currencies, expenses, infosEdit }
);
const mapDispatchToProps = (dispatch) => ({
  setExpenses: (payload) => dispatch(fetchCotaçãoMomento(payload)),
  setCurrencies: () => dispatch(fetchMoedas()),
  setExpensesEdit: (payload) => dispatch(setExpensiveEdit(payload)),
  resetInfos: () => dispatch(resetEditInfos()),
}
);
export default connect(mapStateToProps, mapDispatchToProps)(Header);

Header.propTypes = {
  email: PropTypes.string.isRequired,
  setExpenses: PropTypes.func.isRequired,
  setCurrencies: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  infosEdit: PropTypes.shape({
    description: PropTypes.string,
    value: PropTypes.number,
    currency: PropTypes.string,
    method: PropTypes.string,
    tag: PropTypes.string,
    enabled: PropTypes.bool,
    id: PropTypes.number,
  }).isRequired,
  resetInfos: PropTypes.func.isRequired,
  setExpensesEdit: PropTypes.func.isRequired,
};
