import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import Main from './src/components/Main';

export default class App extends Component {
  render(){
    return (
      <Main style={styles.container} />     
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
