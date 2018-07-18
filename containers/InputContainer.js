import { connect } from 'react-redux';

import { addMessage, showHint, hideHint, 
    setInputValue, getReply, startRecognizing,
    addPartialResult, addResult } from '../actions';
import InputPanel from '../components/InputPanel';

const mapStateToProps = state => ({
    state: state,
})

const mapDispatchToProps = dispatch => ({
    addMessage: (text, isUser) => dispatch(addMessage(text, isUser)),
    showHint: () => dispatch(showHint()),
    hideHint: () => dispatch(hideHint()),
    setInputValue: (text) => dispatch(setInputValue(text)),
    getReply: (text) => dispatch(getReply(text)),
    startRecognizing: () => dispatch(startRecognizing()),
    addPartialResult: (result) => dispatch(addPartialResult(result)),
    addResult: (result) => dispatch(addResult(result)),
})

const InputContainer = connect(
    mapStateToProps, mapDispatchToProps
)(InputPanel)

export default InputContainer;