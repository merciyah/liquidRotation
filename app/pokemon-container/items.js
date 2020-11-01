import React, { Component } from 'react';
import {

  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Navigator,
  ScrollView,
  FlatList,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Nav from './widgets/nav'
import ItemsNav from './widgets/itemsNav'
import Footer from "./widgets/pokeballFoot"

var pokeball = require('../images/pokeball.png')
var greatball = require('../images/greatball.png')
var loveball = require('../images/loveball.png')
var ultraball = require('../images/ultraball.png')
var timerball = require('../images/timerball.png')
var diveball = require('../images/diveball.png')
var sportball = require('../images/sportball.png')
var safariball = require('../images/safariball.png')
var quickball = require('../images/quickball.png')

var trainer = {
  credits:950,
  items:{
    pokeballs:10,
    greatballs:5,
    ultraballs:0
  }
}

var items = [{
  name: "POKEBALL",
  cost:10,
  image: pokeball,
  desc: "The most basic of Pokeballs. The standard Pokeball is the easiest to acquire and cheapest to purchase. Standard Pokeballs are most effective at capturing common Pokemon. "
},{
  name: "GREAT BALL",
  cost:10,
  image: greatball,
  desc: " A good, high-performance Poké Ball that provides a higher Pokémon catch rate than a standard Poké Ball can."
},
{
  name: "LOVE BALL",
  cost:2,
  image: loveball,
  desc: "A Poké Ball that works best when catching a Pokémon that is of the opposite gender of your Pokémon."
},
{
  name: "SPORT BALL",
  cost:3,
  image: sportball,
  desc: "A special Poké Ball that is used during the Bug-Catching Contest."
},
{
  name: "SAFARI BALL",
  cost:3,
  image: safariball,
  desc: "A special Poké Ball that is used only in the Great Marsh. It is recognizable by the camouflage pattern decorating it."
},
{
  name: "TIMER BALL",
  cost:3,
  image: timerball,
  desc: "A somewhat different Poké Ball that becomes progressively more effective the more turns that are taken in battle."
},
{
  name: "DIVE BALL",
  cost:5,
  image: diveball,
  desc: "A somewhat different Poké Ball that works especially well when catching Pokémon that live underwater."
},
{
  name: "QUICK BALL",
  cost:5,
  image: quickball,
  desc: "A somewhat different Poké Ball that has a more successful catch rate if used at the start of a wild encounter."
},
{
  name: "ULTRA BALL",
  cost:8,
  image: ultraball,
  desc: "An ultra-high-performance Poké Ball that provides a higher success rate for catching Pokémon than a Great Ball."
}]


export default class Items extends Component {
  constructor(props){
    super(props)

    this.state = {
      //dataSource: ds.cloneWithRows(items)
    }
 
  }

  eachItem(x){
    return(
      <TouchableOpacity>
      <View style={{flexDirection:'row', borderBottomWidth:1, borderColor:'#d3d3d3'}}>
      <View style={{alignItems:'center', justifyContent:'center', margin:15}}>
      <Image source={x.item.image} resizeMode='contain' style={{width:40, height:40}} />
      <View style={{flexDirection:'row', margin:5, alignItems:'center'}}>
            <Text style={{color:'#888', fontWeight:'600', fontSize:11}}>x {x.item.cost}</Text>
      </View>
      </View>
      <View style={{justifyContent:'center', width:280, margin:10}}>
      <Text style={{fontWeight:'700', fontSize:13, color:'#666', marginBottom:0}}>{x.item.name}</Text>
      <Text style={{fontSize:12, color:'#777', fontWeight:'500', marginBottom:5, lineHeight:20}}>{x.item.desc}</Text>
      </View>
      </View>
      </TouchableOpacity>
      )
  }
  render(){
  	return(
  		<View style={{backgroundColor:'#f7f7f7', flex:1}}>
  		<Nav name="ITEMS" {...this.props} />
      <ItemsNav />
      <View
      style = {{flex:3,marginBottom:30}}
      >
      <View style={{alignItems:'center', justifyContent:'center', borderColor:'#d3d3d3', borderBottomWidth:1, height:200}}>
            <Image source ={require('../images/backpack.png')} resizeMode="contain" style={{height:140, width:140}} />

      </View>
      <FlatList style={{flex:13,}} 
      scrollEnabled={true}
        contentContainerStyle ={{marginBottom:80}}

      data = {items}
      keyExtractor={item => item.name}
      renderItem = {(rowData) => this.eachItem(rowData)}
      />
      </View>

      <Footer />
  		</View>)
  }





}