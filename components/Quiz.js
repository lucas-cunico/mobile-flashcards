import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {setLocalNotification, clearLocalNotification} from "../utils/helpers";

class Quiz extends React.Component {

    state = {
        progress: 0,
        isAnswer: false,
        userAnswer: []
    };

    handlerTransition() {
        this.setState({isAnswer: !this.state.isAnswer});
    }
    handlerButton(e){
        let {userAnswer} = this.state;
        userAnswer[this.state.progress] = e;
        const {deck} = this.props;
        if(this.state.progress+1 === deck.questions.length){
            clearLocalNotification.then(setLocalNotification).then(() => {
                this.props.navigation.navigate(
                    'QuizDetail',
                    {userAnswer, deck}
                );
            })

        }else{
            this.setState({
                isAnswer: false,
                progress: this.state.progress+1,
                ...{userAnswer}
            })
        }
    }

    render() {
        const {deck} = this.props;
        const {questions} = deck;
        const {progress, isAnswer} = this.state;
        return (
            <View behavior="padding" style={styles.container}>
                <Text style={styles.progress}>{`${progress + 1}/${questions.length}`}</Text>
                <View style={styles.container}>
                    <Text
                        style={styles.textPrimary}>{isAnswer ? questions[progress].answer : questions[progress].question}</Text>
                    <TouchableOpacity onPress={this.handlerTransition.bind(this)}>
                        <Text style={styles.textSecondary}>{isAnswer ? 'Question' : 'Answer'}</Text>
                    </TouchableOpacity>
                    <View style={isAnswer ? {} : {display: 'none'}}>
                        <TouchableOpacity style={styles.btnFirst} onPress={this.handlerButton.bind(this, true)}>
                            <Text style={styles.bntColorFirst}>Correct</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btn} onPress={this.handlerButton.bind(this, false)}>
                            <Text style={styles.bntColor}>Incorrect</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

function mapStateToProps(state, {navigation}) {
    const {deck} = navigation.state.params;
    return {
        deck,
        navigation
    }
}

export default connect(mapStateToProps)(Quiz);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    progress: {
        alignItems: 'flex-start'
    },
    textSecondary: {
        color: 'red',
        paddingBottom: 30,
        paddingTop: 30,
        fontSize: 15
    },
    textPrimary: {
        fontSize: 50
    },
    btnFirst: {
        backgroundColor: 'green',
        padding: 10,
        paddingLeft: 50,
        paddingRight: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginBottom: 10
    },
    bntColorFirst: {
        color: '#fff'
    },
    btn: {
        backgroundColor: 'red',
        padding: 10,
        paddingLeft: 50,
        paddingRight: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    bntColor: {
        color: '#fff'
    }
});