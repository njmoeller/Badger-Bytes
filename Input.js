import React, {Component} from 'react'
import {ActivityIndicator, View, Text, TouchableOpacity, TextInput, StyleSheet} from 'react-native'

const client = require('./Utilities/client');

class Inputs extends Component {
    state = {
        username: '',
        password: '',
        phone: '',
        address: '',
        shouldShowActivityIndicator: false
    };

    handleUsername = (text) => {
        this.setState({username: text})
    };

    handlePassword = (text) => {
        this.setState({password: text})
    };

    handlePhone = (text) => {
        this.setState({phone: text})
    };

    handleAddress = (text) => {
        this.setState({address: text})
    };

    removeActivityIndicator = () => {
        this.setState({shouldShowActivityIndicator: false});
    };

    login = (username) => {
        this.setState({shouldShowActivityIndicator: true});
        client.post('/api/users', {
            username: this.state.username, pass: this.state.password, phoneNumber: this.state.phone,
            address: this.state.address
        })
            .then((response) => {
                this.removeActivityIndicator();
                alert('User with username: ' + username + 'successfully created in database')

                // At this point, we will want to move the user to the main part of the app
                // Not sure how to change screens in react native but I'm sure we'll figure it out
            })
            .catch((error) => {
                this.removeActivityIndicator();
                alert(error.response.data.message || 'Error creating user with username: ' + username)
            });
    };

    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator size='large' color="#FFFFFF" animating={this.state.shouldShowActivityIndicator}/>
                <TextInput style={styles.input}
                           underlineColorAndroid="transparent"
                           placeholder="Username"
                           placeholderTextColor="white"
                           autoCapitalize="none"
                           onChangeText={this.handleUsername}/>

                <TextInput style={styles.input}
                           underlineColorAndroid="transparent"
                           placeholder="Password"
                           placeholderTextColor="white"
                           autoCapitalize="none"
                           onChangeText={this.handlePassword}/>

                <TextInput style={styles.input}
                           underlineColorAndroid="transparent"
                           placeholder="Phone Number"
                           placeholderTextColor="white"
                           autoCapitalize="none"
                           onChangeText={this.handlePhone}/>

                <TextInput style={styles.input}
                           underlineColorAndroid="transparent"
                           placeholder="Address"
                           placeholderTextColor="white"
                           autoCapitalize="none"
                           onChangeText={this.handleAddress}/>

                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={
                        () => this.login(this.state.username)
                    }>
                    <Text style={styles.submitButtonText}> Submit </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Inputs

const styles = StyleSheet.create({
    container: {
        paddingTop: 5
    },
    input: {
        margin: 10,
        height: 60,
        borderColor: '#d12a3b',
        borderWidth: 8,
        textAlign: 'center',
        fontSize: 23,
        fontWeight: '800'
        
    },
    submitButton: {
        backgroundColor: '#d12a3b',
        padding: 10,
        margin: 15,
        height: 50,
        borderRadius: 36,
        
    },
    submitButtonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 23,
        fontWeight: '800'
    }
})
