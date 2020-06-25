import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

const NumberContainer = props => {
    return (
        <View style ={styles.container}>
            <Text style={styles.number}>{props.children}</Text>
        </View>
    )
 };

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: Colors.secondaryAction,
        padding: 10,
        marginVertical: 20,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    number: {
        color: Colors.mainAction,
        fontSize: 22
    }
});

export default NumberContainer;