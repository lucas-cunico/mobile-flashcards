import React from 'react';
import {StyleSheet, Text, TouchableOpacity, TextInput, KeyboardAvoidingView} from 'react-native';
import * as actions from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class AddCardForm extends React.Component {
    state = {
        question: '',
        answer: ''
    };

    handlerSubmit(){
        const {question, answer} = this.state;
        const {entryId} = this.props;
        this.props.actions.saveCard(entryId, {question, answer}).then(() => {
            alert('success');
            this.setState({
                question: '',
                answer: ''
            });
        }).catch(e => alert(e))
    }

    render() {
        return (
            <KeyboardAvoidingView  behavior="padding" style={styles.container}>
                <Text>Question</Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={(question) => this.setState({question})}
                    value={this.state.question}
                />
                <Text>Answer</Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={(answer) => this.setState({answer})}
                    value={this.state.answer}
                />
                <TouchableOpacity style={styles.btn} onPress={this.handlerSubmit.bind(this)}>
                    <Text style={styles.bntColor}>Submit</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        );
    }
}

function mapStateToProps (state, { navigation }) {
    const { entryId } = navigation.state.params

    return {
        entryId,
    }
}
function mapDispatch (dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch),
    }
}
export default connect(mapStateToProps, mapDispatch)(AddCardForm);

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