import React from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';

const Input = props =>{
    return <TextInput {...props} style ={{...styles.input, ...props.style}} />;
};


const styles = StyleSheet.create({
input: {
    height: 40,
    borderBottomColor: 'black',
    borderBottomWidth: 3,
}
});

export  default Input;
