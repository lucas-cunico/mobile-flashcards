import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Deck from './Deck'

export default class Decks extends React.Component {

    state = {
        list: [{
            title: 'item 1',
            count: 2,
            key : '0'
        },{
            title: 'item 2',
            count: 2,
            key : '1'
        },{
            title: 'item 3',
            count: 5,
            key :'2'
        },{
            title: 'item 4',
            count: 1,
            key : '3'
        },{
            title: 'item 5',
            count: 0,
            key : '4'
        }]
    };

  render() {
    return (
        <View style={styles.container}>
            <FlatList
                data={this.state.list}
                renderItem={(item) => <Deck {...item}/>}
            />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
