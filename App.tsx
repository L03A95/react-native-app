import React from 'react';
import { ScrollView, StyleSheet, View} from 'react-native';
import Head from './src/components/Head';
import Home from './src/components/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Clients from './src/components/Clients';
import { store } from './src/store/store';
import ClientScreen from './src/components/ClientScreen';

const Stack = createStackNavigator();

export default function App (): JSX.Element {

  const storeUsers = store.getString('usuario')
  if(storeUsers != undefined) {
    var objectUsers = JSON.parse(storeUsers)
  }

  return (

    <NavigationContainer >
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name='Home' component={Home} options={{ title: '', headerShown: false }}/>
          <Stack.Screen name='Clients' component={Clients} options={{ title: '', headerShown: false }}/> 
          {objectUsers.map((user : any) => {
            return (
            <Stack.Screen name={user.dni} options={{ title: '', headerShown: false }}>
              {(props) => <ClientScreen {...props} />}
            </Stack.Screen>)
          })}
        </Stack.Navigator>
      </NavigationContainer>

  )
}


