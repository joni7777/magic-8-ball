import _ from 'lodash';
import React, {Component, PropTypes,} from 'react';
import {TextInput, View,} from 'react-native';
import Button from 'react-native-button'
import styles from './AskQuestionForm.css';

class AskQuestionForm extends Component {
	state = {
		question: ''
	};

	render() {
		return (
			<View style={styles.questionForm}>
				<TextInput
					value={this.state.question}
					style={styles.questionInput}
					blurOnSubmit={true}
					enablesReturnKeyAutomatically={true}
					placeholder="Ask a question..."
					returnKeyType="go"
					onChangeText={(question) => this.setState({question})}
					onKeyPress={(e) => this.handleKeyDown(e)}
				/>
				<Button
					containerStyle={styles.askQuestionBtn}
					style={{fontSize: 20, color: '#fff'}}
					onPress={() => this.state.question && this.props.onQuestionAsked(this.state.question)}>
					Send!
				</Button>
			</View>
		);
	}

    handleKeyDown(e) {
        if(e.nativeEvent.key == "Enter"){
            this.props.onQuestionAsked(this.state.question);
        }
    }
}

AskQuestionForm.propTypes = {onQuestionAsked: PropTypes.func};
AskQuestionForm.defaultProps = {onQuestionAsked: _.noop};

export default AskQuestionForm;