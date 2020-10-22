import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/Home'

const Stack = createStackNavigator();

export default function Index() {
  return(
      <Stack.Navigator headerMode='none' initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home}/>
      </Stack.Navigator>)
}
