import React from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import styles from './style';

import { MaterialCommunityIcons } from '@expo/vector-icons';

const NewMessageButton = () => {
	const navigation = useNavigation();

	const handlePress = () => {
		navigation.navigate('Contacts');
	};

	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={handlePress}>
				<MaterialCommunityIcons
					name="message-reply-text"
					size={28}
					color="white"
				/>
			</TouchableOpacity>
		</View>
	);
};

export default NewMessageButton;
