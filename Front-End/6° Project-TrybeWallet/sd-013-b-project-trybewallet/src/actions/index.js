import { requestCoins, filterCoins } from '../Service/Coins';

// Types

export const SET_USER_EMAIL = 'SET_USER_EMAIL';

export const SET_EXPENSIVE = 'SET_EXPENSIVE';

export const SET_CURRENCIES = 'SET_CURRENCIES';

export const EDIT_INFOS = 'EDIT_INFOS';

export const RESET_INFOS_EDIT = 'RESET_INFOS_EDIT';

export const SET_REMOVE_EXPENSIVE = 'SET_REMOVE_EXPENSIVE';

export const SET_EXPENSIVE_EDIT = 'SET_EXPENSIVE_EDIT';

// Actions

export const setUser = (payload) => ({ type: SET_USER_EMAIL, payload });

export const setExpensive = (payload) => ({ type: SET_EXPENSIVE, payload });

export const setExpensiveEdit = (payload) => ({ type: SET_EXPENSIVE_EDIT, payload });

export const setCurrencies = (payload) => ({ type: SET_CURRENCIES, payload });

export const editInfos = (payload) => ({ type: EDIT_INFOS, payload });

export const resetEditInfos = () => ({ type: RESET_INFOS_EDIT });

export const setRemoveExpensive = (payload) => ({ type: SET_REMOVE_EXPENSIVE, payload });

// Thunks

export const fetchCotaçãoMomento = (payload) => async (dispatch) => {
  const cotações = await requestCoins();
  dispatch(setExpensive({ ...payload, exchangeRates: cotações }));
};

export const fetchMoedas = () => async (dispatch) => {
  const moedas = await filterCoins();
  const codeMoedas = moedas.map(({ code }) => code);
  dispatch(setCurrencies(codeMoedas));
};
