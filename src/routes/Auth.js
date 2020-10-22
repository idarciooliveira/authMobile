import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';

import SignIn from '../screens/SignIn'
import SignUp from '../screens/SignUp'

const Stack = createStackNavigator();

export default function Auth() {
  return(
      <Stack.Navigator headerMode='none' initialRouteName='SignIn'>
        <Stack.Screen name='SignIn' component={SignIn}/>
        <Stack.Screen name='SignUp' component={SignUp}/>
      </Stack.Navigator>)
}
