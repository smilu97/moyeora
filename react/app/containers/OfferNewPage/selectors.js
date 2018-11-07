import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the offerNewPage state domain
 */

const selectOfferNewPageDomain = state =>
  state.get('offerNewPage', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by OfferNewPage
 */

const makeSelectOfferNewPage = () =>
  createSelector(selectOfferNewPageDomain, substate => substate.toJS());

export default makeSelectOfferNewPage;
export { selectOfferNewPageDomain };
