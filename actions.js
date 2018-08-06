import { ToastAndroid } from 'react-native';
import axios from 'axios';
import DeviceInfo from 'react-native-device-info';

export const ADD_MESSAGE = 'ADD_MESSAGE';
export const SHOW_HINT = 'SHOW_HINT';
export const HIDE_HINT = 'HIDE_HINT';
export const SET_INPUT_VALUE = 'SET_INPUT_VALUE';
export const SET_PASSWORD_VALUE = 'SET_PASSWORD_VALUE';
export const SET_EMAIL_VALUE = 'SET_EMAIL_VALUE';
export const RECEIVE_REPLY = 'RECEIVE_REPLY';
export const START_RECOGNIZING = 'START_RECOGNIZING';
export const ADD_PARTIAL_RESULT = 'ADD_PARTIAL_RESULT';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const SET_SESSION = 'SET_SESSION';
export const SET_SALDO = 'SET_SALDO';
export const SET_NAME = 'SET_NAME';
export const SET_RIWAYAT = 'SET_RIWAYAT';
export const ADD_RIWAYAT = 'ADD_RIWAYAT';
export const TOGGLE_LOADING = 'TOGGLE_LOADING';
export const CHANGE_TAB = 'CHANGE_TAB';
export const CHANGE_NEWS = 'CHANGE_NEWS';


let nextId = 0;

export const changeNews = (number) => {
    return {
        type: CHANGE_NEWS,
        number
    }
}

export const toggleLoading = () => {
    return {
        type: TOGGLE_LOADING,
    }
}

export const changeTab = (number) => {
    return {
        type: CHANGE_TAB,
        number
    }
}

export const login = () => {
    return {
        type: LOGIN,
    }
}

export const logout = () => {
    return {
        type: LOGOUT,
    }
}

export const setSession = (text) => {
    return {
        type: SET_SESSION,
        text
    }
}

export const setName = (text) => {
    return {
        type: SET_NAME,
        text
    }
}

export const setSaldo = (text) => {
    return {
        type: SET_SALDO,
        text
    }
}

export const setRiwayat = (array) => {
    return {
        type: SET_RIWAYAT,
        array
    }
}

export const addRiwayat = (array) => {
    return {
        type: ADD_RIWAYAT,
        array
    }
}

export const addMessage = (text, isUser) => {
    return {
        type: ADD_MESSAGE,
        id: ''+nextId++,
        text, isUser
    }
}


export const showHint = () => {
    return {
        type: SHOW_HINT,
    }
}

export const hideHint = () => {
    return {
        type: HIDE_HINT,
    }
}

export const setInputValue = (text) => {
    return {
        type: SET_INPUT_VALUE,
        text
    }
}

export const setPasswordValue = (text) => {
    return {
        type: SET_PASSWORD_VALUE,
        text
    }
}

export const setEmailValue = (text) => {
    return {
        type: SET_EMAIL_VALUE,
        text
    }
}

export const receiveReply = (text) => {
    return {
        type: RECEIVE_REPLY,
        id: ''+nextId++,
        text: text.split('*')[0],
        intent: text.split('*')[1],
    }
}

export const startRecognizing = () => {
    return {
        type: START_RECOGNIZING,
    }
}

export const addPartialResult = (result) => {
    return {
        type: ADD_PARTIAL_RESULT,
        result
    }
}

//redux-thunk actions
export const getReply = (text, isHideHint = true) => dispatch => {
    const url = 'https://intense-inlet-67504.herokuapp.com/chat';
    const uniqueId = DeviceInfo.getUniqueID();
    const data = {
        deviceId: uniqueId,
        text: text,
    };

    dispatch(toggleLoading());
    if (isHideHint) dispatch(hideHint());
    axios.post(url, data)
      .then((response) => {
            dispatch(receiveReply(response.data));
            dispatch(toggleLoading());
            setTimeout(()=>dispatch(showHint()), 1000);
        }
    );
}

export const getSaldo = (text) => dispatch => {
    const url = 'https://intense-inlet-67504.herokuapp.com/ceksaldo';
    const data = {
        session: text,
    };

    dispatch(toggleLoading());
    axios.post(url, data)
      .then((response) => {
            dispatch(setSaldo(response.data));
            dispatch(toggleLoading());
        }
    );
}

export const getRiwayat = (session, date) => dispatch => {
    const url = 'https://intense-inlet-67504.herokuapp.com/riwayattransaksi';
    const uniqueId = DeviceInfo.getUniqueID();
    const data = {
        session: session || '',
        deviceId: uniqueId,
        date: date || '',
    };

    dispatch(toggleLoading());
    axios.post(url, data)
      .then((response) => {
            dispatch(setRiwayat(response.data));
            dispatch(toggleLoading());
        }
    );
}

export const getLoginStatus = (userId, password, session) => dispatch => {
    const url = 'https://intense-inlet-67504.herokuapp.com/login';
    const data = {
        userId: userId,
        password: password,
    };

    dispatch(toggleLoading());

    axios.post(url, data)
        .then((response) => {
            ToastAndroid.show(response.data.isloggedin.toString(), ToastAndroid.SHORT);
            if (response.data.isloggedin) {
                dispatch(login());
                dispatch(setSession(response.data.session));
                dispatch(setName(response.data.name));
                dispatch(getSaldo(session));
                dispatch(getRiwayat(session));
            }
            dispatch(toggleLoading());
        });
}