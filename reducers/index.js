import { SAVE_DECK, FIND_ALL_DECKS, SAVE_CARD } from '../actions'

export default (state = {data: {}}, action) => {
    switch (action.type) {
        case SAVE_DECK :
            const {deck} = action;
            const {title} = deck;
            return {
                ...state, ...{data: {[title]: { title, questions: [] }}}
            };
        case FIND_ALL_DECKS :
            let {data} = action;
            return {
                ...state, ...{data}
            };
        case SAVE_CARD :
            return {
                ...state,
                [action.title]: {
                    title: action.title,
                    questions: [
                        ...state.data[action.title].questions,
                        action.card
                    ]
                }
            };
        default :
            return state
    }
}