import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import styles from '../appstyles';
import {
  StackNavigator,DrawerNavigator,
} from 'react-navigation';
import Login from './Login';
import Signup from './Signup';

export default class Home extends React.Component{

  static navigationOptions = {
      title: 'Dashboard',
      headerTintColor: '#ffffff',
      headerStyle: {backgroundColor:'#673AB7'}
    };

    constructor(props){
      super(props);
    }
  render(){
    const { navigate } = this.props.navigation;
    return (<Dashboard/>);
  }
}
const Dashboard = DrawerNavigator({
  Home: {
    screen: Signup,
  },
  Notifications: {
    screen: Signup,
  },
});
