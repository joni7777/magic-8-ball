import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';

import logo from '../../assets/logo.png';
import styles from './Magic8BallGame.css';
import Magic8BallProxy from './Magic8BallGame.proxy'
import AskQuestionForm from '../AskQuestionForm/AskQuestionForm';

const LOADING_ANSWER_GIPGY_URL = "https://media.giphy.com/media/14bXjwl8BBiQaA/giphy.gif?response_id=591ca19fb3fefa8438a02d0b";

class Magic8BallGame extends Component {
    state = {answer: '', giphyUrl: '', loadingAnswer: false};

    render() {
        return (
            <View style={styles.magic8BallGameContainer}>
                <Image source={logo}/>
                <AskQuestionForm onQuestionAsked={(question) => this.onQuestionAsked(question)}/>
                <Text style={styles.magic8BallAnswer}>{this.state.answer}</Text>
                { this.state.loadingAnswer ?
                    <Image
                        style={styles.magic8BallGiphy}
                        source={{uri: LOADING_ANSWER_GIPGY_URL}}
                    />
                    :
                    this.state.answer !== '' ?
                        <Image
                            style={styles.magic8BallGiphy}
                            source={{uri: this.state.giphyUrl}}
                        />
                        : null
                }
            </View>
        );
    }

    async onQuestionAsked(question) {
        this.setState({loadingAnswer: true, answer: ''});

        let questionResponse = await Magic8BallProxy.onQuestionAsked(question);

        const answerGiphy = await Magic8BallProxy.getTopicGif(questionResponse.success ? questionResponse.topic : 'cat');

        this.setState({giphyUrl: answerGiphy, answer: questionResponse.answer, loadingAnswer: false});
    }
}

export default Magic8BallGame;