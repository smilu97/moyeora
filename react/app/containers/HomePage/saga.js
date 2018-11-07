import { takeLatest, call, put } from 'redux-saga/effects';
import { getOffers } from 'sauce';
import { getOffersSuccess, getOffersFailure } from './actions';
import { GET_OFFERS_ATTEMPT } from './constants';
import { INTERNET_ERROR_MESSAGE } from '../App/constants';

export function* getOffersSaga({ page, pageSize }) {
  const { ok, data } = yield call(getOffers, page, pageSize);
  if (ok) {
    if (data.success) {
      yield put(getOffersSuccess(data.offers, data.offerNum));
    } else {
      yield put(getOffersFailure(data.error));
    }
  } else {
    yield put(getOffersFailure(INTERNET_ERROR_MESSAGE));
  }
}

// Individual exports for testing
export default function* homePageSaga() {
  yield takeLatest(GET_OFFERS_ATTEMPT, getOffersSaga);
}
