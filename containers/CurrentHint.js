import { connect } from 'react-redux';

import { addMessage, getReply, showHint } from '../actions';
import HintPanel from '../components/HintPanel';

const mapStateToProps = state => ({
    intent: state.intent,
    isShowHint: state.showHint,
})

const mapDispatchToProps = dispatch => ({
    addMessage: (text, isUser) => dispatch(addMessage(text, isUser)),
    getReply: (text, isShowHint) => dispatch(getReply(text, isShowHint)),
    showHint: () => showHint(),
})

const CurrentHint = connect(
    mapStateToProps, mapDispatchToProps
)(HintPanel)

export default CurrentHint;