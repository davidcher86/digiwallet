import React, { Component } from 'react';
import { Button } from 'react-native-elements';
import { View, ActivityIndicator, Text } from 'react-native';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './../redux';
import LoginForm from './login/login';
import Router from './../Router';


class App extends Component {
    state ={ loading: false, loggedIn: false };

    componentDidMount() {      
        firebase.initializeApp({
            apiKey: "AIzaSyBuhrwvn0lV7B-ugmVEmEXYHsIa_8e-mko",
            authDomain: "authproj-3e757.firebaseapp.com",
            databaseURL: "https://authproj-3e757.firebaseio.com",
            projectId: "authproj-3e757",
            storageBucket: "authproj-3e757.appspot.com",
            messagingSenderId: "107699463403",
            appId: "1:107699463403:web:4ed1a7a0fb64e596684aae",
            measurementId: "G-B372DNG4CY"
        });

        this.setState({ loading: true });
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true, loading: false });
            } else {
                this.setState({ loggedIn: false, loading: false });
            }});
    };

    renderContent() {
        // console.log(this.state.loggedIn);
        const styles = {
            containerStyle: {},
            spinnerStyle: {
                flex: 1,
                justifyContet: 'center',
                alignItem: 'center'
            }
        };

        switch (this.state.loggedIn) {
            case true:
                return (
                    <Button
                        type="outline"
                        // style={styles.buttonStyle}
                        title="Log Out" />
                );
            case false:
                return <LoginForm />;
            default:
                return <ActivityIndicator size={'large'} />;
        }
    }

  render() {
    const store = createStore(reducers, {});

    const styles = {
        containerStyle: {},
        headerStyle: {
            flex: 1,
            alignItems: "center",
            padding: 10,
            background: 'green'
        }
    };

    return (
        <Provider store={store}>
            <Router titleStyle={styles.headerStyle} />
        </Provider>
    );
  };
}

export default App;