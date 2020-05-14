import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Main from './src/components/Main';

export default class App extends Component {
  render(){
    return (
      <NavigationContainer>
        <Main style={styles.container} /> 
      </NavigationContainer>          
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
