import { 
    ADD_MESSAGE, 
    RECEIVE_REPLY, 
    SET_INPUT_VALUE, 
    SHOW_HINT, 
    HIDE_HINT, 
    START_RECOGNIZING,
    ADD_PARTIAL_RESULT,
    TOOGLE_TITLE,
    SET_EMAIL_VALUE,
    SET_PASSWORD_VALUE,
    LOGIN,
    LOGOUT,
    SET_SESSION,
    SET_SALDO,
    SET_NAME,
} from './actions';

const initialState = {
    baseURL: 'https://intense-inlet-67504.herokuapp.com',
    isLoggedIn: true,
    name: '',
    session: '',
    saldo: '',
    messages: [],
    intent: '',
    showHint: true,
    inputValue: '',
    isRecognizing: false,
    result: [],
    isTitleShown: true,
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state, 
                isLoggedIn: true,
            }
        case LOGOUT:
            return {
                ...state, 
                isLoggedIn: false,
            }
        case SET_NAME:
            return {
                ...state,
                name: action.text,
            }
        case SET_SESSION:
            return {
                ...state, 
                session: action.text,
            }
        case SET_SALDO:
            return {
                ...state, 
                saldo: action.text,
            }
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
        case SET_EMAIL_VALUE:
        return {
                ...state, 
                emailValue: action.text,
            }
        case SET_PASSWORD_VALUE:
            return {
                ...state, 
                passwordValue: action.text,
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
        case TOOGLE_TITLE:
            return {
                ...state,
                isTitleShown: !state.isTitleShown,
            }
        default:
            return state;
        }
}

export default rootReducer;