import { StyleSheet } from 'react-native';

export const mainColor = '#fabc3d';
export const backgroundColor = '#00000070';
export const tintColor= '#f37a10';
export const shadeColor= '#fabc3daa';
export const white= 'white';

const fontSize = 14;

export const screens = StyleSheet.create({
    homeContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: backgroundColor,
    },
    loginContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: backgroundColor,
      },
    inputContainer: {
        flexDirection: 'row',
        //width: 360,
        justifyContent: 'center',
        alignItems: 'center',
        height: 80,
    }
});

export const titleBar = StyleSheet.create({
    mainContainer: {
        flexDirection:'row',
        alignItems: 'center',
        elevation: 5,
        height: 60,
        width: 360,
        //backgroundColor: mainColor,
    },
    leftContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    leftImage: {
        width: 60,
        height: 60,
    },
    centerContainer: {
        flex: 3,
        alignItems: 'center',
    },
    centerText: {
        fontSize: 36,
        color: mainColor,
        fontWeight: 'bold',
    },
    rightContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    rightText: {
        fontWeight: 'bold',
        color: '#3e3e3f',
    },
    rightIcon: {
        marginRight: 10,
    },
});

export const chatComponents = StyleSheet.create({
    chatWindow: { 
        flex: 10,
        marginTop: 10,        
    },
    messageContainerUser: {
        width: 360,
        justifyContent: 'flex-end',
        flexDirection: 'row',
        marginTop: 10,
    },
    messageContainerBot: {
        width: 360,
        justifyContent: 'flex-start',
        flexDirection: 'row',
    },
    messageBubbleUser: {
        backgroundColor: 'white',
        borderRadius: 25,
        marginLeft: 15,
        marginRight: 15,
        maxWidth: 280,
    },
    messageBubbleBot: {
        backgroundColor: mainColor,
        borderRadius: 25,
        marginTop: 10,
        marginRight: 15,
        maxWidth: 280,
        justifyContent: 'center',
    },
    messageTextUser: {
        margin: 10,
        marginRight: 20,
        marginLeft: 20,
        color: 'black',
        fontSize: fontSize,
    },
    messageTextBot: {
        margin: 10,
        marginRight: 20,
        marginLeft: 20,
        color: 'black',
        fontSize: fontSize,
    },
});

export const hintComponents = StyleSheet.create({
    hintPanel: { 
        flexDirection: 'row',
        alignItems: 'flex-end',
        height: 60,
    },
    hintButtonContainer: {
        backgroundColor: 'white',
        borderRadius: 25,
        marginLeft: 15,
        alignSelf: 'flex-start',
        elevation: 1,
        marginTop: 10,
        marginBottom: 5,
    },
    hintButtonText: {
        margin: 10,
        marginRight: 20,
        marginLeft: 20,
        color: 'black',
        fontSize: fontSize,
    },
    
});

export const inputComponents = StyleSheet.create ({
    formContainer: {
        width: 240,
        borderRadius: 25,
        justifyContent: 'center',
        elevation: 1,
        backgroundColor: '#ffffffaa',
    },
    formInput: {
        marginLeft: 10,
        width: 300,
        fontSize: fontSize,
        color: 'black',
    },
    iconContainer: {
        elevation: 1,
        marginBottom: 10,
        marginRight: 10,
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

