import {
	NavigationContainer,
	DefaultTheme,
	DarkTheme,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { ColorSchemeName, View } from 'react-native';

import { RootStackParamList } from '../types';
import NotFoundScreen from '../screens/NotFoundScreen';
import MainTabNavigator from './MainTabNavigator';
import ChatRoomScreen from '../screens/ChatRoomScreen';
import LinkingConfiguration from './LinkingConfiguration';
import Colors from '../constants/Colors';

import {
	Octicons,
	MaterialCommunityIcons,
	MaterialIcons,
	FontAwesome5,
} from '@expo/vector-icons';
// ^^ icons.expo.fyi

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({
	colorScheme,
}: {
	colorScheme: ColorSchemeName;
}) {
	return (
		<NavigationContainer
			linking={LinkingConfiguration}
			theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
		>
			<RootNavigator />
		</NavigationContainer>
	);
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
	return (
		<Stack.Navigator
			screenOptions={{
				headerStyle: {
					backgroundColor: Colors.light.tint,
					shadowOpacity: 0, // removes header view border on iOS
					elevation: 0, // removes header view border on android
				},
				headerTintColor: Colors.light.background,
				headerTitleAlign: 'left',
				headerTitleStyle: {
					fontWeight: 'bold',
				},
			}}
		>
			<Stack.Screen
				name="Root"
				component={MainTabNavigator}
				options={{
					title: 'WhatsApp',
					// vv displays the icons for the right side of the header
					headerRight: () => (
						<View
							style={{
								flexDirection: 'row',
								width: 60,
								justifyContent: 'space-between',
								marginRight: '10',
							}}
						>
							<Octicons name="search" size={22} color="white" />
							<MaterialCommunityIcons
								name="dots-vertical"
								size={22}
								color="white"
							/>
						</View>
					),
				}}
			/>

			<Stack.Screen
				name="ChatRoom"
				component={ChatRoomScreen}
				options={({ route }) => ({
					title: route.params.name,
					headerRight: () => (
						<View
							style={{
								flexDirection: 'row',
								width: 100,
								justifyContent: 'space-between',
								marginRight: '10',
							}}
						>
							<FontAwesome5 name="video" size={22} color="white" />
							<MaterialIcons name="call" size={22} color="white" />
							<MaterialCommunityIcons
								name="dots-vertical"
								size={22}
								color="white"
							/>
						</View>
					),
				})}
			/>

			<Stack.Screen
				name="NotFound"
				component={NotFoundScreen}
				options={{ title: 'Oops!' }}
			/>
		</Stack.Navigator>
	);
}
