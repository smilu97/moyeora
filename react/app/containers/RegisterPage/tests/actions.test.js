import { closeAlertMessage } from '../actions';
import { CLOSE_ALERT_MESSAGE } from '../constants';

describe('RegisterPage actions', () => {
  describe('Default Action', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const expected = {
        type: CLOSE_ALERT_MESSAGE,
      };
      expect(closeAlertMessage()).toEqual(expected);
    });
  });
});
