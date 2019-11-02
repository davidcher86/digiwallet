import {Text, View, TextInput} from 'react-native';
import React, {Component} from 'react';

const TextField = ({ placeHolder, value, onChangeText, style, label }) => {
    const styles = {
        containerStyle: {
            flexDirection: 'row',
            flex: 1,
        },
        lablelStyle: {
            flex: 1,
            fontSize: 20
        },
        inputStyle: {
            flex: 2,
            fontSize: 20
        }
    };

    return (
        <View style={styles.containerStyle}>
            <Text style={styles.lablelStyle}>
                {'label'}
            </Text>
            <TextInput
            editable
                placeHolder={placeHolder}
                style={styles.lablelStyle}
                onChangeText={onChangeText}
                bodyText='value'
                maxLength={40}/>
        </View>
    );
};

export { TextField };