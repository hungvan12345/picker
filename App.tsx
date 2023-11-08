/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { LoginButton, AccessToken } from 'react-native-fbsdk-next';
import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import MonthPicker from './src/components/MonthPicker';
import DatePicker from './src/components/DatePicker';
import PickerApp from './src/PickerApp';

function App(): JSX.Element {

  return (
    <SafeAreaView  style={styles.container}>
      <PickerApp/>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  }
});

export default App;
