import {
  SET_EXPENSIVE, SET_CURRENCIES, SET_REMOVE_EXPENSIVE, SET_EXPENSIVE_EDIT,
} from '../actions';

const INITIAL_WALLET_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_WALLET_STATE, action) => {
  const { expenses } = state;
  const { type, payload } = action;
  switch (type) {
  case SET_EXPENSIVE:
    return {
      ...state,
      expenses: [...expenses.concat({ ...payload })],
    };
  case SET_CURRENCIES:
    return { ...state, currencies: payload };
  case SET_REMOVE_EXPENSIVE:
    return { ...state, expenses: payload };
  case SET_EXPENSIVE_EDIT:
    return { ...state, expenses: payload };
  default:
    return state;
  }
};

export default wallet;
