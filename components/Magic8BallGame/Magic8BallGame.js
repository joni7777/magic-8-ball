import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';

import styles from './Magic8BallGame.css';
import Magic8BallProxy from './Magic8BallGame.proxy'
import AskQuestionForm from '../AskQuestionForm/AskQuestionForm';

class Magic8BallGame extends Component {
    state = { answer: '', giphyUrl: '' };

    render() {
        return (
            <View style={styles.magic8BallGameContainer}>
                <AskQuestionForm onQuestionAsked={(question) => this.onQuestionAsked(question)}/>
                <Text>{this.state.answer}</Text>
                { this.state.giphyUrl ?
                    <Image
                        style={{width: 100, height: 100}}
                        source={{uri: this.state.giphyUrl}}
                    />: null }
            </View>
        );
    }

    async onQuestionAsked(question) {
        let giphyUrl = 'https://media.giphy.com/media/14bXjwl8BBiQaA/giphy.gif?response_id=591ca19fb3fefa8438a02d0b';
        this.setState({giphyUrl: giphyUrl});
        let answerObject = await Magic8BallProxy.onQuestionAsked(question);
        this.setState({answer: answerObject.answer});


        if(!answerObject.success) {
            answerObject.topic = 'cat';
        }
        let answerGiphy = await Magic8BallProxy.getAnswerGiphy(answerObject.topic);
        this.setState({giphyUrl: answerGiphy});
    }
}

export default Magic8BallGame;