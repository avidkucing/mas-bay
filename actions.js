import axios from 'axios';

export const ADD_MESSAGE = 'ADD_MESSAGE';
//export const ADD_MESSAGE_FROM_INPUT = 'ADD_MESSAGE_FROM_INPUT';
export const TOGGLE_HINT = 'TOGGLE_HINT';
export const SET_INPUT_VALUE = 'SET_INPUT_VALUE';
export const RECEIVE_REPLY = 'RECEIVE_REPLY';

let nextId = 1;

export const addMessage = (text, isUser) => {
    return {
        type: ADD_MESSAGE,
        id: nextId++,
        text, isUser
    }
}

/*export const addMessageFromInput = () => {
    return {
        type: ADD_MESSAGE_FROM_INPUT,
        id: nextId++
    }
}*/


export const toggleHint = () => {
    return {
        type: TOGGLE_HINT,
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

export const getReply = (text) => dispatch => {
    var url = 'https://intense-inlet-67504.herokuapp.com/chat';
    var data = {text: text};

    dispatch(toggleHint());
    axios.post(url, data)
      .then((response) => dispatch(receiveReply(response.data)));
}

