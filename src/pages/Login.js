
import React, { useState } from 'react';
import {
  StyleSheet
  , Text,
  View,
  TextInput, TouchableOpacity
} from 'react-native';
import Input from '../components/InputBox'
import Button from '../components/Button'
import Validate from '../data/user'

const change = (state, data) => {
  state.name = data.name
  state.email = data.email
}
export default function Login(props) {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  return (
    <View style={styles.container}>

      {/* View for Name Input */}
      <View style={styles.box}>
        <TextInput
          style={styles.input}
          onChangeText ={text=>{setName(text)}}
          >
          <Text style={
            styles.text
          }>
            {props.input.name}
          </Text>
        </TextInput>
      </View>

      {/* View for Email Input */}
      <View style={styles.box}>
        <TextInput
          style={styles.input}
          onChangeText ={text=>{setEmail(text)}}

          >
          <Text style={
            styles.text
          }>
            {props.input.email}
          </Text>
        </TextInput>
      </View>

      {/* View for Button */}
      <View style={styles.buttonbox}>

        <TouchableOpacity 
          onPress={() => {let data ={
            name:name,
            email:email
          };console.log(Validate(data)); }}
        >
          <Text
            style={styles.buttontext}
          >
            {props.button.login}
          </Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  box: {
    backgroundColor: "blue",
    width: 330,
    height: 55,
    marginLeft: 37,
    borderRadius: 25,
    borderColor: "white",
    marginBottom: 20,
  },
  input: {
    textAlign: 'center',
    width: 330,
    height: 55,
    borderRadius: 25,


  },
  text: {
    fontSize: 20,
    color: "white",
    fontFamily: "sans-serif-medium",
  },
  buttonbox: {
    backgroundColor: "#3a2a73",
    width: 150,
    height: 50,
    marginLeft: 120,
    marginTop: 30,
    borderRadius: 30,
  },
  buttontext: {
    textAlign: 'center',
    marginTop: 10,
    color: "#0ca630",
    fontSize: 20,
  }

});
