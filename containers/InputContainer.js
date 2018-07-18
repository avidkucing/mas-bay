import { connect } from 'react-redux';

import { addMessage, toggleHint, setInputValue, getReply } from '../actions';
import InputPanel from '../components/InputPanel';

const mapStateToProps = state => ({
    state: state,
})

const mapDispatchToProps = dispatch => ({
    addMessage: (text, isUser) => dispatch(addMessage(text, isUser)),
    toggleHint: () => dispatch(toggleHint()),
    setInputValue: (text) => dispatch(setInputValue(text)),
    getReply: (text) => dispatch(getReply(text)),
})

const InputContainer = connect(
    mapStateToProps, mapDispatchToProps
)(InputPanel)

export default InputContainer;