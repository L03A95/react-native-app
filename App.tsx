/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { ScrollView, StyleSheet, View} from 'react-native';
import Head from './src/components/Head';
import Home from './src/components/Home';




export default function App (): JSX.Element {

  return (
    <View style={styles.background}>
      <Head></Head>
      <Home></Home>
      

    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#f9f9d9"
  }
})
