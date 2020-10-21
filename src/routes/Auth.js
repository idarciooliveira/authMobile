import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import SignIn from '../screens/SignIn'
import SignUp from '../screens/SignUp'
import Home from '../screens/Home'

const Stack = createStackNavigator();

export default function Auth() {
  return(<NavigationContainer>
      <Stack.Navigator headerMode='none' initialRouteName='SignIn'>
        <Stack.Screen name='SignIn' component={SignIn}/>
        <Stack.Screen name='SignUp' component={SignUp}/>
        <Stack.Screen name='Home' component={Home}/>
      </Stack.Navigator>
  </NavigationContainer>)
}
