import { SET_NEW_ARRAY_FILTER_INGREDIENTS } from '../action';

const INITIAL_STATE = {
  hasFilterByIngrients: false,
  result: [],
};

const itensByIngridients = (state = INITIAL_STATE, action) => {
  const { payload, type } = action;

  switch (type) {
  case SET_NEW_ARRAY_FILTER_INGREDIENTS:
    return { ...state, hasFilterByIngrients: true, result: [...payload] };
  default:
    return state;
  }
};

export default itensByIngridients;
