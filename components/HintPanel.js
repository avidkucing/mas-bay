import React from 'react';
import { View, ScrollView } from 'react-native';
import HintButton from './HintButton';

const options1 = ['pulsa'];
const options2 = ['085692355339']; 
const options3 = ['50000', '100000', '5000', '10000', '20000', '25000'];
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

const HintPanel = ({ intent, addMessage ,getReply , isShowHint, showHint}) => {

    const optionNumber = getNumber(intent);

    const renderContent = () => {
        if (isShowHint) 
            return (
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                >
                {allOptions[optionNumber].map((text)=>
                    <HintButton
                        key={text} 
                        text={text}
                        onPress={() => {
                            addMessage(text, true);
                            getReply(text, true);
                        }}
                    />
                )}
                </ScrollView> 
            )
    }

    const content = renderContent();

    return (
        <View
            flexDirection='row' 
            style={{ 
                flexDirection: 'row',
                alignItems: 'flex-end',
                backgroundColor: '#fddea0',
            }}
        >
            {content}
        </View>
    );
}

export default HintPanel;