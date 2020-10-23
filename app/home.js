import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const BUTTON_SIZE = 80;

const Button = ({onPress}) => {
	return(<TouchableOpacity style={{backgroundColor:"#333", justifyContent:"center", alignItems:"center", textAlign:'center', width:BUTTON_SIZE, height:BUTTON_SIZE, borderRadius:BUTTON_SIZE/2}}>
		<Text style={{color:"#ddd"}}>spin</Text>
		</TouchableOpacity>)
}

const Home = (props) => {
  return (
    <View style = {{flex:1, justifyContent:'flex-end', padding:20, alignItems:'center'}}>
    	<Button />
    </View>
  )
}

export default Home;