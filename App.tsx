/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Main from './src/forms/Main';
import CategoriaHabitos from './src/forms/CategoriaHabitos';
import ListaHabitos from './src/forms/ListaHabitos';
import RegistroHabitos from './src/forms/RegistroHabitos';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="CategoriaHabitos" component={CategoriaHabitos}/>
        <Stack.Screen name="ListaHabitos" component={ListaHabitos}/>
        <Stack.Screen name="RegistroHabitos" component={RegistroHabitos}/>
        <Stack.Screen name="Home" component={Main}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;
