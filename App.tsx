/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  InputAccessoryView,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TextInputBase,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import InputSection from './src/components/InputSection';
import Section from './src/components/Section';
import SectionTitle from './src/components/SectionTitle';



export default function App (): JSX.Element {

  return (
    <ScrollView style={styles.background}>
      <Section>
        <>
          <SectionTitle title='Datos personales'/>
          <InputSection title='Nombre(s)'/>
          <InputSection title='Apellido(s)'/>
        </>
      </Section>
      <Section>
        <>
          <SectionTitle title='Datos de empresa'/>
          <InputSection title='Empresa'/>
        </>
        
      </Section>
      

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#f9f9d9"
  }
})
