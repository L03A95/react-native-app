import React, { useEffect, useState } from 'react';
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

  const [userView, setUserView] = useState(objectUsers)

  const userScreenHandler = (newUser : any) => {
    setUserView([...userView, newUser])
  }

  return (

    <NavigationContainer >
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name='Home' options={{ title: '', headerShown: false }}>
            {(props) => <Home {...props} userScreenHandler={userScreenHandler}/>}
          </Stack.Screen>
          <Stack.Screen name='Clients' component={Clients} options={{ title: '', headerShown: false }}/> 
          {userView?.map((user : any, i : number) => {
            return (
            <Stack.Screen name={user.dni} options={{ title: '', headerShown: false }} key={i}>
              {(props) => <ClientScreen {...props} key={i} name={user.name} lastname={user.lastname} dni={user.dni}
              birthdate={user.birthdate} civil={user.civil} scholarity={user.scholarity} city={user.city} address={user.address}
              phone={user.phone} disponability={user.disponability} jobType={user.jobType} jobDescription={user.jobDescription}
              ref1Name={user.ref1Name} ref1Address={user.ref1Address} ref1Phone={user.ref1Phone} ref2Name={user.ref2Name}
              ref2Address={user.ref2Address} ref2Phone={user.ref2Phone}
              />}
            </Stack.Screen>)
          })}
        </Stack.Navigator>
      </NavigationContainer>

  )
}