import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import styles from '../appstyles';

export default class Signup extends React.Component{
  static navigationOptions = {
      title: 'Signup',
    };
    constructor(props){
      super(props);
      this.state = {email:"email",password:""}
    }

  render(){
    const { navigate } = this.props.navigation;
    return (<View style={styles.forms}>
      <Text style = {styles.formTitle}>Get started</Text>
      <Text style={styles.formLabel}>Full Name</Text>
      <TextInput autoCorrect={false} underlineColorAndroid='rgba(0,0,0,0)'
          style={styles.formInput}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
      <Text style={styles.formLabel}>Email</Text>
      <TextInput autoCorrect={false} underlineColorAndroid='rgba(0,0,0,0)'
          style={styles.formInput}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <Text style={{width: 250, marginBottom:5, marginTop: 5}}>Phone</Text>
        <TextInput autoCorrect={false} underlineColorAndroid='rgba(0,0,0,0)'
            style={styles.formInput}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
          />
          <Text style={{width: 250, marginBottom:5, marginTop: 5}}>Password</Text>
          <TextInput autoCorrect={false} underlineColorAndroid='rgba(0,0,0,0)'
              style={styles.formInput}
              onChangeText={(text) => this.setState({text})}
              value={this.state.text}
            />
      <Button style={styles.formButton} onPress={()=>navigate('Home')}  title="Create Account"
                color="#841584" accessibilityLabel="Save content"/>
                </View>


)
  }
}
