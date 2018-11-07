import {
  GET_OFFERS_ATTEMPT,
  GET_OFFERS_SUCCESS,
  GET_OFFERS_FAILURE,
} from './constants';

export function getOffersAttempt(page, pageSize) {
  return {
    type: GET_OFFERS_ATTEMPT,
    page,
    pageSize,
  };
}
export function getOffersSuccess(offers, offerNum) {
  return {
    type: GET_OFFERS_SUCCESS,
    offers,
    offerNum,
  };
}
export function getOffersFailure(error) {
  return {
    type: GET_OFFERS_FAILURE,
    error,
  };
}
