
import React, { useState } from 'react';
import {
  StyleSheet
  , Text,
  View,
  TextInput, TouchableOpacity
} from 'react-native';

import {connect} from 'react-redux';

function Info(props) {
    const ok =()=>{
        props.navigation.navigate('Rgister')
    }
    // console.log(props)
    return (
        <View style = {styles.container}>
          <View  style ={styles.info}>
              <Text style ={styles.infotext}>Hello {props.name} </Text>
              <Text style ={styles.infotext}>Your email is {props.email} </Text>
          </View>
          <TouchableOpacity style = {styles.logout}
            onPress ={ ()=>{
              props.changeIt({})
              props.navigation.navigate("Register")
            }}
          >
            <Text
            style={styles.logouttext}
            >
              Logout
            </Text>
          </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems:'center'
  },
  info:{
    // marginLeft:30,
    alignItems:'center',
  },
  infotext:{
    marginBottom:20,
    color:"red",
    fontSize:20,
  },
  logout:{
    backgroundColor:"grey",
    width:150,
    height:50,
    borderRadius:30,
    alignItems:'center'
  },
  logouttext:{
    marginTop:10,
    fontSize:20,
    color:'green'
  }
});

const mapSateToProps =(state)=>{
  return state
}
const mapDispatchToProps =(dispatch)=>{
  return{
    changeIt :(name) =>{
      dispatch({type:"CHANGE_IT",payload:name})
    }
  }
}
export default connect(mapSateToProps,mapDispatchToProps)(Info);