import { connect } from 'react-redux';

import { addMessage, getReply } from '../actions';
import HintPanel from '../components/HintPanel';

const mapStateToProps = state => ({
    intent: state.intent,
    showHint: state.showHint,
})

const mapDispatchToProps = dispatch => ({
    addMessage: (text, isUser) => dispatch(addMessage(text, isUser)),
    getReply: text => dispatch(getReply(text)),
})

const CurrentHint = connect(
    mapStateToProps, mapDispatchToProps
)(HintPanel)

export default CurrentHint;