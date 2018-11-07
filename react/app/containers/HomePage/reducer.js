/*
 *
 * HomePage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  GET_OFFERS_ATTEMPT,
  GET_OFFERS_SUCCESS,
  GET_OFFERS_FAILURE,
} from './constants';

export const initialState = fromJS({
  atGetOffers: false,
  scGetOffers: null,
  currentPage: 1,
  offerNum: 0,
  offers: [],
});

function homePageReducer(state = initialState, action) {
  switch (action.type) {
    case GET_OFFERS_ATTEMPT:
      return state
        .set('atGetOffers', true)
        .set('scGetOffers', null)
        .set('currentPage', action.page);
    case GET_OFFERS_SUCCESS:
      return state
        .set('atGetOffers', false)
        .set('scGetOffers', true)
        .set('offers', action.offers)
        .set('offerNum', action.offerNum);
    case GET_OFFERS_FAILURE:
      return state.set('atGetOffers', false).set('scGetOffers', false);
    default:
      return state;
  }
}

export default homePageReducer;
