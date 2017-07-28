import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
 import Login from './src/Login';
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Login/>
        <Text style={{marginTop:20}} >New to makeswift?</Text>
         <Text style={{color:'#304ffe', marginTop:20}}>Click here to create your account</Text>
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
