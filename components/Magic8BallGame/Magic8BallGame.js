/**
 * Created by nataliebarnatan on 17/05/2017.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import PropTypes from 'prop-types';
import AskQuestionForm from '../AskQuestionForm/AskQuestionForm';
import Magic8BallProxy from './Magic8BallGame.proxy'

class Magic8BallGame extends Component {
    state = { answer: '' };

    render() {
        return (
            <View style={styles.container}>
                <AskQuestionForm onQuestionAsked={(question) => this.onQuestionAsked(question)}/>
                <Text>{this.state.answer}</Text>
            </View>
        );
    }

    onQuestionAsked(question) {
        Magic8BallProxy.onQuestionAsked(question).then(answer => {
            this.setState({answer: answer});
        })
    }
}

Magic8BallGame.propTypes = {};
Magic8BallGame.defaultProps = {};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    },
});

export default Magic8BallGame;