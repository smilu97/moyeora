/*
 *
 * OfferPage actions
 *
 */

import {
  DEFAULT_ACTION,
  GET_OFFER_ATTEMPT,
  GET_OFFER_SUCCESS,
  GET_OFFER_FAILURE,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function getOfferAttempt(offerId) {
  return {
    type: GET_OFFER_ATTEMPT,
    offerId,
  };
}
export function getOfferSuccess(offer) {
  return {
    type: GET_OFFER_SUCCESS,
    offer,
  };
}
export function getOfferFailure(error) {
  return {
    type: GET_OFFER_FAILURE,
    error,
  };
}
