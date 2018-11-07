import { takeLatest, call, put } from 'redux-saga/effects';
import { getOffer } from 'sauce';
import { INTERNET_ERROR_MESSAGE } from '../App/constants';
import { GET_OFFER_ATTEMPT } from './constants';
import { getOfferSuccess, getOfferFailure } from './actions';

export function* getOfferSaga({ offerId }) {
  const { ok, data } = yield call(getOffer, offerId);
  if (ok) {
    if (data.success) {
      yield put(getOfferSuccess(data.offer));
    } else {
      yield put(getOfferFailure(data.error));
    }
  } else {
    yield put(getOfferFailure(INTERNET_ERROR_MESSAGE));
  }
}

// Individual exports for testing
export default function* offerPageSaga() {
  yield takeLatest(GET_OFFER_ATTEMPT, getOfferSaga);
}
