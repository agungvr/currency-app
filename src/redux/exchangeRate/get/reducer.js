import { GET_EXCHANGE_SUCCESS } from "./actions";
import { withLoadable } from "../../app/reducer";

const initialState = {
  data: [],
  isLoading: false,
  success: false,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EXCHANGE_SUCCESS:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
};

export const getExchangeReducer = withLoadable({
  isLoadingAction: 'API_START',
  successAction: 'GET_EXCHANGE_SUCCESS',
  errorAction: 'GET_EXCHANGE_FAILURE',
})(reducer);

