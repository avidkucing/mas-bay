import { ADD_MESSAGE, TOGGLE_HINT, RECEIVE_REPLY, SET_INPUT_VALUE, ADD_MESSAGE_FROM_INPUT } from './actions';

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
        /*case ADD_MESSAGE_FROM_INPUT:
            return {
                ...state, 
                messages: [...state.messages, 
                    {
                        id: action.id,
                        text: state.inputValue,
                        isUser: true,
                    }
                ]
            }*/
        case TOGGLE_HINT:
            return {
                ...state, 
                showHint: !state.showHint,
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