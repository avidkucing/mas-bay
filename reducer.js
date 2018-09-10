import { 
    ADD_MESSAGE, 
    RECEIVE_REPLY, 
    SET_INPUT_VALUE, 
    SHOW_HINT, 
    HIDE_HINT, 
    SHOW_MENU, 
    HIDE_MENU,
    START_RECOGNIZING,
    ADD_PARTIAL_RESULT,
    SET_EMAIL_VALUE,
    SET_PASSWORD_VALUE,
    LOGIN,
    LOGOUT,
    SET_SESSION,
    SET_SALDO,
    SET_NAME,
    SET_RIWAYAT,
    ADD_RIWAYAT,
    TOGGLE_LOADING,
    CHANGE_TAB,
    CHANGE_NEWS,
    CLEAR_MESSAGE,
    CHANGE_HINT
} from './actions';

const initialState = {
    currentNewsIndex: 1,
    baseURL: 'https://afternoon-peak-29908.herokuapp.com',
    welcome: true,
    isLoggedIn: false,
    emailValue: '',
    passwordValue: '',
    name: '',
    session: '',
    saldo: '',
    messages: [],
    intent: '',
    showHint: false,
    showMenu: false,
    hint: 0,
    inputValue: '',
    isRecognizing: false,
    riwayat: [],
    isLoading: false,
    activeTab: 'home',
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_NEWS:
            return {
                ...state,
                currentNewsIndex: action.number,
            }
        case CHANGE_HINT:
            return {
                ...state,
                hint: action.number,
            }
        case CHANGE_TAB:
            return {
                ...state,
                activeTab: action.text,
            }
        case CLEAR_MESSAGE:
            return {
                ...state,
                messages: [],
            }
        case LOGIN:
            return {
                ...state, 
                isLoggedIn: true,
                emailValue: '',
                passwordValue: '',
            }
        case LOGOUT:
            return {
                ...state, 
                isLoggedIn: false,
                name: '',
                session: '',
                saldo: '',
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
        case SET_RIWAYAT:
            return {
                ...state, 
                riwayat: action.array
            }
        case ADD_RIWAYAT:
            return {
                ...state, 
                riwayat: [...state.messages, action.array]
            }
        case ADD_MESSAGE:
            return {
                ...state,
                welcome: false,
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
        case SHOW_MENU:
            return {
                ...state, 
                showHint: false,
                showMenu: true,
            }
        case HIDE_MENU:
            return {
                ...state, 
                showMenu: false,
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
        case TOGGLE_LOADING: 
            return {
                ...state,
                isLoading: !state.isLoading,
            }
        default:
            return state;
        }
}

export default rootReducer;