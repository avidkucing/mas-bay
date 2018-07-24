import { connect } from 'react-redux';

import { addMessage, getReply, startRecognizing,
    addPartialResult, } from '../actions';
import RecordButton from '../components/RecordButton';

const mapStateToProps = state => ({
    state: state,
})

const mapDispatchToProps = dispatch => ({
    addMessage: (text, isUser) => dispatch(addMessage(text, isUser)),
    getReply: (text) => dispatch(getReply(text)),
    startRecognizing: () => dispatch(startRecognizing()),
    addPartialResult: (result) => dispatch(addPartialResult(result)),
})

const ButtonContainer = connect(
    mapStateToProps, mapDispatchToProps
)(RecordButton)

export default ButtonContainer;