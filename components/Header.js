import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Header = props => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>{props.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        paddingTop: 36,
        backgroundColor: 'dodgerblue',
        width: '100%',
        height: 70,
        alignItems: 'center',
        justifyContent: 'center'
    },

    headerText: {
        fontSize: 25,
        fontWeight: 'bold',
    }

});

export default Header;