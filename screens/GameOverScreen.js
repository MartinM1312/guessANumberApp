import React from 'react';
import { View, Text, StyleSheet, Button, Image, Dimensions, ScrollView } from 'react-native';
import TextBody from '../components/TextBody';
import Colors from '../constants/Colors';
import MainButton from '../components/MainButton';

const GameOverScreen = props => {
    return (
        <ScrollView>
            <View style={ styles.screen }>
                <TextBody style={ styles.title }>Game Over!</TextBody>
                <View style={ styles.imageContainer }>
                    <Image
                        source={ require('../assets/images/success.png') }
                        style={ styles.image }
                        resizeMode="cover"
                    />
                </View>
                <TextBody style={ styles.textContainer }>
                    Number of Rounds: <Text style={ styles.highlight }>{ props.rounds } </Text>
                and your number is: <Text style={ styles.highlight }> { props.userNumber } </Text>
                </TextBody>
                <MainButton onPress={ props.onRestart }>NEW GAME</MainButton>
            </View>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    title: {
        fontSize: 30
    },
    textContainer: {
        fontSize: Dimensions.get('window').height < 400 ? 16 : 20,
        marginVertical: Dimensions.get('window').height / 30
    },
    highlight: {
        color: Colors.mainAction,
        fontFamily: 'open-sans-bold'
    },
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: '100%',
        height: '100%',
    },
    imageContainer: {
        width: Dimensions.get('window').width * 0.7,
        height: Dimensions.get('window').width * 0.7,
        borderRadius: Dimensions.get('window').width * 0.7 / 2,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: Dimensions.get('window').height / 30

    }
});

export default GameOverScreen;