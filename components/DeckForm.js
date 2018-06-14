import React from 'react';
import {StyleSheet, Text, TouchableOpacity, TextInput, KeyboardAvoidingView} from 'react-native';
import * as api from '../utils/api';

export default class DeckForm extends React.Component {
    state = {
        title: ''
    };

    handlerSubmit() {
        const entry = this.state;
        const {title} = entry;
        api.submitEntry({title, entry}).then(() => {
            this.props.navigation.navigate(
                'AddCardForm',
                {entryId: title}
            )
        })
    }

    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <Text style={styles.textPrimary}>What is the title of your new deck?</Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={(title) => this.setState({title})}
                    value={this.state.title}
                />
                <TouchableOpacity style={styles.btn} onPress={this.handlerSubmit.bind(this)}>
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