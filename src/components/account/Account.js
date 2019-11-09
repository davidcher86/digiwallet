import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Button, Input, Icon  } from 'react-native-elements';
import { connect } from 'react-redux';
import firebase from 'firebase';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';

import * as actions from './accountActions';

class Account extends Component {
    render() {
        const styles = {
            containerStyle: {
                padding: 20,
                // flexDirection: 'column', 
                justifyContent: 'space-between'
            },
            buttonContainerStyle: {
                backgroundColor: '#2980b6',
                paddingVertical: 15,
            },
            inputStyle: {
                height: 40,
                backgroundColor: 'rgba(225,225,225,0.2)',
                marginBottom: 10,
                padding: 10,
                color: '#fff'
            }
        };

        const { user, pageSettings, validationErrors } = this.props;
        const { changeTab } = this.props;

        console.log(this.props);
        // return <View />;
        return (
            <View style={styles.containerStyle}>
                 <View style={{flex: 1}}>
                     <ProgressSteps>
                         <ProgressStep label="First Step">
                             <View style={{ alignItems: 'center' }}>
                                 <Text>This is the content within step 1!</Text>
                             </View>
                         </ProgressStep>
                         <ProgressStep label="Second Step">
                             <View style={{ alignItems: 'center' }}>
                                 <Text>This is the content within step 2!</Text>
                             </View>
                         </ProgressStep>
                         <ProgressStep label="Third Step">
                             <View style={{ alignItems: 'center' }}>
                                 <Text>This is the content within step 3!</Text>
                             </View>
                         </ProgressStep>
                     </ProgressSteps>
                 </View>
                 {/* <View style={{flex: 1}}> */}
                    <Input
                        style={styles.inputStyle}
                        autoCorrect={false}
                        value={user.firstName}
                        // onChangeText={text => this.props.changeUsername(text)}
                        onChangeText={text => this.props.changeFieldValue('email', text)}
                        leftIcon={{ name: 'mail' }}
                        autoCapitalize="none"
                        errorStyle={{ color: 'red' }}
                        errorMessage={this.props.validationErrors.firstNameError}
                        placeholderTextColor='rgba(225,225,225,0.7)'
                        label='First Name' />
                    <Input
                        placeholder='123456'
                        style={styles.inputStyle}
                        value={user.lastName}
                        // onChangeText={text => this.props.changePassword(text)}
                        onChangeText={text => this.props.changeFieldValue('password', text)}
                        leftIcon={{ name: 'maijl' }}
                        errorStyle={{ color: 'red' }}
                        errorMessage={this.props.validationErrors.lastNameError}
                        label='Last Name' />
                    {/* </View> */}
                    <View style={styles.buttonContainerStyle}>
                        <TouchableOpacity style={styles.buttonContainer}>
                            <Text style={styles.buttonStyle}>ADD</Text>
                        </TouchableOpacity>
                     </View>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return { 
        account: state.account,
        user: state.account.user,
        validationErrors: state.account.validationErrors
     };
};

export default connect(mapStateToProps, actions)(Account);
