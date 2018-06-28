import React from 'react';
import {StyleSheet, Text, TouchableOpacity, TextInput, KeyboardAvoidingView} from 'react-native';
import * as actions from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class DeckForm extends React.Component {
    state = {
        title: ''
    };

    handlerSubmit() {
        const {title} = this.state;
        this.props.actions.saveDeck({title}).then(() => {
            this.props.navigation.navigate(
                'DeckDetail',
                {
                    deck: {
                        title,
                        questions: []
                    },
                    title
                }
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


function mapDispatch (dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch),
    }
}
export default connect(null, mapDispatch)(DeckForm);

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
        margin: 50,
        borderRadius: 5
    }
});