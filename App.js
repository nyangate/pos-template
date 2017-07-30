import React from 'react';
import { StyleSheet, Text, View,ToolbarAndroid } from 'react-native';
import Login from './src/Login';
import Signup from './src/Signup';
import {
  StackNavigator,
} from 'react-navigation';
import styles from './appstyles';


const Template = StackNavigator({
  Home: { screen: Login },
  Signup: { screen: Signup },
});
export default class App extends React.Component {

  constructor(props){
    super(props);
    this.onActionSelected = this.onActionSelected.bind(this);
    this.state = {message: "Click here to create your account",isLogin:true};
    this.linkClicked = this.linkClicked.bind(this);

  }

  onActionSelected(){

  }

  linkClicked(){
    console.log('login/signup clicked');
    // if(this.state.isLogin){
    //   this.setState({isLogin:false,message:"Login"});
    // }else{
    //   this.setState({isLogin:true,message:"Click here to create your account"});
    // }

  }
  render() {
    return (
      <Template/>
    );
  }
}
