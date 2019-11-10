import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Picker } from 'react-native';
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

        const { user, pageSettings, validationErrors, creditCard, sallary } = this.props;
        const { changeTab, handleStep, changeUserFieldValue, changeAccountFieldValue, handleRegisterAccount, handlePickerChange, changeCreditFieldValue, changeUserFieldValue } = this.props;

        const renderDays = () => {
            for (var i = 0; i <= 31; i++) {
                return <Picker.Item label={i} value={i} />;
            }
        };
        console.log(this.props);
        // return <View />;
        return (
            <View style={styles.containerStyle}>
                 <View style={{flex: 1}}>
                     <ProgressSteps>
                         <ProgressStep label="First Step">
                             <View onPress={} style={{ alignItems: 'center' }}>
                                 <Text>This is the content within step 1!</Text>
                             </View>
                         </ProgressStep>
                         <ProgressStep label="Second Step">
                             <View onPress={} style={{ alignItems: 'center' }}>
                                 <Text>This is the content within step 2!</Text>
                             </View>
                         </ProgressStep>
                         <ProgressStep label="Third Step">
                             <View onPress={} style={{ alignItems: 'center' }}>
                                 <Text>This is the content within step 3!</Text>
                             </View>
                         </ProgressStep>
                     </ProgressSteps>
                 </View>
                 {pageSettings.step === 1 && <View style={{flex: 1}}>
                    <Input
                        style={styles.inputStyle}
                        autoCorrect={false}
                        value={user.firstName}
                        onChangeText={text => changeUserFieldValue('firstName', text)}
                        // leftIcon={{ name: 'mail' }}
                        autoCapitalize="none"
                        errorStyle={{ color: 'red' }}
                        errorMessage={validationErrors.firstNameError}
                        placeholderTextColor='rgba(225,225,225,0.7)'
                        label='First Name' />
                    <Input
                        placeholder='123456'
                        style={styles.inputStyle}
                        value={user.lastName}
                        onChangeText={text => changeUserFieldValue('lastName', text)}
                        // leftIcon={{ name: 'maijl' }}
                        errorStyle={{ color: 'red' }}
                        errorMessage={validationErrors.lastNameError}
                        label='Last Name' />
                    <Picker
                        selectedValue={user.gender}
                        style={{height: 50, width: 100}}
                        onValueChange={(itemValue) => changeUserFieldValue(itemValue)}>
                        <Picker.Item label="Male" value="male" />
                        <Picker.Item label="Female" value="female" />
                    </Picker>
                </View>}
                {pageSettings.step === 2 && <View style={{flex: 1}}>
                    <View>
                        <Text>Settlement Day</Text>
                        <Picker
                            selectedValue={creditCard.company}
                            style={{height: 50, width: 100}}
                            onValueChange={(itemValue, itemIndex) => handlePickerChange(itemValue, itemIndex)}>
                            {renderDays()}
                        </Picker>
                    </View>
                    <View>
                        <Text>Card Type</Text>
                        <Picker
                            selectedValue={creditCard.company}
                            style={{height: 50, width: 100}}
                            onValueChange={(itemValue, itemIndex) => handlePickerChange(itemValue, itemIndex)}>
                            <Picker.Item label="Visa" value="Visa" />
                            <Picker.Item label="Mastercard" value="Mastercard" />
                        </Picker>
                    </View>
                </View>}
                {pageSettings.step === 3 && <View style={{flex: 1}}>
                    <Input
                        style={styles.inputStyle}
                        autoCorrect={false}
                        value={sallary.billingDate}
                        // onChangeText={text => this.props.changeUsername(text)}
                        onChangeText={text => changeSallaryFieldValue('amount', text)}
                        leftIcon={{ name: 'mail' }}
                        autoCapitalize="none"
                        errorStyle={{ color: 'red' }}
                        errorMessage={this.props.validationErrors.firstNameError}
                        placeholderTextColor='rgba(225,225,225,0.7)'
                        label='First Amount' />
                    <View>
                        <Text>Sallary Day</Text>
                        <Picker
                            selectedValue={creditCard.company}
                            style={{height: 50, width: 100}}
                            onValueChange={(itemValue, itemIndex) => changeSallaryFieldValue('paymentDate', itemValue)}>
                            {renderDays()}
                        </Picker>
                    </View>
                </View>}
                {pageSettings.step === 3 && <View style={styles.buttonContainerStyle}>
                    <TouchableOpacity
                        onPress={() => handleRegisterAccount(this.props.account)}
                        style={styles.buttonContainer}>
                        <Text style={styles.buttonStyle}>ADD</Text>
                    </TouchableOpacity>
                </View>}
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        account: state.account,
        creditCard: state.account.creditCard,
        user: state.account.user,
        sallary: state.account.sallary,
        validationErrors: state.account.validationErrors
     };
};

export default connect(mapStateToProps, actions)(Account);
