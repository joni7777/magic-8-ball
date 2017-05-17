import _ from 'lodash';
import React, {Component, PropTypes,} from 'react';
import {Button, TextInput, View,} from 'react-native';

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
					onChangeText={(question) => this.setState({question})}
				/>
				<Button
					title="Send"
					onPress={() => this.state.question && this.props.onQuestionAsked(this.state.question)}
				/>
			</View>
		);
	}
}

AskQuestionForm.propTypes = {onQuestionAsked: PropTypes.func};
AskQuestionForm.defaultProps = {onQuestionAsked: _.noop};

export default AskQuestionForm;