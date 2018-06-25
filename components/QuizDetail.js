import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';

class Quiz extends React.Component {

    handlerRestart() {
        const {deck} = this.props;
        this.props.navigation.navigate(
            'DeckDetail',
            {deck}
        );
    }

    handlerBackToDeck(){
        this.props.navigation.navigate(
            'Home'
        );
    }

    render() {
        const {userAnswer} = this.props;
        let percent = (userAnswer.filter((ans) => ans).length / userAnswer.length) * 100;
        return (
            <View behavior="padding" style={styles.container}>
                <View style={styles.container}>
                    <Text >Rate:</Text>
                    <Text style={styles.textPrimary}>{`${percent}%`}</Text>
                    <TouchableOpacity style={styles.btnFirst} onPress={this.handlerRestart.bind(this)}>
                        <Text style={styles.bntColorFirst}>Restart Quis</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn} onPress={this.handlerBackToDeck.bind(this)}>
                        <Text style={styles.bntColor}>Back to Deck</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

function mapStateToProps(state, {navigation}) {
    const {deck, userAnswer} = navigation.state.params;
    return {
        userAnswer,
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
    textPrimary: {
        fontSize: 50
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
    }
});