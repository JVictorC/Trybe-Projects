import { combineReducers } from 'redux';
import loginData from './loginData';
import itensFilter from './itensFilter';
import detailsReducer from './searchDetails';
import categoryFilter from './categoryFilter';
import intesByIngridients from './itensByIngridients';

const rootReducer = combineReducers({
  loginData,
  itensFilter,
  detailsReducer,
  categoryFilter,
  intesByIngridients,
});

export default rootReducer;
