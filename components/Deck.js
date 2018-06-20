import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class Deck extends React.Component {

    render() {
        const {item} = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.textPrimary}>{item.title}</Text>
                <Text style={styles.textSecondary}>{item.questions ? item.questions.length : 0} cards</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 20,
        paddingTop: 20
    },
    textSecondary: {
        color: '#6c757d'
    },
    textPrimary: {
        fontSize: 19
    }
});