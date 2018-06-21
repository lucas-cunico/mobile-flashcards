import React from 'react';
import {createMaterialTopTabNavigator, createStackNavigator} from 'react-navigation';
import Decks from './components/Decks';
import DeckForm from './components/DeckForm';
import Deck from './components/Deck';
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
}, {
    navigationOptions: {
        header: null
    },
    tabBarOptions: {
        activeTintColor: '#fff',
        style: {
            height: 56,
            backgroundColor: '#000',
            shadowColor: 'rgba(0, 0, 0, 0.24)',
            shadowOffset: {
                width: 0,
                height: 3
            },
            shadowRadius: 6,
            shadowOpacity: 1
        }
    }
});

const MainNavigator = createStackNavigator({
    Home: {
        screen: Tabs,
        navigationOptions:{
            header: null
        }
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
