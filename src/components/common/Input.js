import React from 'react';
import { TextInput, View, Text } from 'react-native';

const styles = {
    containerStyle: {
        flexDirection: 'row',
        padding: 5
        // flex: 1
    },
    labelStyle: {
        height: 20,
        // width: 100
        // flexDirection: 'row',
        flex: 1
    },
    inputStyle: {
        height: 20, 
        padding: 2,
        // width: 400,
        flexDirection: 'row',
        flex: 2,
        borderColor: 'gray', 
        borderWidth: 1,
        // backgroundColor: 'grey',
        color: 'black'
    }
};

const Input = ({ placeholder, value, onChangeText, label, secureTextEntry }) => {
    console.log(value);
    return  (
        <View style={styles.containerStyle}>
            <Text style={styles.labelStyle}>{label}</Text>
            <TextInput placeholder={placeholder}
                       style={''}
                    //    defaultValue={value}
                       text={'sdvfdsfsf'}
                       editable
                       value={value}
                       secureTextEntry={secureTextEntry}
                       onChangeText={onChangeText}
                       style={styles.inputStyle}/>
        </View>
    );
};

export { Input };