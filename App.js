import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducer from './reducer'
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './app/home'
import ProfileScreen from './app/profile'
import { createStackNavigator } from '@react-navigation/stack';



const Stack = createStackNavigator();
const store = createStore(reducer)

export default function App() {
  return (
  <Provider store = {store}>    
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName = "Home"
      screenOptions={{
      headerShown: false
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
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
