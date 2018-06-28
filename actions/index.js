import * as api from '../utils/api';
export const SAVE_DECK = 'SAVE_DECK';
export const FIND_ALL_DECKS = 'FIND_ALL_DECKS';
export const SAVE_CARD = 'SAVE_CARD';

export function findAll () {
    return async (dispatch) => {
        let data = JSON.parse(await api.findDecks());
        dispatch ({
            type: FIND_ALL_DECKS,
            data
        })
    }
}

export function saveDeck (deck) {
    return  (dispatch) => {
        return api.saveDeck(deck).then(() => {
            dispatch( {
                type: SAVE_DECK,
                deck,
            })
        })
    }
}

export function saveCard (title, card) {
    return  (dispatch) => {
        return api.saveCard(title, card).then(() => {
            dispatch( {
                type: SAVE_CARD,
                title,
                card,
            })
        })
    }
}