import React from 'react';
import { View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
//our import
import { hintComponents } from '../styles/chat';
import HintButton from '../components/HintButton';
import { addMessage, getReply, hideHint } from '../actions';
import * as Animatable from 'react-native-animatable';

const mapStateToProps = state => ({
    state: state,
})

const mapDispatchToProps = dispatch => ({
    addMessage: (text, isUser) => dispatch(addMessage(text, isUser)),
    getReply: (text, boolean) => dispatch(getReply(text, boolean)),
    hideHint: () => hideHint(),
})

const options1 = ['pulsa'];
const options2 = ['085692355339']; 
const options3 = ['10000', '20000', '50000'];
const options4 = ['saldo', 'transfer'];
const options5 = ['y', 'n'];

const allOptions = [options1, options2, options3, options4, options5];

const getNumber = (intent) => {
    switch (intent) {
        case 'nmr': 
            return 1;
        case 'nom': 
            return 2;
        case 'bay': 
            return 3;
        case 'yn': 
            return 4;
        default:
            return 0;
    }
}

const MyComponent = ({ state, addMessage ,getReply , hideHint}) => {

    const optionNumber = getNumber(state.intent);

    const renderContent = () => {
        if (state.showHint) 
            return (
                
                allOptions[optionNumber].map((text)=>
                
                    <HintButton
                        key={text} 
                        text={text}
                        onPress={() => {
                            addMessage(text, true);
                            getReply(text, true);
                        }}
                    />
                )
            )
    }

    const content = renderContent();

    return (
        <Animatable.View
            animation='slideInUp'
            style={hintComponents.hintPanel}
        >
            {content}
        </Animatable.View>
    );
}

const HintPanel = connect(
    mapStateToProps, mapDispatchToProps
)(MyComponent)

export default HintPanel;