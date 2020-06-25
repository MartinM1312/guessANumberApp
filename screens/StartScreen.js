import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Button,
    TouchableWithoutFeedback,
    Keyboard,
    Alert,
    Dimensions,
    KeyboardAvoidingView,
    ScrollView
} from 'react-native';
import Card from "../components/Card";
import Input from "../components/Input";
import Colors from '../constants/Colors';
import NumberContainer from '../components/NumberContainer';
import MainButton from '../components/MainButton';

const StartScreen = props => {
    const [enteredValue, setEnteredValue] = useState('');

    const [confirmed, setConfirmed] = useState(false);

    const [selectedNumber, setSelectedNumber] = useState();

    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    } //regex to validate only numbers

    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmed(false);
    };

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
                'Invalid Input',
                'The input must be a number between 1 and 99',
                [
                    {
                        text: 'OK',
                        style: "destructive",
                        onPress: resetInputHandler
                    }
                ]
            );
            return;
        };
        setConfirmed(true);
        setSelectedNumber(chosenNumber);
        setEnteredValue('');
        Keyboard.dismiss();
    };

    let confirmedOutput;

    if (confirmed) {
        confirmedOutput = (
            <Card style={ styles.sumaryContainer }>
                <Text>Your Number is:</Text>
                <NumberContainer>{ selectedNumber }</NumberContainer>
                <MainButton onPress={ () => props.onStartGame(selectedNumber) } >
                    START GAME
                </MainButton>

            </Card>
        );
    };

    return (
        <ScrollView>
            <KeyboardAvoidingView behavior='position'>
                <TouchableWithoutFeedback onPress={ () => { Keyboard.dismiss() } }>
                    <View style={ styles.screen }>
                        <Text style={ styles.title }>New Game!</Text>
                        <Card style={ styles.inputContainer }>
                            <Text>Write a number</Text>
                            <Input style={ styles.input } keyboardType='number-pad'
                                blurOnSubmitautoCorrect={ false }
                                maxLength={ 2 }
                                onChangeText={ numberInputHandler }
                                value={ enteredValue }
                            />
                            <View style={ styles.buttonContainer }>
                                <View style={ styles.button }>
                                    <Button
                                        title='RESET'
                                        color={ Colors.secondaryAction }
                                        onPress={ resetInputHandler }
                                    />
                                </View>
                                <View sytle={ styles.button }>
                                    <Button
                                        title='ACCEPT'
                                        color={ Colors.mainAction }
                                        onPress={ confirmInputHandler }
                                    />
                                </View>
                            </View>
                        </Card>
                        { confirmedOutput }
                    </View>

                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </ScrollView>
    );
};


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center'

    },
    sumaryContainer: {
        marginVertical: 20,
        alignItems: 'center'
    },
    button: {
        width: Dimensions.get('window').width / 4,
        borderRadius: 5,
        marginVertical: 15
    },
    inputContainer: {
        width: '80%',
        minWidth: 300,
        maxWidth: '90%',
        alignItems: 'center',
        justifyContent: 'center'

    },
    title: {
        fontSize: 25,
        marginVertical: 15,
        fontFamily: 'open-sans-bold'
    },
    input: {
        width: 80,
        textAlign: 'center',
        marginVertical: 40
    }
});

export default StartScreen;