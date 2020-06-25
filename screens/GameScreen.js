import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Alert, ScrollView, FlatList, Dimensions } from 'react-native';
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
import MainButton from '../components/MainButton';
import { Ionicons } from '@expo/vector-icons';
import TextBody from '../components/TextBody';

const generateRandomBetween = (min, max, excluded) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNumber = Math.floor(Math.random() * (max - min)) + min;
    if (rndNumber === excluded) {
        return generateRandomBetween(min, max, excluded);
    } else {
        return rndNumber;
    };
};

const renderListItem = (listLength, itemData) => (
    <View style={ styles.listItem }>
        <TextBody>Try #: { listLength - itemData.index } </TextBody>
        <TextBody>Number: { itemData.item }</TextBody>
    </View>
);

const GameScreen = props => {
    const initialGuess = generateRandomBetween(1, 100, props.userChoice);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [pastGuesses, setPastGuesses] = useState([initialGuess.toString()]);
    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    const { userChoice, onGameOver } = props;

    useEffect(() => {
        if (currentGuess === userChoice) {
            onGameOver(pastGuesses.length);
        }
    }, [currentGuess, userChoice, onGameOver]);


    const nextGuessHandler = direction => {
        if ((direction === 'lower' && currentGuess < props.userChoice) ||
            (direction === 'greater' && currentGuess > props.userChoice)) {
            Alert.alert("Don't lie pls! ", 'Try again', [{ text: 'Sorry', style: 'cancel' }]);
            return;
        };
        if (direction === 'lower') {
            currentHigh.current = currentGuess;
        }
        else {
            currentLow.current = currentGuess + 1;
        };
        const nextNumber = generateRandomBetween(
            currentLow.current, currentHigh.current, currentGuess
        );
        setCurrentGuess(nextNumber);
        setPastGuesses(curPastGuesses => [nextNumber.toString(), ...curPastGuesses]);
    };

    return (
        <View style={ styles.screen }>
            <Text>Computer Guess</Text>
            <NumberContainer>{ currentGuess }</NumberContainer>
            <Card style={ styles.buttonContainer }>
                <MainButton onPress={ nextGuessHandler.bind(this, 'lower') }>
                    <Ionicons name="md-remove" size color={ 'black' } size={ 25 } />
                </MainButton>
                <MainButton onPress={ nextGuessHandler.bind(this, 'greater') } >
                    <Ionicons name="md-add" size color={ 'black' } size={ 25 } />
                </MainButton>

            </Card>
            <View style={ styles.listContainer }>
                {/* <ScrollView contentContainerStyle={styles.list}>
                    {pastGuesses.map((guess, index) => renderListItem(guess, (pastGuesses.length - index)))}
                </ScrollView> */}

                <FlatList
                    keyExtractor={ item => item }
                    data={ pastGuesses }
                    renderItem={ renderListItem.bind(this, pastGuesses.length) }
                    contentContainerStyle={ styles.list }
                />

            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: Dimensions.get('window').height > 600 ? 20 : 10,
        width: 300,
        maxWidth: '80%',
        alignItems: 'center'
    },
    listContainer: {
        width: '70%',
        flex: 1
    },
    list: {
        flexGrow: 1,
        justifyContent: 'flex-end'
    },
    listItem: {
        flexDirection: 'row',
        borderWidth: 3,
        borderRadius: 5,
        borderColor: 'black',
        padding: 15,
        marginVertical: 10,
        backgroundColor: 'white',
        justifyContent: 'space-around',
        width: '100%'
    }
});


export default GameScreen;