import { StyleSheet } from 'react-native';

export const mainColor = '#fabc3d';
export const backgroundColor = 'white'//'#00000070';
export const tintColor= '#f37a10';
export const shadeColor= '#fabc3daa';
export const white= 'white';

export const fontSize = 14;

export const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    chatWindow: { 
        flex: 1,
        //marginTop: 10,        
    },
    messageContainerUser: {
        width: 360,
        justifyContent: 'flex-end',
        flexDirection: 'row',
        //marginTop: 10,
    },
    messageContainerBot: {
        width: 360,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        marginTop: 10,
    },
    messageBubbleUser: {
        backgroundColor: mainColor,
        borderRadius: 25,
        margin: 10,
        marginLeft: 15,
        marginRight: 15,
        maxWidth: 280,
        elevation: 5,
    },
    messageBubbleBot: {
        backgroundColor: '#fff',
        borderRadius: 25,
        margin: 10,
        marginLeft: 0,
        marginRight: 15,
        maxWidth: 280,
        justifyContent: 'center',
        elevation: 5,
    },
    messageTextUser: {
        margin: 10,
        marginRight: 20,
        marginLeft: 20,
        color: '#666',
        fontSize: fontSize,
    },
    messageTextBot: {
        margin: 10,
        marginRight: 20,
        marginLeft: 20,
        color: '#666',
        fontSize: fontSize,
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 80,
    }
});

export const hintComponents = StyleSheet.create({
    hintPanel: { 
        flexDirection: 'row',
        alignItems: 'center',
        height: 96,
    },
    hintButtonContainer: {
        backgroundColor: mainColor,
        borderRadius: 25,
        marginLeft: 15,
        alignSelf: 'flex-start',
        elevation: 5,
        margin: 10,
    },
    hintButtonText: {
        margin: 10,
        marginRight: 20,
        marginLeft: 20,
        color: '#666',
        fontSize: fontSize,
    },
    
});

export const inputComponents = StyleSheet.create ({

    formContainer: {
        width: 360,
        //borderRadius: 25,
        justifyContent: 'center',
        elevation: 5,
        backgroundColor: '#fff',
    },
    formInput: {
        marginLeft: 10,
        width: 240,
        fontSize: fontSize,
        color: 'black',
        //elevation: 5,
    },
    loginContainer: {
        borderRadius: 25,
        width: 240,
        backgroundColor: '#ffffffaa',
        marginBottom: 20,
    },
    loginInput: {
        marginLeft: 10,
        fontSize: fontSize,
        color: 'black',
    },
    loginButtonContainer: {
        marginTop: 20,
    },
    
});

