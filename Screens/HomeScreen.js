import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	TextInput,
	ScrollView,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import Carousel from "../Components/Carousel";
import QuickItems from "../Components/QuickItems";
import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import stores from "../Data/stores";
import MenuItems from "../Components/MenuItems";
import ItemsTypes from "../Components/ItemsTypes";
const HomeScreen = () => {
	const data = stores;
	return (
		<ScrollView style={{ marginTop: 50 }}>
			{/* Search bar */}

			<View
				style={{
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "space-between",
					borderColor: "#c0c0c0",
					borderRadius: 7,
					margin: 10,
					padding: 10,
					borderWidth: 1,
				}}
			>
				<TextInput
					placeholder="Search for restaurants items or area"
					fontSize={17}
				/>
				<AntDesign name="search1" size={24} color="#6CB4EE" />
			</View>
			{/* imgaeSlider */}
			<Carousel />

			{/* ItemTypes */}
			<ItemsTypes />

			{/* Quickitemss */}
			<QuickItems />

			{/* Filter buttons */}
			<View
				style={{
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "space-around",
				}}
			>
				<Pressable
					style={{
						width: "120",
						borderWidth: 1,
						borderRadius: 20,
						margin: 10,
						flexDirection: "row",
						marginHorizontal: 10,
						borderColor: "#d0d0d0",
						alignItems: "center",
						justifyContent: "center",
						padding: 10,
					}}
				>
					<Text style={{ marginRight: 5 }}>Filter</Text>
					<Ionicons name="filter" size={20} color="black" />
				</Pressable>
				<Pressable
					style={{
						width: "120",
						borderWidth: 1,
						borderRadius: 20,
						margin: 10,
						flexDirection: "row",
						marginHorizontal: 10,
						borderColor: "#d0d0d0",
						alignItems: "center",
						justifyContent: "center",
						padding: 10,
					}}
				>
					<Text>Sort By rating</Text>
				</Pressable>
				<Pressable
					style={{
						width: "120",
						borderWidth: 1,
						borderRadius: 20,
						margin: 10,
						flexDirection: "row",
						marginHorizontal: 10,
						borderColor: "#d0d0d0",
						alignItems: "center",
						justifyContent: "center",
						padding: 10,
					}}
				>
					<Text>Sort By price</Text>
				</Pressable>
			</View>
			{data.map((item, index) => (
				<MenuItems key={index} item={item} />
			))}
		</ScrollView>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({});
