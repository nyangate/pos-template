import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import styles from '../appstyles';
import {
  StackNavigator,
} from 'react-navigation';
export default class Login extends React.Component{
  static navigationOptions = {
      title: 'Login',
      headerTintColor: '#ffffff',
      headerStyle: {backgroundColor:'#673AB7',padding:20}
    };
    constructor(props){
      super(props);
      this.state = {email:"email",password:""}

    }

  render(){
    const { navigate } = this.props.navigation;
    return (<View style={styles.forms}>
      <Text style = {styles.formTitle}>Get started</Text>
      <Text style = {styles.formLabel}>Email</Text>
      <TextInput autoCorrect={false} underlineColorAndroid='rgba(0,0,0,0)'
          style={{width: 250, height: 40, marginBottom:10, marginTop: 5, backgroundColor: 'white', borderColor: 'gray', borderWidth: 1, borderRadius:5}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <Text style={styles.formLabel}>Password</Text>
        <TextInput autoCorrect={false} underlineColorAndroid='rgba(0,0,0,0)'
            style={{width: 250, height: 40, borderBottomColor:'white', marginBottom:20, marginTop: 5, backgroundColor: 'white', borderColor: 'gray', borderWidth: 1,borderRadius:5}}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
          />
      <Button style={styles.formButton} onPress={()=>navigate('Home')}  title="Sign in"
                color="#841584" accessibilityLabel="Save content"/>
                <View>
                <Text onPress={()=>navigate("Signup")} style = {styles.formFooter}>Already signed up?
                Click here to Login</Text></View>
                </View>


)
  }
}
