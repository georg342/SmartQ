import { StyleSheet } from 'react-native';
import Constants from 'expo-constants'; 


export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    headerBackButton: {
        height: 50, 
        width: 50, 
        alignItems: 'flex-end',

    },

    queue: {
        padding: 24,
        borderRadius: 10,
        backgroundColor: '#fff',
        marginBottom: 16,
        marginTop: 48,
    },

    queueProperty: {
        fontSize: 14,
        color: '#262626',
        fontWeight: 'bold',
        marginTop: 24
    },

    queueValue: {
        marginTop: 8,
        fontSize: 15,
        color: '#404040'
    },

    queueValueBold: {
        color: '#BF0413',
        fontWeight: 'bold',
    },

    optionsBox: {
        padding: 24,
        borderRadius: 10,
        backgroundColor: '#fff',
        marginBottom: 16,
    },

    optionsBoxTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#262626',
    },

    optionsBoxDescription: {
        marginTop: 6,
        fontSize: 15,
        color: '#737380'
    },

    action: {
        marginTop: 16,
    },

    actionButton: {
        backgroundColor: '#CC1C00',
        borderRadius: 10,
        height: 50,
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center'
    },  

    actionButtonText : {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
    },
});