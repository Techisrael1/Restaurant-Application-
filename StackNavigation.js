import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./Screens/HomeScreen";
import MenuScreen from "./Screens/MenuScreen";
import CartScreen from "./Screens/CartScreen";

const StackNavigation = () => {
	const Stack = createNativeStackNavigator();
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="Home"
					component={HomeScreen}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="Menu"
					component={MenuScreen}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="Cart"
					component={CartScreen}
					options={{ headerShown: false }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default StackNavigation;

const styles = StyleSheet.create({});
