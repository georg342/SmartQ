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
    
    headerText: {
        fontSize: 15,
        color: '#737380'
    },

    headerBoldText: {
        fontWeight: 'bold',
        color: '#737380'
    },

    title: {
        fontSize: 30,
        marginBottom: 0,
        marginTop: 48,
        color: '#13131a',
        fontWeight: 'bold'
    },

    description: {
        fontSize: 24,
        marginBottom: 0,
        marginTop: 8,
        color: '#13131a',
    },

    queueList: {
        marginTop: 32,
    },

    queue: {
        padding: 24,
        borderRadius: 10,
        backgroundColor: '#fff',
        marginBottom: 16,
    },

    queueProperty: {
        fontSize: 14,
        color: '#262626',
        fontWeight: 'bold',
    },

    queueValue: {
        fontSize: 15,
        marginBottom: 24,
        color: '#404040'
    },

    queueValueBold: {
        color: '#BF0413',
        fontWeight: 'bold',
        marginBottom: 24,
    },

    detailsButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    detailsButtonText: {
        color: '#CC1C00',
        fontWeight: 'bold',
        fontSize: 15,
        lineHeight: 30
    },
});