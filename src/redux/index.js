import { combineReducers } from 'redux';
import loginReducer from './../components/login/loginReducer';
import dashboardReducer from './../components/dashboard/dashboardReducer';
import appReducer from './../components/appReducer';

export default combineReducers({
    login: loginReducer,
    dashboard: dashboardReducer,
    app: appReducer
});