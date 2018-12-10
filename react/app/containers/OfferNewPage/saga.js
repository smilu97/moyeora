import { takeEvery, call, put } from 'redux-saga/effects';
import { postOffer } from 'sauce';
import { POST_OFFER_ATTEMPT } from './constants';
import { INTERNET_ERROR_MESSAGE } from '../App/constants';
import { postOfferSuccess, postOfferFailure } from './actions';

export function* postOfferSaga({ username, itemname }) {
  const { ok, data } = yield call(postOffer, username, itemname);
  if (ok) {
    if (data.success) {
      yield put(postOfferSuccess(data.offer));
    } else {
      yield put(postOfferFailure(data.error));
    }
  } else {
    yield put(postOfferFailure(INTERNET_ERROR_MESSAGE));
  }
}

// Individual exports for testing
export default function* offerNewPageSaga() {
  yield takeEvery(POST_OFFER_ATTEMPT, postOfferSaga);
}
