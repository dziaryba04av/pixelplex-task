import { combineReducers } from 'redux';
import messages from './messages'
import counter from './counter'

export default combineReducers({
  messages,
  counter
});