import { combineReducers } from 'redux';
import { reducer as reduxform } from 'redux-form';
import authReducer from './authReducer';
import meetuspReducer from './meetupsReducer';


export default combineReducers({
  auth: authReducer,
  form: reduxform,
  meetups: meetuspReducer
});