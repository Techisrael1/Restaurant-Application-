import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import StackNavigation from "./StackNavigation";
import store from "./store";

export default function App() {
	return (
		<>
			<Provider store={store}>
				<StackNavigation />
			</Provider>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
});
