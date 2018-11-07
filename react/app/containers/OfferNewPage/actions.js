/*
 *
 * OfferNewPage actions
 *
 */

import {
  DEFAULT_ACTION,
  POST_OFFER_ATTEMPT,
  POST_OFFER_SUCCESS,
  POST_OFFER_FAILURE,
  CLOSE_ALERT_MESSAGE,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function postOfferAttempt(offer) {
  return {
    type: POST_OFFER_ATTEMPT,
    offer,
  };
}
export function postOfferSuccess(offer) {
  return {
    type: POST_OFFER_SUCCESS,
    offer,
  };
}
export function postOfferFailure(error) {
  return {
    type: POST_OFFER_FAILURE,
    error,
  };
}

export function closeAlertMessage() {
  return {
    type: CLOSE_ALERT_MESSAGE,
  };
}
