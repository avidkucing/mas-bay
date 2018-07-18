import { StyleSheet } from 'react-native';

export const mainColor = '#fabc3d';
export const secondaryColor = '#3e3e3f';
export const tintColor= '#f37a10';
export const shadeColor= '#fddea0';
export const white= 'white';

export const screens = StyleSheet.create({
    homeContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fddea0',
    },
    
});

export const chatComponents = StyleSheet.create({
    chatWindow: { 
        flex: 10,
        backgroundColor: '#fddea0',
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
        marginTop: 10,
    },
    messageBubble: {
        backgroundColor: 'white',
        borderRadius: 25,
        marginLeft: 15,
        marginRight: 15,
        maxWidth: 280,
    },
    messageText: {
        margin: 10,
        marginRight: 20,
        marginLeft: 20,
        color: secondaryColor,
    },
});

export const hintComponents = StyleSheet.create({
    hintPanel: { 
        flexDirection: 'row',
        alignItems: 'flex-end',
        backgroundColor: '#fddea0',
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
    },
    
});

export const inputComponents = StyleSheet.create ({
    inputPanel: { 
        height: 60,
        flexDirection: 'row',
        width: 360,
        alignItems: 'center',
        backgroundColor: '#fddea0',
    },
    formContainer: {
        width: 280,
        height: 40,
        borderRadius: 50,
        justifyContent: 'center',
        marginRight: 3,
        elevation: 1,
        backgroundColor: 'white',
    },
    formInput: {
        margin: 10,
        width: 240,
    },
    iconContainer: {
        elevation: 1,
        marginBottom: 10,
    },
});

export const titleBar = StyleSheet.create({
    mainContainer: {
        flexDirection:'row',
        elevation: 5,
        height: 50,
        width: 360,
        backgroundColor: '#fabc3d',
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
    leftText: {
        fontSize: 20,
        color: '#3e3e3f',
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