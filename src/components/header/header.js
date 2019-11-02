import {Text, View} from 'react-native';
import React, {Component} from 'react';

const Header = (props) => {
    const styles = {
        viewStyle: {
            backroundColor: '#F8F8F8',
            justifyContent: 'center',
            alignItems: 'center',
            height: 60,
            paddingTop: 15,
            shadowColor: '#000',
            shadowOffSet: {width: 0, height: 2},
            shadowOpacity: 0.2
        },
        textStyle: {
            fontSize: 20
        }
    };

    const { textStyle, viewStyle } = styles;
    // console.log('CardList');
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

export default Header;