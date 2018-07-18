import { ADD_MESSAGE, RECEIVE_REPLY, SET_INPUT_VALUE, ADD_MESSAGE_FROM_INPUT, SHOW_HINT, HIDE_HINT } from './actions';

const initialState = {
    messages: [
        {
            id: 0,
            text: 'Mau beli apa hari ini?',
            isUser: false,
        },
    ],
    intent: '',
    showHint: true,
    inputValue: '',
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state, 
                messages: [...state.messages, 
                    {
                        id: action.id,
                        text: action.text,
                        isUser: action.isUser,
                    }
                ]
            }
        case SHOW_HINT:
            return {
                ...state, 
                showHint: true,
            }
        case HIDE_HINT:
            return {
                ...state, 
                showHint: false,
            }
        case SET_INPUT_VALUE:
            return {
                ...state, 
                inputValue: action.text,
            }
        case RECEIVE_REPLY: 
            return {
                ...state,
                intent: action.intent,
                messages: [
                    ...state.messages, {
                        id: action.id,
                        text: action.text,
                        isUser: false,
                    }
                ] 
            }
        default:
            return state;
        }
}

export default rootReducer;