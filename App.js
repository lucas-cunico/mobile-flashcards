import React from 'react';
import {createMaterialTopTabNavigator, createStackNavigator} from 'react-navigation';
import Decks from './components/Decks';
import DeckForm from './components/DeckForm';
import AddCardForm from './components/AddCardForm';

const Tabs = createMaterialTopTabNavigator({
    Deck: {
        screen: Decks
    },
    NewDeck: {
        screen: DeckForm,
        navigationOptions: {
            tabBarLabel: 'New Deck',
        },
    },
});

const MainNavigator = createStackNavigator({
    Home: {
        screen: Tabs,
    },
    DeckForm: {
        screen: DeckForm
    },
    AddCardForm: {
        screen: AddCardForm,
        navigationOptions: {
            tabBarLabel: 'Add Card',
        },
    }
});

export default class App extends React.Component {

    render() {
        return (
            <MainNavigator/>
        );
    }
}
