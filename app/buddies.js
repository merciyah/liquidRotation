import React from 'react';
import {
  StatusBar,
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  Animated,
  Button,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import { addFriend } from '../actions';

const buddies = (props) => {
	console.log('Hello World')
  return (
    <View style = {{justifyContent:'center', flex:1, alignItems:'center'}}>
    <Text>Hello World</Text>
    {
          props.friends.possible.map((friend, index) => (
            <Button
              key={ friend }
              title={ `Add ${ friend }` }
              onPress={() =>
                props.addFriend(index)
              }
            />
          ))
        }
        <Button
          title="Back to home"
          onPress={() =>
            props.navigation.navigate('Home')
          }
        />
    </View>
  )
}

const mapStateToProps = (state) => {
  const { friends } = state
  return { friends }
};
const mapDispatchToProps = dispatch => (
  bindActionCreators({
    addFriend,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(buddies);