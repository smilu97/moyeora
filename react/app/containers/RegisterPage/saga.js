import { takeEvery, call, put } from 'redux-saga/effects';
import { registerUserGroup } from 'sauce';
import { registerUserGroupSuccess, registerUserGroupFailure } from './actions';
import { INTERNET_ERROR_MESSAGE } from '../App/constants';
import { REGISTER_USER_GROUP_ATTEMPT } from './constants';

export function* registerUserGroupSaga({ user, group }) {
  const { ok, data } = yield call(registerUserGroup, user, group);
  if (ok) {
    if (data.success) {
      yield put(registerUserGroupSuccess());
    } else {
      yield put(registerUserGroupFailure(data.error));
    }
  } else {
    yield put(registerUserGroupFailure(INTERNET_ERROR_MESSAGE));
  }
}

// Individual exports for testing
export default function* registerPageSaga() {
  yield takeEvery(REGISTER_USER_GROUP_ATTEMPT, registerUserGroupSaga);
}
