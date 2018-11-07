/*
 *
 * OfferNewPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  POST_OFFER_ATTEMPT,
  POST_OFFER_SUCCESS,
  POST_OFFER_FAILURE,
  CLOSE_ALERT_MESSAGE,
} from './constants';

export const initialState = fromJS({
  atPostOffer: false,
  alertClosed: false,
  alertMessage: null,
});

function offerNewPageReducer(state = initialState, action) {
  switch (action.type) {
    case POST_OFFER_ATTEMPT:
      return state.set('atPostOffer', true);
    case POST_OFFER_SUCCESS:
      return state
        .set('atPostOffer', false)
        .set('alertMessage', 'Successfully registered!')
        .set('alertClosed', false);
    case POST_OFFER_FAILURE:
      return state
        .set('atPostOffer', false)
        .set('alertMessage', action.error)
        .set('alertClosed', false);
    case CLOSE_ALERT_MESSAGE:
      return state.set('alertClosed', true);
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default offerNewPageReducer;
