import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const styles = {
    containerStyle: {},
    spinnerStyle: {
        flex: 1,
        justifyContet: 'center',
        alignItem: 'center'
    }
};

const Spinner = ({ size }) => {
    return  (
        <View style={styles.containerStyle}>
            <ActivityIndicator size={size || 'large'}
                               style={styles.spinnerStyle}/>
        </View>
    );
};

export { Spinner };