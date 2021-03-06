import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors';
const MainButton = props => {
    return <TouchableOpacity onPress={ props.onPress }>
        <View style={ styles.button }>
            <Text style={ styles.buttonText } >{ props.children }</Text>
        </View>
    </TouchableOpacity>
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.mainAction,
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 30
    },
    buttonText: {
        color: 'white',
        fontFamily: 'open-sans',
        fontSize: 16
    }
});

export default MainButton;