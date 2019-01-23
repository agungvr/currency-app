import { SET_EXCHANGE, UPDATE_EXCHANGE, REMOVE_EXCHANGE } from "./actions";

const initialState = {
  init: {
    base: 'USD',
    value: 10.00
  },
  data: []
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EXCHANGE:
      return {
        ...state,
        data: state.data.concat(action.payload)
      };
    case UPDATE_EXCHANGE:
      return {
        ...state,
        init: action.payload
      };
    case REMOVE_EXCHANGE:
      return {
        ...state,
        data: state.data.filter(base => base !== action.payload)
      };
    default:
      return state;
  }
};

