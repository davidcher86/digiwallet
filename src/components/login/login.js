import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Button, Input, Icon  } from 'react-native-elements';
import { connect } from 'react-redux';
import firebase from 'firebase';

import * as actions from './loginActions';


class LoginForm extends Component {
    onLoginPress() {
        const { username, password } = this.props.login;

        this.setState({ loading: true, error: '' });
        firebase.auth().signInWithEmailAndPassword(username, password)
            .then(() => this.props.resetForm())
            .catch((res) => {
                this.props.resetForm();
                this.props.handleError(res.toString());
            });
    }

    renderButton(props) {
        const styles = {
            buttonContainerStyle: {
                backgroundColor: '#2980b6',
                paddingVertical: 15
            },
            buttonStyle: {
                color: '#fff',
                textAlign: 'center',
                fontWeight: '700'
            }
        };


        if (props.login.loading) {
            return (
                <View style={styles.buttonContainerStyle}>
                    <Button
                        style={styles.buttonStyle}
                        title="Loading button"
                        loading />
                </View>);
        }

        return (
            <View style={styles.buttonContainerStyle}>
                <TouchableOpacity style={styles.buttonContainer} 
                                //   onPress={this.onLoginPress.bind(this)}
                                  onPress={this.props.onLoginPress(props.login.username, props.login.password)}>
                    <Text  style={styles.buttonStyle}>LOGIN</Text>
                </TouchableOpacity>
                {/* <Button
                    type="outline"
                    style={styles.buttonStyle}
                    onPress={this.onLoginPress.bind(this)}
                    title="Log In" /> */}
            </View>);

    };

    render() {
        const styles = {
            containerStyle: {
                padding: 20
            },
            labelStyle: {},
            inputStyle: {
                height: 40,
                backgroundColor: 'rgba(225,225,225,0.2)',
                marginBottom: 10,
                padding: 10,
                color: '#fff'
            }
        };

        return(
            <View style={styles.containerStyle}>
                <Input
                    placeholder='user@gmail.com'
                    style={styles.inputStyle}
                    autoCorrect={false}
                    value={this.props.login.username}
                    onChangeText={text => this.props.changeUsername(text)}
                    leftIcon={{ name: 'mail' }}
                    autoCapitalize="none"
                    errorStyle={{ color: 'red' }}
                    placeholderTextColor='rgba(225,225,225,0.7)'
                    label='Email' />
                <Input
                    placeholder='123456'
                    style={styles.inputStyle}
                    value={this.props.login.password}
                    onChangeText={text => this.props.changePassword(text)}
                    leftIcon={{ name: 'mail' }}
                    errorStyle={{ color: 'red' }}
                    errorMessage={this.props.login.error}
                    secureTextEntry={true}
                    label='Password' />
                <View>
                    {this.renderButton(this.props)}
                </View>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return { login: state.login };
};

export default connect(mapStateToProps, actions)(LoginForm);
