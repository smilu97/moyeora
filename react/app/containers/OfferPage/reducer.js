/*
 *
 * OfferPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  GET_OFFER_ATTEMPT,
  GET_OFFER_SUCCESS,
  GET_OFFER_FAILURE,
} from './constants';

export const initialState = fromJS({
  atGetOffer: false,
  offer: null,
});

function offerPageReducer(state = initialState, action) {
  switch (action.type) {
    case GET_OFFER_ATTEMPT:
      return state.set('atGetOffer', true);
    case GET_OFFER_SUCCESS:
      return state.set('atGetOffer', false).set('offer', action.offer);
    case GET_OFFER_FAILURE:
      return state.set('atGetOffer', false);
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default offerPageReducer;
