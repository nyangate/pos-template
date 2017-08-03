import React from 'react';
import { StyleSheet, Text, View,ToolbarAndroid } from 'react-native';
import Login from './src/Login';
import Signup from './src/Signup';
import Home from './src/Home';
import {
  StackNavigator,DrawerNavigator,
} from 'react-navigation';
import styles from './appstyles';


const Template = StackNavigator({
  Login: { screen: Login },
  Signup: { screen: Signup },
  Home: { screen: Home },
});

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {message: "Click here to create your account",isLogin:true};

  }



  render() {
    return (
      <Template/>
    );
  }
}
