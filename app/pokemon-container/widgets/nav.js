import React, { Component } from 'react';
import {

  StyleSheet,
  Image,
  Text,
  UIManager,
  LayoutAnimation,
  TouchableOpacity,
  Navigator,
  View
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Nav extends Component {
  constructor(props){
    super(props)

    UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);


    this.state ={
      showNav: false
    }
  }

  componentDidMount(){
    
  }

  showNav(){
    if(this.state.showNav){
    return(<View style={{backgroundColor:'#de737b', height:50, alignItems:'center', flexDirection:'row', justifyContent:'space-around'}}>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('pokedex')}><Text style={{color:'#fff', fontWeight:'600', fontSize:12}}>POKEDEX</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('pokemon')}><Text style={{color:'#fff', fontWeight:'600', fontSize:12}}>POKEMON</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('pokemart')}><Text style={{color:'#fff', fontWeight:'600', fontSize:12}}>POKEMART</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('items')}><Text style={{color:'#fff', fontWeight:'600', fontSize:12}}>ITEMS</Text></TouchableOpacity>
      </View>)}
  }

  navLogic(){
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    if(this.state.showNav){
      this.setState({
        showNav: false
      })
    } else{
      this.setState({
        showNav: true
      })
    }
  }

  render(){
  	return(
      <View>
  		<View style={{height:55, backgroundColor:'#de737b', alignItems:'center', flexDirection:'row', justifyContent:'space-between'}}>
      <TouchableOpacity onPress ={() => this.navLogic()}>
      <Icon name="clear-all" size={30} color="#fff" style={{margin:10}} />
      </TouchableOpacity>
      <Text style={{color:'#fff', fontWeight:'600'}}>{this.props.name}</Text>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('trainer')}>
      <Image source={require('../../images/trainer.png')} resizeMode='contain' style={{width:30, height:30}}/>
  		</TouchableOpacity>
      </View>
      {this.showNav()}
      </View>
  		)
  }
}