import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Button, Input, Icon  } from 'react-native-elements';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';

import * as loginActions from './loginActions';


class LoginForm extends Component {
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
                {this.props.pageSettings.selectedTab === 'login' && <TouchableOpacity style={styles.buttonContainer}
                                //  onPress={console.log('sdfvsd')}
                                  onPress={() => props.onLoginPress(props.login.email, props.login.password)}
                                //   onPress={this.props.onLoginPres(this.props.login.email, this.props.login.password)}
                                  >
                    <Text style={styles.buttonStyle}>LOGIN</Text>
                </TouchableOpacity>}
                {this.props.pageSettings.selectedTab === 'signIn' && <TouchableOpacity style={styles.buttonContainer}
                                //  onPress={() => {Actions.account()}}
                                  onPress={() => props.onSignInPress(props.login.email, props.login.password)}
                                //   onPress={this.props.onLoginPres(this.props.login.email, this.props.login.password)}
                                  >
                    <Text style={styles.buttonStyle}>SIGN IN</Text>
                </TouchableOpacity>}
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
            },
            tabContainerStyle: {
                flexDirection: 'row'
            },
            tabStyle: {
                flex: 2,
                textAlign: 'center',
                padding: 7,
                justifyContent: 'space-between',
                backgroundColor: 'yellow'
            },
            selectedTabStyle: {
                borderBottomColor: 'black',
                borderBottomWidth: 1,
            },
            selectedArrowStyle: {

            },
            loginContainerStyle: {

            }
        };
        // console.log(this.props);
        const { login, pageSettings, validationErrors } = this.props;
        const { changeTab } = this.props;

        return (
            <View style={styles.containerStyle}>
                <View style={styles.tabContainerStyle}>
                    <Text
                        onPress={() => changeTab('login')}
                        style={[styles.tabStyle, (pageSettings.selectedTab === 'login' ? styles.selectedTabStyle : {})]}>
                            Login
                    </Text>
                    <Text
                        onPress={() => changeTab('signIn')}
                        style={[styles.tabStyle, (pageSettings.selectedTab === 'signIn' ? styles.selectedTabStyle : {})]}>
                            Sign In
                    </Text>
                </View>
                {pageSettings.selectedTab === 'login' && <View style={styles.loginContainerStyle}>
                    <Input
                        placeholder='user@gmail.com'
                        style={styles.inputStyle}
                        autoCorrect={false}
                        value={login.email}
                        // onChangeText={text => this.props.changeUsername(text)}
                        onChangeText={text => this.props.changeFieldValue('email', text)}
                        leftIcon={{ name: 'mail' }}
                        autoCapitalize="none"
                        errorStyle={{ color: 'red' }}
                        placeholderTextColor='rgba(225,225,225,0.7)'
                        label='Email' />
                    <Input
                        placeholder='123456'
                        style={styles.inputStyle}
                        value={login.password}
                        // onChangeText={text => this.props.changePassword(text)}
                        onChangeText={text => this.props.changeFieldValue('password', text)}
                        leftIcon={{ name: 'maijl' }}
                        errorStyle={{ color: 'red' }}
                        errorMessage={this.props.login.error}
                        secureTextEntry={true}
                        label='Password' />
                    </View>}
                    {pageSettings.selectedTab === 'signIn' && <View style={styles.signInContainerStyle}>
                        <Input
                            placeholder='user@gmail.com'
                            style={styles.inputStyle}
                            autoCorrect={false}
                            value={login.newEmail}
                            // onChangeText={text => this.props.changeUsername(text)}
                            onChangeText={text => this.props.changeFieldValue('newEmail', text)}
                            leftIcon={{ name: 'mail' }}
                            autoCapitalize="none"
                            errorStyle={{ color: 'red' }}
                            errorMessage={validationErrors.newEmailError}
                            placeholderTextColor='rgba(225,225,225,0.7)'
                            label='Enter Email' />
                        <Input
                            placeholder='123456'
                            style={styles.inputStyle}
                            value={login.newPassword}
                            // onChangeText={text => this.props.changePassword(text)}
                            onChangeText={text => this.props.changeFieldValue('newPassword', text)}
                            leftIcon={{ name: 'mail' }}
                            errorStyle={{ color: 'red' }}
                            errorMessage={validationErrors.newPassError}
                            secureTextEntry={true}
                            label='Enter New Password' />
                        <Input
                            placeholder='123456'
                            style={styles.inputStyle}
                            value={login.reEnteredPassword}
                            // onChangeText={text => this.props.changePassword(text)}
                            onChangeText={text => this.props.changeFieldValue('reEnteredPassword', text)}
                            leftIcon={{ name: 'mail' }}
                            errorStyle={{ color: 'red' }}
                            errorMessage={validationErrors.newReEnteredPassError}
                            secureTextEntry={true}
                            label='Re-Enter Password' />
                    </View>}
                    <View>
                        {this.renderButton(this.props)}
                    </View>
            </View>
        );
    };
}

const mapStateToProps = state => {
    return {
        login: state.login,
        pageSettings: state.login.pageSettings,
        validationErrors: state.login.validationErrors
     };
};

export default connect(mapStateToProps, loginActions)(LoginForm);
