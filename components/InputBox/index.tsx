import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import {
	MaterialCommunityIcons,
	MaterialIcons,
	FontAwesome5,
	Entypo,
	Fontisto,
} from '@expo/vector-icons';

import styles from './style';

const InputBox = () => {
	const [message, setMessage] = useState('');

	const micPressed = () => {
		console.warn('Microphone pressed!');
	};

	const sendPressed = () => {
		console.warn('Sending pressed!');

		// Send message to backend

		setMessage('');
	};

	const handlePress = () => {
		!message ? micPressed() : sendPressed();
	};

	return (
		<View style={styles.container}>
			<View style={styles.mainContainer}>
				<FontAwesome5 name="laugh-beam" size={24} color="grey" />
				<TextInput
					style={styles.textInput}
					multiline
					placeholder={'Type a message.'}
					value={message}
					onChangeText={setMessage}
				/>
				<Entypo style={styles.icon} name="attachment" size={24} color="grey" />
				{!message && (
					<Fontisto style={styles.icon} name="camera" size={24} color="grey" />
				)}
			</View>

			<TouchableOpacity onPress={handlePress}>
				<View style={styles.buttonContainer}>
					{!message ? (
						<MaterialCommunityIcons name="microphone" size={28} color="white" />
					) : (
						<MaterialIcons name="send" size={28} color="white" />
					)}
				</View>
			</TouchableOpacity>
		</View>
	);
};

export default InputBox;
