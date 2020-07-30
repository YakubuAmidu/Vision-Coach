import { combineReducers } from 'redux';
import user from './reducer-user';
import goals from './reducer-goals';

export default combineReducers({
  user,
  goals
})
