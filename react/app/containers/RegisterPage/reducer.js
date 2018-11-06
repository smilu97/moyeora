/*
 *
 * RegisterPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  REGISTER_USER_GROUP_ATTEMPT,
  REGISTER_USER_GROUP_SUCCESS,
  REGISTER_USER_GROUP_FAILURE,
  CLOSE_ALERT_MESSAGE,
} from './constants';

export const initialState = fromJS({
  atRegisterGroup: false,
  scRegisterGroup: null,
  alertMessage: null,
  alertClosed: false,
});

function registerPageReducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER_USER_GROUP_ATTEMPT:
      return state
        .set('atRegisterGroup', true)
        .set('alertMessage', 'Successfully registered!');
    case REGISTER_USER_GROUP_SUCCESS:
      return state
        .set('atRegisterGroup', false)
        .set('scRegisterGroup', true)
        .set('alertClosed', false)
        .set('alertMessage', 'Successfully registered!');
    case REGISTER_USER_GROUP_FAILURE:
      return state
        .set('atRegisterGroup', false)
        .set('scRegisterGroup', false)
        .set('alertClosed', false)
        .set('alertMessage', 'Something wrong in register!');
    case CLOSE_ALERT_MESSAGE:
      return state.set('alertClosed', true);
    default:
      return state;
  }
}

export default registerPageReducer;
