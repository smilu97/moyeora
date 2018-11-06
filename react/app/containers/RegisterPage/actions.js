/*
 *
 * RegisterPage actions
 *
 */

import {
  REGISTER_USER_GROUP_ATTEMPT,
  REGISTER_USER_GROUP_SUCCESS,
  REGISTER_USER_GROUP_FAILURE,
  CLOSE_ALERT_MESSAGE,
} from './constants';

export function registerUserGroupAttempt(user, group) {
  return {
    type: REGISTER_USER_GROUP_ATTEMPT,
    user,
    group,
  };
}
export function registerUserGroupSuccess() {
  return {
    type: REGISTER_USER_GROUP_SUCCESS,
  };
}
export function registerUserGroupFailure(error) {
  return {
    type: REGISTER_USER_GROUP_FAILURE,
    error,
  };
}

export function closeAlertMessage() {
  return {
    type: CLOSE_ALERT_MESSAGE,
  };
}
