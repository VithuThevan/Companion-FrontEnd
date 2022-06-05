/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Driver2 from './android/app/src/screens/Request';
import Order from './android/app/src/screens/Order';
import Names from './android/app/src/screens/Showname';
import Names11 from './android/app/src/screens/Mytry1';
import Mytryp from './android/app/src/screens/myphp';
import Umap from './android/app/src/screens/usermap';
import Driverp1 from './android/app/src/screens/Driverp1';
import Dmap from './android/app/src/screens/Drivermap';

import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack"

const Stack = createNativeStackNavigator();




const App: () => Node = () => {
  
  return (
   
      <NavigationContainer>
      <Stack.Navigator initialRouteName='Order'>
        <Stack.Screen name='Request' component={Driver2} />
        <Stack.Screen name='Order' component={Order} />
        <Stack.Screen name='OrderList' component={Names} />
        <Stack.Screen name='Mytry1' component={Names11} />
        <Stack.Screen name='Mytryp' component={Mytryp} />
        <Stack.Screen name='Umap' component={Umap} />
        <Stack.Screen name='Driverp1' component={Driverp1} />
        <Stack.Screen name='Dmap' component={Dmap} />
      </Stack.Navigator>
    </NavigationContainer>
//This is our code
  );
};


export default App;
