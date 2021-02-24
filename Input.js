import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'

class Inputs extends Component {
   state = {
      username: '',
      password: '',
      phone: '',
      address: ''
    }
   handleUsername = (text) => {
      this.setState({ username: text })
    }
   handlePassword = (text) => {
      this.setState({ password: text })
    }
   handlePhone = (text) => {
      this.setState({ phone: text })
    }
    handlePhone = (text) => {
      this.setState({ address: text })
    }
   login = (username, pass) => {
      alert('username: ' + username + ' password: ' + pass)
    }
   render() {
      return (
         <View style = {styles.container}>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Username"
               placeholderTextColor = "#d12a3b"
               autoCapitalize = "none"
               onChangeText = {this.handleUsername}/>
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Password"
               placeholderTextColor = "#d12a3b"
               autoCapitalize = "none"
               onChangeText = {this.handlePassword}/>
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Phone Number"
               placeholderTextColor = "#d12a3b"
               autoCapitalize = "none"
               onChangeText = {this.handlePhone}/>

            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Address"
               placeholderTextColor = "#d12a3b"
               autoCapitalize = "none"
               onChangeText = {this.handleAddress}/>
            
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.login(this.state.username, this.state.password)
                }>
               <Text style = {styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>
         </View>
      )
    }
}
export default Inputs

const styles = StyleSheet.create({
   container: {
      paddingTop: 23
   },
   input: {
      margin: 15,
      height: 40,
      borderColor: '#d12a3b',
      borderWidth: 1,
      textAlign: 'center'
   },
   submitButton: {
      backgroundColor: '#d12a3b',
      padding: 10,
      margin: 15,
      height: 40,
   },
   submitButtonText:{
      color: 'white',
      textAlign: 'center'
   }
})