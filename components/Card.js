import React from 'react';
import {View, StyleSheet} from 'react-native';

const Card = props => {
    return(
        <View style={{...styles.card, ...props.style}}>{props.children}</View>
 );
};

const styles = StyleSheet.create({
    card: {
        //shadow properties only work on IOS
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.3,
        backgroundColor: 'white',
        //android use elevation property
        elevation: 6,
        borderRadius: 5,
        padding: 25
    }
});

export default Card;