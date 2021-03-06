import React from 'react';
import {View, TouchableOpacity, Text, Animated} from 'react-native'
import { AntDesign } from '@expo/vector-icons';

const BUTTON_SIZE = 50

const menu = (props) => {
	const animatedVal = React.useRef(new Animated.Value(0)).current;
	const [fold, setfold] = React.useState(0)
	var animatedValue = animatedVal;
	const animation = (toValue) => Animated.timing(animatedVal, {
			toValue: toValue,
			duration: 200,
			useNativeDriver: false
		})

	const onPress = () => {
		console.log(fold === 1? 0: 1)
		animation(fold === 1 ? 0 : 1).start()
		setfold(fold === 1? 0: 1);
		
	}

  return (
    <View style = {{flex:1, justifyContent:'flex-end', paddingBottom:20}}>
    <Animated.View style = {{position:'absolute',shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 3, bottom:25, width:animatedVal.interpolate({
				inputRange:[0,0.5,1],
				outputRange:[1,BUTTON_SIZE*2.5, BUTTON_SIZE*4]
			}), backgroundColor:'tomato', height:BUTTON_SIZE-10, borderRadius:BUTTON_SIZE/2, alignSelf:'center'}} />
    <TouchableOpacity onPress={onPress} style={{position:'absolute',shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 8, bottom:20, width:BUTTON_SIZE, alignSelf:'center', backgroundColor:'tomato', justifyContent:'center', alignItems:'center', height:BUTTON_SIZE, borderRadius:BUTTON_SIZE/2}}>
    <AntDesign name={fold === 1?"close":'ellipsis1'} size={25} color="#fff" />
    </TouchableOpacity>

    </View>
  )
}

export default menu;