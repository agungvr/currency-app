import { fork } from 'redux-saga/effects';
import getExchangeSaga from './exchangeRate/get/saga'
import exchangeSaga from './exchangeRate/data/saga'

export default function* rootSaga() {
  yield fork(getExchangeSaga);
  yield fork(exchangeSaga);
}
