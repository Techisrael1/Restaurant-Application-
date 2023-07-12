import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import React from "react";
import quickItems from "../Data/quickItems";
import { ImageBackground } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
const QuickItems = () => {
	const data = quickItems;
	return (
		<View style={{ margin: 10 }}>
			<Text style={{ fontWeight: 500, fontSize: 16 }}>
				Get it Quickly
			</Text>
			<ScrollView horizontal showsHorizontalScrollIndicator={false}>
				{data.map((item, index) => (
					<Pressable style={{ margin: 10 }} key={index}>
						<ImageBackground
							imageStyle={{ borderRadius: 6 }}
							style={{ aspectRatio: 5 / 6, height: 170 }}
							source={{ url: item.image }}
						>
							<Text
								style={{
									position: "absolute",
									bottom: 10,
									left: 10,
									fontSize: 25,
									fontWeight: "900",
									color: "white",
								}}
							>
								{item.offer} OFF
							</Text>
						</ImageBackground>
						<Text
							style={{
								fontSize: 15,
								fontWeight: 500,
								marginTop: 10,
							}}
						>
							{item.name}
						</Text>
						<View
							style={{
								flexDirection: "row",
								alignItems: "center",
								marginTop: 3,
							}}
						>
							<MaterialIcons
								name="stars"
								size={24}
								color="green"
							/>
							<Text
								style={{
									marginLeft: 3,
									fontSize: 15,
									fontWeight: "400",
								}}
							>
								{item.rating}
							</Text>
							<Text style={{ marginLeft: 3 }}>.</Text>
							<Text
								style={{
									marginLeft: 3,
									fontSize: 15,
									fontWeight: "400",
								}}
							>
								{item.time}mins
							</Text>
						</View>
					</Pressable>
				))}
			</ScrollView>
		</View>
	);
};

export default QuickItems;

const styles = StyleSheet.create({});
