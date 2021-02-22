import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/pages/Login'
export default function App() {
  return (
    <View style={styles.container}>
    <Login 
      input = {{name:"name",email:"email"}} 
      button ={{login:"Login"}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent:'center',
  },
});
