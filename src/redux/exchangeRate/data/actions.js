export const UPDATE_EXCHANGE = "UPDATE_EXCHANGE";
export const SET_EXCHANGE = "SET_EXCHANGE";
export const REMOVE_EXCHANGE = "REMOVE_EXCHANGE";

export const setExchange = (data) => ({
  type: SET_EXCHANGE,
  payload: data
});

export const updateExchange = (data) => ({
  type: UPDATE_EXCHANGE,
  payload: data
});

export const removeExchange = (id) => ({
  type: REMOVE_EXCHANGE,
  payload: id
});

