import React from 'react';
import { View, Text, Image } from 'react-native';

import { ChatRoom } from '../../types';
import styles from './style';

export type ChatListItemProps = {
	chatRoom: ChatRoom;
};

const ChatListItem = (props: ChatListItemProps) => {
	const { chatRoom } = props;
	const user = chatRoom.users[1];
	console.log(user);

	return (
		<View>
			<Image source={{ uri: user.imageUrl }} />
			<Text>{chatRoom.lastMessage.content}</Text>
		</View>
	);
};

export default ChatListItem;
