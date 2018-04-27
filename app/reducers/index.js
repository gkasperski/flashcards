import { combineReducers } from 'redux';
import userReducer from './userReducer';
import setsReducer from './setsReducer';

export default combineReducers({
  userReducer, setsReducer,
});
