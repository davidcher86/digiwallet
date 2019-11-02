import {Text, View} from 'react-native';
import React, {Component} from 'react';

const CardSection = (props) =>  {
    const styles = {
        containerStyle: {
            padding: 5,
            borderBottomWidth: 1,
            backgroundColor: '#fff',
            justifyContent: 'row',
            borderColor: '#ddd',
            borderWidth: 1,
            borderRadius: 2,
            borderColor: '#ddd'
        },
        textStyle: {
            fontSize: 20
        }
    };

    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
};

export default CardSection;