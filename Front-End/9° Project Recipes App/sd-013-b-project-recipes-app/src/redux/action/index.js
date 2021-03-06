import {
  fetchMealByFirstLetter,
  fetchMealByIngredient,
  fetchMealByName,
} from '../../services/fetchMeals';

import {
  fetchCocktailByFirstLetter,
  fetchCocktailByIngredient,
  fetchCocktailByName,
} from '../../services/fetchCocktails';
import { fetchCocktailDetails, fetchMealDetails } from '../../services/fetchDetails';
import {
  fetchIntensByIngridientsCocktail, fetchIntensByIngridientsMeal,
} from '../../services/fetchItensByIngrdients';

// Type

export const SET_USER = 'SET_USER';
export const SET_DETAILS = 'SET_DETAILS';
export const SET_ITENS_OF_FETCH = 'SET_ITENS_OF_FETCH';
export const SET_NEW_FITLER_BY_CATEGORY = 'SET_NEW_FITLER_BY_CATEGORY';
export const SET_MAIN_LIST_FILTER_CATEGORY = 'SET_MAIN_LIST_FILTER_CATEGORY';
export const SET_NEW_ARRAY_FILTER_INGREDIENTS = 'SET_NEW_ARRAY_FILTER_INGREDIENTS';

// Actions Creator

export const setUser = (payload) => ({ type: SET_USER, payload });

export const setItensOfFetch = (payload) => ({
  type: SET_ITENS_OF_FETCH,
  payload,
});

export const setMainListFilterCategory = (payload) => (
  { type: SET_MAIN_LIST_FILTER_CATEGORY, payload }
);

export const SetFilterByCategory = (payload) => (
  { type: SET_MAIN_LIST_FILTER_CATEGORY, payload }
);

export const setDetails = (payload) => ({
  type: SET_DETAILS,
  payload,
});

export const setNewArrayByIngridients = (payload) => (
  { type: SET_NEW_ARRAY_FILTER_INGREDIENTS, payload }
);

// Thunk

export const fetchDetailsThunk = (id, recipe) => async (dispatch) => {
  switch (recipe) {
  case 'meal': {
    const { meals } = await fetchMealDetails(id);
    dispatch(setDetails(meals));
    break;
  }
  case 'cocktail': {
    const { drinks } = await fetchCocktailDetails(id);
    dispatch(setDetails(drinks));
    break;
  }
  default:
    break;
  }
};

export const fetchSearchThunk = ({ value, type, recipe }) => async (dispatch) => {
  if (recipe === 'meal') {
    switch (value) {
    case 'ingredient': {
      const { meals } = await fetchMealByIngredient(type);
      dispatch(setItensOfFetch(meals));
      break;
    }
    case 'name': {
      const { meals } = await fetchMealByName(type);
      dispatch(setItensOfFetch(meals));
      break;
    }
    case 'first-letter': {
      const { meals } = await fetchMealByFirstLetter(type);
      dispatch(setItensOfFetch(meals));
      break;
    }
    default:
      break;
    }
  }

  if (recipe === 'cocktail') {
    switch (value) {
    case 'ingredient': {
      const { drinks } = await fetchCocktailByIngredient(type);
      dispatch(setItensOfFetch(drinks));
      break;
    }
    case 'name': {
      const { drinks } = await fetchCocktailByName(type);
      dispatch(setItensOfFetch(drinks));
      break;
    }
    case 'first-letter': {
      const { drinks } = await fetchCocktailByFirstLetter(type);
      dispatch(setItensOfFetch(drinks));
      break;
    }
    default:
      break;
    }
  }
};

export const fetchItensByIngridientsThunk = (ingridient, type) => async (dispatch) => {
  const NUMBER_MAX_ELEMENT = 12;
  const objectLiteral = {
    async meal() {
      const { meals } = await fetchIntensByIngridientsMeal(ingridient);
      const firstTwelve = meals.splice(0, NUMBER_MAX_ELEMENT);
      dispatch(setNewArrayByIngridients(firstTwelve));
    },
    async drink() {
      const { drinks } = await fetchIntensByIngridientsCocktail(ingridient);
      const firstTwelve = drinks.splice(0, NUMBER_MAX_ELEMENT);
      dispatch(setNewArrayByIngridients(firstTwelve));
    },
  };
  objectLiteral[type]();
};
