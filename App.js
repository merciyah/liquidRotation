import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducer from './reducer'
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './app/home'
import Menu from './app/menu'
import ProfileScreen from './app/profile'
import { createStackNavigator } from '@react-navigation/stack';

// Pokemon Comps
import Login from './app/pokemon-container/login'
import EachPokemon from './app/pokemon-container/eachPokemon'
import EachPokedex from './app/pokemon-container/eachpokedex'
import Pokedex from './app/pokemon-container/pokedex'
import Pokemon from './app/pokemon-container/pokemon'
import Trainer from './app/pokemon-container/trainer'
import Pokemart from './app/pokemon-container/pokemart'
import Items from './app/pokemon-container/items'

const Stack = createStackNavigator();
const store = createStore(reducer)



export default function App() {
  return (
  <Provider store = {store}>
  <StatusBar hidden />    
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName = "menu"
      screenOptions={{
      headerShown: false
        }}
      >
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="menu" component={Menu} />
        <Stack.Screen name="trainer" component={Trainer} />
        <Stack.Screen name="pokedex" component={Pokedex} />
        <Stack.Screen name="pokemon" component={Pokemon} />
        <Stack.Screen name="pokemart" component={Pokemart} />
        <Stack.Screen name="eachPokemon" component={EachPokemon} />
        <Stack.Screen name="eachPokedex" component={EachPokedex} />
        <Stack.Screen name="items" component={Items} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
