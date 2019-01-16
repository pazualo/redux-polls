import { getInitialData } from '../utils/api';
import { receivePolls } from '../action/polls';
import { receiveUsers } from '../action/users';
import { setAuthedUser } from '../action/authedUser';
import { showLoading, hideLoading } from 'react-redux-loading';
const AUTHED_ID = 'sarah_edo';

export function handleInitData() {
  return dispatch => {
    dispatch(showLoading());
    return getInitialData().then(({ users, polls }) => {
      dispatch(receiveUsers(users));
      dispatch(receivePolls(polls));
      dispatch(setAuthedUser(AUTHED_ID));
      dispatch(hideLoading());
    });
  };
}
