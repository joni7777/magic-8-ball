import React, {Component} from 'react';
import {Text, View,} from 'react-native';

import styles from './Magic8BallGame.css';
import Magic8BallProxy from './Magic8BallGame.proxy'
import AskQuestionForm from '../AskQuestionForm/AskQuestionForm';
import ReactNativeSensorManager from '../ReactNativeSensorManager/ReactNativeSensorManager';

class Magic8BallGame extends Component {
    state = { answer: '' };

    render() {
        return (
            <View style={styles.magic8BallGameContainer}>
                <AskQuestionForm onQuestionAsked={(question) => this.onQuestionAsked(question)}/>
                <ReactNativeSensorManager/>
                <Text>{this.state.answer}</Text>
            </View>
        );
    }

    async onQuestionAsked(question) {
        this.setState({answer: await Magic8BallProxy.onQuestionAsked(question)});
    }
}

export default Magic8BallGame;