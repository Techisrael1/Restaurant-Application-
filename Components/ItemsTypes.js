import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { Image } from "react-native";

const ItemsTypes = () => {
	const types = [
		{
			id: "0",
			image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/rwnkrdtnusqdkyjssahq",
			name: "Biriyani",
		},
		{
			id: "1",
			image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/qwrkgxefwzjergtzowsc",
			name: "Dessert",
		},
		{
			id: "2",
			image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/uckbx3rr87jhakb81mbs",
			name: "Burger",
		},
		{
			id: "3",
			image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/z9xmu9pb65lcbt3wepud",
			name: "Salad",
		},
		{
			id: "4",
			image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/m7osxfhdon2opecztidb",
			name: "Sandwiches",
		},
	];
	return (
		<View>
<Text style={{fontWeight:"bold", marginTop:10, margin:10}}>What's on your mind?</Text>
			<ScrollView horizontal showsHorizontalScrollIndicator={false}>
				{types.map((item, index) => (
					<View style={{margin:10}} key={index}>
						<Image
							source={{ url: item.image }}
							style={{ width: 60, height: 60, borderRadius: 10 }}
						/>
						<Text style={{textAlign:"center", marginTop:6}}>{item.name}</Text>
					</View>
				))}
			</ScrollView>
		</View>
	);
};

export default ItemsTypes;

const styles = StyleSheet.create({});
