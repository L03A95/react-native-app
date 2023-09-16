import React from 'react';
import { ScrollView, StyleSheet, View} from 'react-native';
import Head from './src/components/Head';
import Home from './src/components/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Clients from './src/components/Clients';

const Stack = createStackNavigator();

export default function App (): JSX.Element {

  return (

    <NavigationContainer >
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name='Home' component={Home} options={{ title: '', headerShown: false }}/>
          <Stack.Screen name='Clients' component={Clients} options={{ title: '', headerShown: false }}/> 
        </Stack.Navigator>
      </NavigationContainer>

  )
}


