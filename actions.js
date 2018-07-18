import axios from 'axios';
import DeviceInfo from 'react-native-device-info';

export const ADD_MESSAGE = 'ADD_MESSAGE';
export const SHOW_HINT = 'SHOW_HINT';
export const HIDE_HINT = 'HIDE_HINT';
export const SET_INPUT_VALUE = 'SET_INPUT_VALUE';
export const RECEIVE_REPLY = 'RECEIVE_REPLY';
export const START_RECOGNIZING = 'START_RECOGNIZING';
export const ADD_PARTIAL_RESULT = 'ADD_PARTIAL_RESULT';
//export const ADD_RESULT = 'ADD_RESULT';


let nextId = 1;

export const addMessage = (text, isUser) => {
    return {
        type: ADD_MESSAGE,
        id: nextId++,
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

export const receiveReply = (text) => {
    return {
        type: RECEIVE_REPLY,
        id: nextId++,
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

/*export const addResult = (result) => {
    return {
        type: ADD_RESULT,
        result
    }
}*/


//redux-thunk actions
export const getReply = (text, isShowHint = true) => dispatch => {
    const url = 'https://intense-inlet-67504.herokuapp.com/chat';
    const uniqueId = DeviceInfo.getUniqueID();
    const data = {
        deviceId: uniqueId,
        text: text,
    };

    dispatch(hideHint());
    axios.post(url, data)
      .then((response) => {
            dispatch(receiveReply(response.data));
            if (isShowHint) dispatch(showHint());
        }
    );
}

