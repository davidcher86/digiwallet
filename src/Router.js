import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/login/login';


const RouterComponent = () => {
    const styles = {
        headerStyle: {
            flex: 1,
            textAlign: "center"
        }
    };

    return (
        <Router>
            <Scene key="root" titleStyle={styles.headerStyle}>
                <Scene key="login" title="Login" component={LoginForm}/>
            </Scene>
        </Router>
    );
};

export default RouterComponent;