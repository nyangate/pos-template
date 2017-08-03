import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
export default styles = StyleSheet.create({
  forms: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formLabel: {width: 250, marginBottom:5, textAlign:'left', fontSize:15},
  formFooter: {width: 250, marginBottom:5, textAlign:'left', fontSize:15, color:'#841584', marginTop:20},
  formTitle: {width: 250, height: 40, marginBottom:10, textAlign:'center', fontSize:20},
  formInput: {width: 250, height: 40, marginBottom:10, marginTop: 5, backgroundColor: 'white', borderColor: 'gray', borderWidth: 1, borderRadius:5},
  formButton: {marginTop: 15,width: 250},
  page: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
