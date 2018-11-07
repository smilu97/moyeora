import { fromJS } from 'immutable';
import offerNewPageReducer from '../reducer';

describe('offerNewPageReducer', () => {
  it('returns the initial state', () => {
    expect(offerNewPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
