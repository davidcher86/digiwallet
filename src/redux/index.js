import { combineReducers } from 'redux';
import loginReducer from './../components/login/loginReducer';

export default combineReducers({
    login: loginReducer
});