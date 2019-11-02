import {Text, View} from 'react-native';
import React, {Component} from 'react';

import Card from './card';
import CardSection from './cardSection';
const CardDetails = (props) =>  {
    const styles = {
        containerStyle: {
            borderWidth: 1,
            borderRadius: 2,
            borderColor: '#ddd',
            borderBottomWidth: 0,
            shadowColor: '#000',
            shadowOffSet: {width: 0, height: 2},
            shadowOpacity: 0.1,
            shadowRadius: 2,
            elavation: 1,
            marginLeft: 5,
            marginRight: 5,
            marginTop: 10
        },
        textStyle: {
            fontSize: 20
        }
    };

    return (
        <Card style={styles.containerStyle}>
            {/* <CardSection> */}
            <Text>{props.album.title}</Text>
            {/* </CardSection> */}
        </Card>
    );
};

export default CardDetails;