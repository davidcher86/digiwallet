import React, { Component } from 'react';
import { View, TouchableHighlight, Text } from 'react-native';
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


        if (props.login.loading) {
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
        const styles = {
            containerStyle: {
                marginTop:  30,
            },
            labelStyle: {},
            inputStyle: {}
        };

        return(
            <View style={styles.containerStyle}>
                <Input
                    placeholder='user@gmail.com'
                    value={this.props.login.username}
                    onChangeText={text => this.props.changeUsername(text)}
                    leftIcon={{ name: 'mail' }}
                    errorStyle={{ color: 'red' }}
                    label='Email' />
                <Input
                    placeholder='123456'
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
