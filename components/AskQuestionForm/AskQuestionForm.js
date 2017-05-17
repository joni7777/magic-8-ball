import _ from 'lodash';
import React, {Component, PropTypes,} from 'react';
import {Button, TextInput, View, StyleSheet,} from 'react-native';

class AskQuestionForm extends Component {
	state = {
		question: ''
	};

	render() {
		return (
			<View style={styles.container}>
				<TextInput
					value={this.state.question}
					style={{height: 40, borderColor: 'gray', borderWidth: 1, padding: 5}}
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

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 10
	},
});