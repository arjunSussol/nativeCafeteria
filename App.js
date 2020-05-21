import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';

import { ConfigureStore } from './src/redux/configureStore';
import Main from './src/components/Main';

const store = ConfigureStore();

export default class App extends Component {
  render(){
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Main style={styles.container} /> 
        </NavigationContainer>
      </Provider>       
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
