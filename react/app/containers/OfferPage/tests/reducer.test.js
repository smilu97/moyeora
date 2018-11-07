import { fromJS } from 'immutable';
import offerPageReducer from '../reducer';

describe('offerPageReducer', () => {
  it('returns the initial state', () => {
    expect(offerPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
