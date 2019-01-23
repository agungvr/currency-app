import { apiAction } from "../../api/actions";

export const GET_EXCHANGE_REQUEST = "GET_EXCHANGE_REQUEST";
export const GET_EXCHANGE_SUCCESS = "GET_EXCHANGE_SUCCESS";
export const GET_EXCHANGE_FAILURE = "GET_EXCHANGE_FAILURE";

export const getExchangeRequest = (key) => apiAction({
  label: GET_EXCHANGE_REQUEST,
  url: `/latest?base=${key}`,
  onSuccess: getExchangeSuccess,
  onFailure: getExchangeFailure
});

export const getExchangeSuccess = (data) => ({
  type: GET_EXCHANGE_SUCCESS,
  payload: data
});

export const getExchangeFailure = (data) => ({
  type: GET_EXCHANGE_FAILURE,
  payload: data
});

