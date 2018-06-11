import React from 'react';
import { Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation';
import Decks from './Decks';

const NewDeck = () => (
    <View>
        <Text>NewDeck!</Text>
    </View>
);
const Tabs = createMaterialTopTabNavigator({
    Deck: {
        screen: Decks
    },
    NewDeck: {
        screen: NewDeck
    },
});
export default class App extends React.Component {

  render() {
    return (
      <Tabs/>
    );
  }
}
