import { SAVE_DECK, FIND_ALL_DECKS, SAVE_CARD } from '../actions'

export default (state = {data: {}}, action) => {
    switch (action.type) {
        case SAVE_DECK :
            let obj = {};
            const {deck} = action;
            const {title} = deck;
            obj[title] = deck;
            return {
                ...state, ...obj
            };
        case FIND_ALL_DECKS :
            let {data} = action;
            return {
                ...state, ...{data}
            };
        case SAVE_CARD :
            let dataState = state.data;
            let {card} = action;
            let titleFromAction = action.title;
            if(dataState[titleFromAction]){
                if(!dataState[titleFromAction].questions){
                    dataState[titleFromAction].questions = []
                }
                dataState[titleFromAction].questions.push(card);
            }
            return {...state, ...{data: dataState}};
        default :
            return state
    }
}