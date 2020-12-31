import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { User } from '../../types';
import styles from './style';

export type ContactListItemProps = {
	user: User;
};

const ContactListItem = (props: ContactListItemProps) => {
	const { user } = props;
	const navigation = useNavigation();

	const handlePress = () => {
		// Navigate to chat room with this user
	};

	return (
		<TouchableWithoutFeedback onPress={handlePress}>
			<View style={styles.container}>
				<View style={styles.leftContainer}>
					<Image source={{ uri: user.imageUrl }} style={styles.avatar} />

					<View style={styles.midContainer}>
						<Text style={styles.userName}>{user.name}</Text>
						<Text style={styles.status}>{user.status}</Text>
					</View>
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
};

export default ContactListItem;
