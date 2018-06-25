import React from 'react';
import {StyleSheet, Text, TouchableOpacity, TextInput, View} from 'react-native';
import * as actions from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class DeckDetail extends React.Component {

    handlerStartQuiz(){
        let {deck} = this.props;
        if(deck.questions.length > 0){
            this.props.navigation.navigate(
                'Quiz',
                {deck}
            )
        }else{
            alert('Deck with no cards')
        }

    }

    handlerAddCard(){
        let {deck} = this.props;
        this.props.navigation.navigate(
            'AddCardForm',
            {entryId: deck.title}
        )
    }

    render() {
        let {deck} = this.props;
        return (
            <View  behavior="padding" style={styles.container}>
                <View style={styles.container}>
                    <Text style={styles.textPrimary}>{deck.title}</Text>
                    <Text style={styles.textSecondary}>{deck.questions ? deck.questions.length : 0} cards</Text>
                    <TouchableOpacity style={styles.btnFirst} onPress={this.handlerAddCard.bind(this)}>
                        <Text style={styles.bntColorFirst}>Add Card</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn} onPress={this.handlerStartQuiz.bind(this)}>
                        <Text style={styles.bntColor}>Start Quiz</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

function mapStateToProps (state, { navigation }) {
    const { deck } = navigation.state.params

    return {
        deck,
        navigation
    }
}
function mapDispatch (dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch),
    }
}
export default connect(mapStateToProps, mapDispatch)(DeckDetail);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textSecondary: {
        color: '#6c757d',
        paddingBottom: 30
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
    btnFirst: {
        backgroundColor: '#fff',
        padding: 10,
        paddingLeft: 50,
        paddingRight: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginBottom: 10
    },
    bntColorFirst: {
        color: '#000'
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