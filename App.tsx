import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { Provider } from 'react-redux';

import Home from './src/screens/Home'
import Details from './src/screens/Details'
import store from './src/store/index'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

const App = () => {

  return (
    <Provider store={store} >
    <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false
        }} >
        <Stack.Screen  name={"Home"} component={Home} />
        <Stack.Screen name={"Details"} component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>

    

  )
}

export default App
