import {AsyncStorage} from 'react-native'
const STORAGE_KEY = 'STORAGE_KEY';

export function saveDeck(deck) {
    let obj = {};
    const {title} = deck;
    obj[title] = deck;
    return AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify(obj))
}

export function saveCard(title, question) {
    return AsyncStorage.getItem(STORAGE_KEY)
        .then((results) => {
            const data = JSON.parse(results);
            if(data[title]){
                if(!data[title].questions){
                    data[title].questions = []
                }
                data[title].questions.push(question);
            }
            // AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data))
        })
}

export function findDecks() {
    return AsyncStorage.getItem(STORAGE_KEY);
}

export function clear() {
    return AsyncStorage.clear();
}
export function removeEntry(key) {
    return AsyncStorage.getItem(STORAGE_KEY)
        .then((results) => {
            const data = JSON.parse(results);
            data[key] = undefined;
            delete data[key];
            AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data))
        })
}