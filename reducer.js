import { ADD_MESSAGE } from './actions';

const initialState = {
    messages : [],
}

function chatApp (state = initialState, action) {
    switch (action.type) {
        case ADD_MESSAGE:
            return Object.assign({}, state, {
                messages: [...state.messages, action.message],
            })
        default:
            return state;
        }
}

export default chatApp;