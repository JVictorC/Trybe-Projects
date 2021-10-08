import { EDIT_INFOS, RESET_INFOS_EDIT } from '../actions';

const INITIAL_STATE = {
  description: '',
  value: 0,
  currency: 'USD',
  method: 'Dinheiro',
  tag: 'Alimentação',
};

const infosEdit = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
  case EDIT_INFOS:
    return { ...state, ...payload, enabled: true };
  case RESET_INFOS_EDIT:
    return { ...state };
  default:
    return INITIAL_STATE;
  }
};

export default infosEdit;
