import { 
    ADD_MESSAGE, 
    RECEIVE_REPLY, 
    SET_INPUT_VALUE, 
    SHOW_HINT, 
    HIDE_HINT, 
    START_RECOGNIZING,
    ADD_PARTIAL_RESULT,
    ADD_RESULT
} from './actions';

const initialState = {
    messages: [],
    intent: '',
    showHint: true,
    inputValue: '',
    isRecognizing: false,
    result: [],
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
        case START_RECOGNIZING:
            return {
                ...state,
                inputValue: '',
                isRecognizing: !state.isRecognizing,
                partialResult: [],
                result: [],
            }
        case ADD_PARTIAL_RESULT:
            return {
                ...state,
                inputValue: action.result.toString(),
            }
        /*case ADD_RESULT:
            return {
                ...state,
                result: [...state.result, action.result],
            }*/
        default:
            return state;
        }
}

export default rootReducer;