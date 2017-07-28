import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';


export default class Login extends React.Component{

    constructor(props){
      super(props);
      this.sayHi = this.sayHi.bind(this);
      this.state = {email:"email",password:""}
    }
    sayHi(){
      console.log("Hello there");
    }

  render(){
    return (<View>
      <Text style={{width: 250, height: 40, marginBottom:10, textAlign:'center', fontSize:20}}>Get started</Text>
      <Text>Email</Text>
      <TextInput autoCorrect={false} underlineColorAndroid='rgba(0,0,0,0)'
          style={{width: 250, height: 40, marginBottom:10, marginTop: 5, backgroundColor: 'white', borderColor: 'gray', borderWidth: 1, borderRadius:5}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <Text style={{width: 250, marginBottom:5, marginTop: 5}}>Password</Text>
        <TextInput autoCorrect={false} underlineColorAndroid='rgba(0,0,0,0)'
            style={{width: 250, height: 40, borderBottomColor:'white', marginBottom:20, marginTop: 5, backgroundColor: 'white', borderColor: 'gray', borderWidth: 1,borderRadius:5}}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
          />
      <Button style={{marginTop: 15}} onPress={this.sayHi}  title="Sign in"
                color="#841584" accessibilityLabel="Save content"/>
                </View>


)
  }
}
