import { takeLatest } from 'redux-saga/effects';
import { SET_EXCHANGE, REMOVE_EXCHANGE, UPDATE_EXCHANGE } from "./actions";

export function* setDataSaga(actions) {
  yield
}

export function* removeDataSaga(actions) {
  yield
}

export function* updateDataSaga(actions) {
  yield
}


export default function* getExchangeSaga() {
  yield takeLatest(SET_EXCHANGE, setDataSaga);
  yield takeLatest(REMOVE_EXCHANGE, removeDataSaga);
  yield takeLatest(UPDATE_EXCHANGE, updateDataSaga);
}
