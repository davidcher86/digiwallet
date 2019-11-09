import { combineReducers } from 'redux';

import appReducer from './../components/appReducer';
import loginReducer from './../components/login/loginReducer';
import dashboardReducer from './../components/dashboard/dashboardReducer';
import financialActionList from './../components/financialActionList/financialActionListReducer';
import accountReducer from './../components/account/accountReducer';

export default combineReducers({
    login: loginReducer,
    financialActions: financialActionList,
    dashboard: dashboardReducer,
    account: accountReducer,
    app: appReducer
});