import { takeLatest } from 'redux-saga/effects';
import { GET_EXCHANGE_SUCCESS } from "./actions";

export function* getExchangeSuccessSaga(actions) {
  yield
}

export default function* getExchangeSaga() {
  yield takeLatest(GET_EXCHANGE_SUCCESS, getExchangeSuccessSaga);
}
