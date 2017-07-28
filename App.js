import React from 'react';
import { StyleSheet, Text, View,ToolbarAndroid } from 'react-native';
import Login from './src/Login';
import Signup from './src/Signup';
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
    if(this.state.isLogin){
      this.setState({isLogin:false,message:"Login"});
    }else{
      this.setState({isLogin:true,message:"Click here to create your account"});
    }
  }
  render() {
    return (
      <View style={styles.container}>
        {this.state.isLogin? <Login/> : <Signup/>}
        <Text style={{marginTop:20}} >{this.state.isLogin?'New to makeswift?':''}</Text>
         <Text onPress={this.linkClicked} style={{color:'#304ffe', marginTop:20}}>{this.state.message}</Text>
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
  page: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
