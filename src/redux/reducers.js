import { combineReducers } from 'redux';
import { dataReducer } from "./exchangeRate/data/reducer";
import { getExchangeReducer } from "./exchangeRate/get/reducer";

export default combineReducers({
  exchange: dataReducer,
  getExchange: getExchangeReducer
});
