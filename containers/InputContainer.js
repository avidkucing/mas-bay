import { connect } from 'react-redux';

import { addMessage, showHint, hideHint, setInputValue, getReply } from '../actions';
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
})

const InputContainer = connect(
    mapStateToProps, mapDispatchToProps
)(InputPanel)

export default InputContainer;