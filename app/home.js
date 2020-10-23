import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Animated } from 'react-native';

const BUTTON_SIZE = 80;

const Button = ({onPress, animatedValue}) => {
	return(<Animated.View style={{backgroundColor:"#333", justifyContent:"center", alignItems:"center", transform:[
		{
			perspective:400
		},{
			rotateY: animatedValue.interpolate({
				inputRange:[0,0.5,1],
				outputRange:['0deg',"-90deg", "-180deg"]
			})
		},{
			scale: animatedValue.interpolate({
				inputRange: [0,0.5,1],
				outputRange: [1,10,1]
			})
		},{
			translateX: animatedValue.interpolate({
				inputRange: [0,0.5,1],
				outputRange: [0,10,0]
			})
		}], textAlign:'center', width:BUTTON_SIZE, height:BUTTON_SIZE, borderRadius:BUTTON_SIZE/2}}>
		<TouchableOpacity style={{flex:1,justifyContent:"center", alignItems:"center",}} onPress = {onPress}>
		<Text style={{color:"#ddd"}}>spin</Text>
		</TouchableOpacity>
		</Animated.View>)
}

const Home = (props) => {
	const animatedValue = React.useRef(new Animated.Value(0)).current;
	const [index,setIndex] = React.useState(0);
	const animation = (toValue) => Animated.timing(animatedValue, {
			toValue,
			duration: 3000,
			useNativeDriver: false
		})
	const onPress = () => {
		setIndex(index === 1 ? 0 : 1)
		animation(index === 1 ? 0 : 1).start()
	}
  return (
    <View style = {{flex:1, justifyContent:'flex-end', padding:20, alignItems:'center'}}>
    	<Button onPress = {onPress} animatedValue = {animatedValue} />
    </View>
  )
}

export default Home;