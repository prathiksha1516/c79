import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer,createSwichNavigator} from 'react-navigaation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import HomeScreen from './screens/HomeScreen';
import ExchangeScreen from './screens/ExchangeScreen';


export default function App() {
  return (
   <AppContainer/>
  );
}
const TabNavigator=createBottomTabNavigator({
  HomeScreen:{screen:HomeScreen},
  ExchangeScreen:{screen:ExchangeScreen}
})

const AppContainer =  createAppContainer(TabNavigator);


