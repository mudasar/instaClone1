import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, Dimensions, TouchableOpacity } from 'react-native';
import { createSwitchNavigator, createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import { MainFeed, Login, Profile, CameraScreen, Settings, Register } from './components/screens';



export class InstaClone extends Component {

  static navigationOptions = {
    title: 'Instagram',
    headerStyle: {
      backgroundColor: 'rgb(250,250,250)',
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: 'rgb(233,233,233)',
      alignItems: 'center'
    },
   // headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      
    },
  };

  render() { 
    return (
     <MainFeed />
    )
  }
}

const appStack = createStackNavigator({ Home: {screen: InstaClone}, Settings: {screen: Settings} }, {initialRouteName: 'Home'});


export const tabs = createBottomTabNavigator(
  { feed: appStack, camera: CameraScreen, profile: Profile }, 
  {
    lazy: true,
    swipeEnabled:true,
     tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
    },
});



const authStack = createStackNavigator({Login: {screen: Login}, Register:{screen: Register}},{initialRouteName: 'Login'});

//const RootStack = createStackNavigator({
  const RootStack = createSwitchNavigator({
 // AuthLoading: AuthLoadingScreen,
  App: tabs,// appStack,
  Auth: authStack
},
  {
   initialRouteName: 'Auth',
 }
);
export default RootStack;