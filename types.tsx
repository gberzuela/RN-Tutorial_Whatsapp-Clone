export type RootStackParamList = {
	Root: undefined;
	NotFound: undefined;
	ChatRoom: undefined;
	Contacts: undefined;
};

export type MainTabParamList = {
	Camera: undefined;
	Chats: undefined;
	Status: undefined;
	Calls: undefined;
};

export type TabTwoParamList = {
	TabTwoScreen: undefined;
};

export type User = {
	id: string;
	name: string;
	imageUrl: string;
	status: string;
};

export type Message = {
	id: string;
	user: User;
	content: string;
	createdAt: string;
};

export type ChatRoom = {
	id: string;
	users: User[];
	lastMessage: Message;
};
