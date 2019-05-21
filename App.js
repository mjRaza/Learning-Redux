import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Counter from './components/Counter';
import {Provider} from 'react-redux';
import { ConfigureStore } from './components/redux/ConfigureStore';

const Store =ConfigureStore();

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Provider store ={Store} >     
      <Counter/>
      </Provider>   
</View>

);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
