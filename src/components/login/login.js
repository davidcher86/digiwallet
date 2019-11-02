import React, { Component } from 'react';
import { View, TouchableHighlight, Text } from 'react-native';
import { Button, Input, Icon  } from 'react-native-elements';
import { connect } from 'react-redux';

import { Spinner } from './../common/Spinner';
import firebase from 'firebase';

class LoginForm extends Component {
    state = {
        username: '',
        password: '',
        error: '',
        loading: false
    };

    onLoginPress() {
        const { username, password } = this.state;

        this.setState({ loading: true, error: '' });
        firebase.auth().signInWithEmailAndPassword(username, password)
            .then(() => this.setState({ error: '', loading: false, username: '', password: '', }))
            .catch((res) =>  this.setState({ error: res.toString(), loading: false }));
    }

    renderButton() {
        const styles = {
            buttonContainerStyle: {
                padding: 5,
                height: 15
                // flexDirection: 'row',
                // flex: 1
            },
            buttonStyle: {
                // margin: 5
                // height: 30
                // flexDirection: 'row',
                // flex: 1
            }
        };


        if (this.state.loading) {
            return (
                <View style={styles.buttonContainerStyle}>
                    <Button
                        title="Loading button"
                        loading />
                </View>);
        }

        return (
            <View style={styles.buttonContainerStyle}>
                <Button
                    type="outline"
                    style={styles.buttonStyle}
                    onPress={this.onLoginPress.bind(this)}
                    title="Log In" />
            </View>);

    };

    render() {
        console.log(this.props.login);
        const styles = {
            containerStyle: {},
            labelStyle: {},
            inputStyle: {}
        };

        return(
            <View style={styles.containerStyle}>
                <Input
                    placeholder='user@gmail.com'
                    value={this.state.username}
                    onChangeText={text => this.setState({ username: text })}
                    leftIcon={{ name: 'mail' }}
                    errorStyle={{ color: 'red' }}
                    label='Email' />
                <Input
                    placeholder='123456'
                    value={this.state.password}
                    onChangeText={text => this.setState({ password: text })}
                    leftIcon={{ name: 'mail' }}
                    errorStyle={{ color: 'red' }}
                    errorMessage={this.state.error}
                    secureTextEntry={true}
                    label='Password' />
                <View>
                    {this.renderButton()}
                </View>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return { login: state.login };
};

export default connect(mapStateToProps)(LoginForm);
