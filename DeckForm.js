import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, TextInput, KeyboardAvoidingView} from 'react-native';

export default class DeckForm extends React.Component {
    state = {
        text: ''
    };

    render() {
        return (
            <KeyboardAvoidingView  behavior="padding" style={styles.container}>
                <Text style={styles.textPrimary}>What is the title of your new deck?</Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                />
                <TouchableOpacity style={styles.btn} onPress={() => alert('pei!')}>
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