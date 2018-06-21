import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default class Deck extends React.Component {

    handlerSubmit(){
        let {title} = this.props.item;
        alert(JSON.stringify(this.props.navigation))
        // this.props.navigation.navigate(
        //     'AddCardForm',
        //     {entryId: title}
        // )
    }

    render() {
        const {item} = this.props;
        return (
            <TouchableOpacity onPress={this.handlerSubmit.bind(this)}>
            <View style={styles.container}>
                <Text style={styles.textPrimary}>{item.title}</Text>
                <Text style={styles.textSecondary}>{item.questions ? item.questions.length : 0} cards</Text>
            </View>
            </TouchableOpacity>
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