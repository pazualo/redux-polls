import { RECEIVE_USERS } from '../action/users';
import { ADD_POLL } from '../action/polls';
import { ADD_ANSWER } from '../action/answers';
export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users
      };
    case ADD_POLL:
      const poll = action.poll;
      const { author, id } = poll;
      return {
        ...state,
        [author]: {
          ...state[author],
          polls: state[author].polls.concat([id])
        }
      };
    case ADD_ANSWER:
      const { authedUser } = action;
      const user = state[authedUser];
      return {
        ...state,
        [authedUser]: {
          ...user,
          answers: user.answers.concat([action.id])
        }
      };
    default:
      return state;
  }
}
