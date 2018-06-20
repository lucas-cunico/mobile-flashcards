import React from 'react';
import {createMaterialTopTabNavigator, createStackNavigator} from 'react-navigation';
import Decks from './components/Decks';
import DeckForm from './components/DeckForm';
import AddCardForm from './components/AddCardForm';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers'
import thunk from 'redux-thunk'

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
            title: 'Add Card',
            headerStyle: {
                backgroundColor: '#000',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
    }
});
const store = createStore(
    reducer,
    applyMiddleware(thunk)
);
export default class App extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <MainNavigator/>
            </Provider>
        );
    }
}
