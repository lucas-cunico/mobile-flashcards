import React from 'react';
import {StyleSheet, Text, TouchableOpacity, TextInput, KeyboardAvoidingView} from 'react-native';
import {timeToString} from '../utils/helpers';
import * as api from '../utils/api';

export default class AddCardForm extends React.Component {
    state = {
        question: '',
        answer: ''
    };

    handlerSubmit(){
        const key = timeToString();
        const entry = this.state;
        api.submitEntry({key, entry}).then(() => {

        })
    }

    render() {
        return (
            <KeyboardAvoidingView  behavior="padding" style={styles.container}>
                <TextInput
                    style={styles.textInput}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                />
                <TextInput
                    style={styles.textInput}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                />
                <TouchableOpacity style={styles.btn} onPress={this.handlerSubmit}>
                    <Text style={styles.bntColor}>Submit</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textSecondary: {
        color: '#6c757d'
    },
    textPrimary: {
        fontSize: 50
    },
    btn: {
        backgroundColor: '#000',
        padding: 10,
        paddingLeft: 50,
        paddingRight: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    bntColor: {
        color: '#fff'
    },
    textInput: {
        width: 350,
        height: 40,
        padding: 8,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 50
    }
});