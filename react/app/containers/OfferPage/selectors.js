import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the offerPage state domain
 */

const selectOfferPageDomain = state => state.get('offerPage', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by OfferPage
 */

const makeSelectOfferPage = () =>
  createSelector(selectOfferPageDomain, substate => substate.toJS());

export default makeSelectOfferPage;
export { selectOfferPageDomain };
