import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import React from "react";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import {
	decrementQuantity,
	incrementQuantity,
	removeFromCart,
} from "../redux/CartReducer";
const CartScreen = () => {
	const navigation = useNavigation();
	const route = useRoute();
	const cart = useSelector((state) => state.cart.cart);
	const total = cart
		.map((item) => item.price * item.quantity)
		.reduce((curr, prev) => curr + prev, 0);
	const dispatch = useDispatch();
	const instructions = [
		{
			id: "0",
			name: "Avoid Ringing",
			iconName: "bell",
		},
		{
			id: "1",
			name: "Leave at the door",
			iconName: "door-open",
		},
		{
			id: "2",
			name: "directions to reach",
			iconName: "directions",
		},
		{
			id: "3",
			name: "Avoid Calling",
			iconName: "phone-alt",
		},
	];
	return (
		<ScrollView style={{ marginTop: 50 }}>
			{total > 0 ? (
				<>
					<View
						style={{
							flexDirection: "row",
							padding: 10,
							alignItems: "center",
						}}
					>
						<Ionicons
							onPress={() => navigation.goBack()}
							name="arrow-back"
							size={24}
							color="black"
						/>
						<Text
							style={{
								fontSize: 17,
								fontWeight: "bold",
								marginLeft: 3,
							}}
						>
							{route.params.name}
						</Text>
					</View>
					<View
						style={{
							backgroundColor: "white",
							padding: 15,
							borderRadius: 8,
							marginHorizontal: 10,
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "space-between",
						}}
					>
						<View
							style={{
								flexDirection: "row",
								alignItems: "center",
								justifyContent: "space-between",
								marginTop: 5,
							}}
						>
							<Text style={{ fontSize: 16, fontWeight: "500" }}>
								Ordering for Someone else?
							</Text>
							<Text
								style={{
									fontSize: 16,
									fontWeight: "600",
									color: "#ff4500",
									marginLeft: 80,
								}}
							>
								Add Details
							</Text>
						</View>
					</View>

					<View
						style={{
							marginTop: 16,
							marginHorizontal: !5,
							backgroundColor: "white",
							borderRadius: 12,
							padding: 14,
						}}
					>
						{cart.map((item, index) => (
							<View
								style={{
									flexDirection: "row",
									alignItems: "center",
									justifyContent: "space-between",
									marginVertical: 10,
								}}
								key={index}
							>
								<Text
									style={{
										width: 100,
										fontSize: 16,
										fontWeight: "600",
									}}
								>
									{item.name}
								</Text>
								<Pressable
									style={{
										flexDirection: "row",
										paddingHorizontal: 10,
										paddingVertical: 5,
										alignItems: "center",
										borderColor: "#BEBEBE",
										borderWidth: 0.5,
										borderRadius: 10,
									}}
								>
									<Pressable
										onPress={() => {
											dispatch(decrementQuantity(item));
										}}
									>
										<Text
											style={{
												fontSize: 20,
												color: "green",
												paddingHorizontal: 6,
												fontWeight: "600",
											}}
										>
											-
										</Text>
									</Pressable>

									<Pressable>
										<Text
											style={{
												fontSize: 19,
												color: "green",
												paddingHorizontal: 8,
												fontWeight: "600",
											}}
										>
											{item.quantity}
										</Text>
									</Pressable>

									<Pressable
										onPress={() => {
											dispatch(incrementQuantity(item));
										}}
									>
										<Text
											style={{
												fontSize: 20,
												color: "green",
												paddingHorizontal: 6,
												fontWeight: "600",
											}}
										>
											+
										</Text>
									</Pressable>
								</Pressable>
								<Text
									style={{ fontSize: 16, fontWeight: "bold" }}
								>
									#{item.price * item.quantity}
								</Text>
							</View>
						))}
					</View>
					<View style={{ padding: 10 }}>
						<Text style={{ fontSize: 16, fontWeight: "600" }}>
							Delivery Instructions
						</Text>
						<ScrollView
							horizontal
							style={{ marginTop: 10 }}
							showsHorizontalScrollIndicator={false}
						>
							{instructions.map((item, index) => (
								<Pressable
									style={{
										margin: 10,
										borderRadius: 10,
										padding: 10,
										backgroundColor: "white",
									}}
								>
									<View>
										<FontAwesome5
											name={item.iconName}
											size={22}
											color={"gray"}
										/>
										<Text
											style={{
												width: 75,
												fontSize: 13,
												paddingTop: 10,
												color: "#383838",
											}}
										>
											{item.name}
										</Text>
									</View>
								</Pressable>
							))}
						</ScrollView>
					</View>
					<View style={{ marginHorizontal: 10 }}>
						<Text style={{ fontSize: 16, fontWeight: "bold" }}>
							Billing Details
						</Text>
						<View
							style={{
								backgroundColor: "white",
								borderRadius: 7,
								padding: 10,
								marginTop: 15,
							}}
						>
							<View
								style={{
									flexDirection: "row",
									alignItems: "center",
									justifyContent: "space-between",
								}}
							>
								<Text
									style={{
										fontSize: 16,
										fontWeight: "500",
										color: "gray",
									}}
								>
									Item Total
								</Text>
								<Text
									style={{ fontSize: 17, fontWeight: "400" }}
								>
									#{total}
								</Text>
							</View>

							<View
								style={{
									flexDirection: "row",
									alignItems: "center",
									justifyContent: "space-between",
									marginVertical: 8,
								}}
							>
								<Text
									style={{
										fontSize: 18,
										fontWeight: "500",
										color: "gray",
									}}
								>
									Delivery Fee | 1.2KM
								</Text>
								<Text
									style={{
										fontSize: 18,
										fontWeight: "500",
										color: "#ff4500",
									}}
								>
									FREE
								</Text>
							</View>

							<View
								style={{
									flexDirection: "row",
									alignItems: "center",
								}}
							>
								<Text
									style={{
										fontSize: 18,
										fontWeight: "500",
										color: "gray",
									}}
								>
									Free Delivery for your Order!
								</Text>
							</View>
							<View
								style={{
									marginTop: 10,
									borderColor: "gray",
									borderWidth: 0.5,
									height: 1.5,
								}}
							/>

							<View
								style={{
									flexDirection: "row",
									alignItems: "center",
									justifyContent: "space-between",
									marginVertical: 10,
								}}
							>
								<Text
									style={{
										fontSize: 18,
										fontWeight: "500",
										color: "gray",
									}}
								>
									Delivery Tip 
								</Text>
								<Text
									style={{
										fontSize: 18,
										fontWeight: "500",
										color: "#ff4500",
									}}
								>
									ADD TIP
								</Text>
							</View>

							<View
								style={{
									flexDirection: "row",
									alignItems: "center",
								}}
							>
								<Text
									style={{
										fontSize: 18,
										fontWeight: "500",
										color: "gray",
									}}
								>
									Taxes and Charges
								</Text>
							</View>
						</View>
					</View>
				</>
			) : (
				<View
					style={{
						flex: 1,
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<Text
						style={{
							fontSize: 16,
							fontWeight: "600",
							textAlign: "center",
						}}
					>
						Your Cart is Empty!
					</Text>
				</View>
			)}
		</ScrollView>
	);
};

export default CartScreen;

const styles = StyleSheet.create({});
