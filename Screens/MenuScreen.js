import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	ScrollView,
	Pressable,
	Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import FoodItems from "../Components/FoodItems";
import Modal from "react-native-modal";
import { useSelector } from "react-redux";

const MenuScreen = () => {
	const cart = useSelector((state) => state.cart.cart);
	const total = cart
		.map((item) => item.price * item.quantity)
		.reduce((curr, prev) => curr + prev, 0);
	console.log(cart);
	const route = useRoute();
	``;
	const navigation = useNavigation();
	const [menu, setMenu] = useState([]);
	const [modalVisible, setModalVisible] = useState(false);
	useEffect(() => {
		const fetchMenu = () => {
			setMenu(route.params.menu);
		};
		fetchMenu();
	}, []);
	const toggleModal = () => {
		setModalVisible(!modalVisible);
	};
	return (
		<>
			<ScrollView style={{ marginTop: 50 }}>
				<View
					style={{
						height: 300,
						backgroundColor: "#B0C4DE",
						borderBottomLeftRadius: 30,
						borderBottomRightRadius: 30,
					}}
				>
					<View
						style={{
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "space-between",
							margin: 10,
						}}
					>
						<Ionicons
							onPress={() => navigation.goBack()}
							name="arrow-back-outline"
							size={24}
							color="black"
						/>

						<View
							style={{
								flexDirection: "row",
								alignItems: "center",
							}}
						>
							<AntDesign name="search1" size={22} color="black" />
							<Text
								style={{
									fontSize: 16,
									fontWeight: "600",
									marginLeft: 7,
								}}
							>
								Search
							</Text>
						</View>
					</View>
					<View
						style={{
							backgroundColor: "white",
							height: 210,
							marginHorizontal: 20,
							marginVertical: 5,
							padding: 10,
							borderRadius: 15,
						}}
					>
						<View
							style={{
								flexDirection: "row",
								alignItems: "center",
								justifyContent: "space-between",
							}}
						>
							<Text style={{ fontSize: 19, fontWeight: "bold" }}>
								{route.params.name}
							</Text>
							<View
								style={{
									flexDirection: "row",
									alignItems: "center",
								}}
							>
								<AntDesign
									name="sharealt"
									size={24}
									color="black"
								/>
								<AntDesign
									marginHorizontal={7}
									name="hearto"
									size={24}
									color="black"
								/>
							</View>
						</View>
						<View
							style={{
								flexDirection: "row",
								alignItems: "center",
								marginTop: 7,
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
									fontSize: 17,
									fontWeight: "400",
								}}
							>
								{route.params.rating}
							</Text>
							<Text style={{ marginLeft: 3 }}>.</Text>
							<Text
								style={{
									marginLeft: 3,
									fontSize: 17,
									fontWeight: "400",
								}}
							>
								{route.params.time}mins
							</Text>
						</View>
						<Text style={{ marginTop: 8, fontSize: 17 }}>
							{route.params.cuisines}
						</Text>
						<View
							style={{
								flexDirection: "row",
								alignItems: "center",
								marginTop: 10,
							}}
						>
							<Text style={{ fontWeight: "bold" }}>Outlet</Text>
							<Text
								style={{
									marginLeft: 15,
									fontSize: 15,
									fontWeight: "bold",
									color: "gray",
								}}
							>
								{route.params.adress}
							</Text>
						</View>

						<View
							style={{
								flexDirection: "row",
								alignItems: "center",
								marginTop: 10,
							}}
						>
							<Text style={{ fontWeight: "bold" }}>22 mins</Text>
							<Text
								style={{
									marginLeft: 15,
									fontSize: 15,
									fontWeight: "bold",
									color: "gray",
								}}
							>
								Home
							</Text>
						</View>
						<Text
							style={{
								borderColor: "gray",
								borderWidth: 0.6,
								height: 1,
								marginTop: 12,
							}}
						></Text>
						<View
							style={{
								flexDirection: "row",
								alignItems: "center",
								marginTop: 10,
							}}
						>
							<Ionicons
								name="bicycle"
								size={24}
								color="#CC5500"
							/>
							<Text
								style={{
									fontSize: 16,
									color: "gray",
									marginLeft: 7,
								}}
							>
								0-3 Kms |
							</Text>
							<Text
								style={{
									fontSize: 16,
									color: "gray",
									marginLeft: 7,
								}}
							>
								35 Delivery Fee will Apply
							</Text>
						</View>
					</View>
				</View>
				<Text
					style={{
						textAlign: "center",
						marginTop: 10,
						fontSize: 17,
						fontWeight: "500",
					}}
				>
					MENU
				</Text>
				<Text
					style={{
						borderColor: "gray",
						borderWidth: 0.6,
						height: 1,
						marginTop: 12,
					}}
				></Text>
				{route.params.menu.map((item, index) => (
					<FoodItems item={item} key={index} />
				))}
			</ScrollView>

			<Pressable
				onPress={toggleModal}
				style={{
					width: 60,
					height: 60,
					borderRadius: 40,
					justifyContent: "center",
					backgroundColor: "black",
					marginLeft: "auto",
					position: "absolute",
					bottom: 35,
					right: 25,
					alignContent: "center",
				}}
			>
				<MaterialIcons
					style={{ textAlign: "center" }}
					name="menu-book"
					size={24}
					color="white"
				/>
				<Text
					style={{
						textAlign: "center",
						color: "white",
						fontWeight: "500",
					}}
				>
					MENU
				</Text>
			</Pressable>

			<Modal isVisible={modalVisible} onBackdropPress={toggleModal}>
				<View
					style={{
						height: 190,
						width: 250,
						backgroundColor: "black",
						position: "absolute",
						bottom: 35,
						right: 10,
						borderRadius: 7,
					}}
				>
					{menu.map((item, i) => (
						<View
							style={{
								padding: 10,
								flexDirection: "row",
								alignItems: "center",
								justifyContent: "space-between",
							}}
							key={i}
						>
							<Text
								style={{
									color: "#d0d0d0",
									fontWeight: "600",
									fontSize: 19,
								}}
							>
								{item.name}
							</Text>
							<Text
								style={{
									color: "#d0d0d0",
									fontWeight: "600",
									fontSize: 19,
								}}
							>
								{item.items.length}
							</Text>
						</View>
					))}
					<View
						style={{
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<Image
							style={{
								width: 120,
								height: 70,
								resizeMode: "contain",
							}}
							source={{
								uri: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_284/Logo_f5xzza",
							}}
						/>
					</View>
				</View>
			</Modal>
			{total === 0 ? null : (
				<Pressable
					style={{
						backgroundColor: "#00A877",
						width: "90%",
						padding: 13,
						marginLeft: "auto",
						marginRight: "auto",
						marginBottom: 30,
						borderRadius: 8,
						position: "absolute",
						left: 20,
						bottom: 10,
					}}
				>
					<View
						style={{
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "space-between",
						}}
					>
						<View>
							<Text
								style={{
									fontSize: 16,
									fontWeight: "bold",
									color: "white",
								}}
							>
								{cart.length} item | {total}
							</Text>
							<Text
								style={{
									fontSize: 14,
									fontWeight: "500",
									marginTop: 3,
									color: "white",
								}}
							>
								Extra Charges may Apply
							</Text>
						</View>
						<Pressable
							onPress={() =>
								navigation.navigate("Cart", {
									name: route.params.name,
								})
							}
						>
							<Text
								style={{
									fontSize: 18,
									fontWeight: "600",
									color: "white",
								}}
							>
								View Cart
							</Text>
						</Pressable>
					</View>
				</Pressable>
			)}
		</>
	);
};

export default MenuScreen;

const styles = StyleSheet.create({});
