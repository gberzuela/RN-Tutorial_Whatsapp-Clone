import { Ionicons } from '@expo/vector-icons';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { MainTabParamList, TabOneParamList, TabTwoParamList } from '../types';

import { Fontisto } from '@expo/vector-icons';

const MainTab = createMaterialTopTabNavigator<MainTabParamList>();

export default function MainTabNavigator() {
	const colorScheme = useColorScheme();

	/* Need to customize tab size for camera */
	return (
		<MainTab.Navigator
			initialRouteName="Chats"
			tabBarOptions={{
				activeTintColor: Colors[colorScheme].background,
				indicatorStyle: {
					backgroundColor: Colors[colorScheme].background,
					height: 4,
				},
				labelStyle: {
					fontWeight: 'bold',
				},
				showIcon: true,
				style: { backgroundColor: Colors[colorScheme].tint },
			}}
		>
			<MainTab.Screen
				name="Camera"
				component={TabOneNavigator}
				options={{
					tabBarIcon: ({ color }) => (
						<Fontisto name="camera" color={color} size={18} />
					),
					tabBarLabel: () => null,
				}}
			/>
			<MainTab.Screen name="Chats" component={TabTwoNavigator} />
			<MainTab.Screen name="Status" component={TabOneNavigator} />
			<MainTab.Screen name="Calls" component={TabTwoNavigator} />
		</MainTab.Navigator>
	);
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
	return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
	return (
		<TabOneStack.Navigator>
			<TabOneStack.Screen
				name="TabOneScreen"
				component={TabOneScreen}
				options={{ headerShown: false }}
			/>
		</TabOneStack.Navigator>
	);
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
	return (
		<TabTwoStack.Navigator>
			<TabTwoStack.Screen
				name="TabTwoScreen"
				component={TabTwoScreen}
				options={{ headerShown: false }}
			/>
		</TabTwoStack.Navigator>
	);
}