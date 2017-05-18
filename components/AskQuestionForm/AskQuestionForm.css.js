import {StyleSheet,} from 'react-native';

export default StyleSheet.create({
    questionForm: {
        // flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        alignSelf: 'stretch'
    },
    questionInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 5
    },
    askQuestionBtn: {
        padding: 10,
        height: 45,
        width: 100,
        overflow: 'hidden',
        borderRadius: 4,
        backgroundColor: '#42c299',
        margin: 10
    }
});