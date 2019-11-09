import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/login/Login';
import Dashboard from './components/dashboard/Dashboard';
import FinancialActionList from './components/transactions/Transactions';
import Account from './components/account/Account';


const RouterComponent = () => {
    const styles = {
        headerStyle: {
            flex: 1,
            textAlign: "center"
        }
    };

    return (
        <Router>
            <Scene key="root" titleStyle={styles.headerStyle} >
                {/* <Scene key="auth"> */}
                    <Scene key="login" title="Login" component={LoginForm} initial/>
                {/* </Scene> */}
                {/* <Scene key="main"> */}
                    <Scene key="dashboard" title="dashboard" component={Dashboard} />
                    <Scene key="account" title="Account" component={Account} />
                    <Scene key="financialActionList" title="Financial Actions" component={FinancialActionList} />
                {/* </Scene> */}
            </Scene>
        </Router>
    );
};

export default RouterComponent;