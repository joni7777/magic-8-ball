import React, {Component} from 'react';
import {Text, View,} from 'react-native';

import styles from './Magic8BallGame.css';
import Magic8BallProxy from './Magic8BallGame.proxy'
import AskQuestionForm from '../AskQuestionForm/AskQuestionForm';

class Magic8BallGame extends Component {
    state = { answer: '' };

    render() {
        return (
            <View style={styles.magic8BallGameContainer}>
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

export default Magic8BallGame;