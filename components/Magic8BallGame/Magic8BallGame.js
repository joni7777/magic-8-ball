import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';

import styles from './Magic8BallGame.css';
import Magic8BallProxy from './Magic8BallGame.proxy'
import AskQuestionForm from '../AskQuestionForm/AskQuestionForm';

class Magic8BallGame extends Component {
    state = { answer: '', giphyUrl: 'https://media.giphy.com/media/14bXjwl8BBiQaA/giphy.gif?response_id=591ca19fb3fefa8438a02d0b', loadingAnswer: false };

    render() {
        return (
            <View style={styles.magic8BallGameContainer}>
                <AskQuestionForm onQuestionAsked={(question) => this.onQuestionAsked(question)}/>
                <Text>{this.state.answer}</Text>
                { this.state.loadingAnswer ?
                    <Image
                        style={styles.magic8BallGiphy}
                        source={{uri: this.state.giphyUrl}}
                    />: null }
            </View>
        );
    }

    async onQuestionAsked(question) {
        this.setState({loadingAnswer: true});

        let questionResponse = await Magic8BallProxy.onQuestionAsked(question);
        this.setState({answer: questionResponse.answer});

        const answerGiphy = await Magic8BallProxy.getTopicGif(questionResponse.success ? questionResponse.topic : 'cat');
        this.setState({giphyUrl: answerGiphy});
    }
}

export default Magic8BallGame;