import React, {Component} from 'react'
import {ActivityIndicator, View, Text, TouchableOpacity, TextInput, StyleSheet, AsyncStorage} from 'react-native'

const client = require('./Utilities/client');

// Handles text field data from login page and communicates to backend
class InputLogin extends Component {
    state = {
        username: '',
        password: '',
        shouldShowActivityIndicator: false
    };

    static async storeUsername(username) {
        try {
            await AsyncStorage.setItem("username", username);
        } catch (error) {
            alert("Something went wrong")
        }
    }

    handleUsername = (text) => {
        this.setState({username: text})
    };

    handlePassword = (text) => {
        this.setState({password: text})
    };

    removeActivityIndicator = () => {
        this.setState({shouldShowActivityIndicator: false});
    };

    navigateToMenu = () => {
        this.props.navigation.navigate("Menu");
    };

    login = (username) => {
        this.setState({shouldShowActivityIndicator: true});
        client.post('/api/users/login', {
            username: this.state.username, pass: this.state.password
        })
            .then((response) => {
                this.removeActivityIndicator();

                InputLogin.storeUsername(this.state.username)
                    .then(() => {
                        this.navigateToMenu();
                    });
            })
            .catch((error) => {
                this.removeActivityIndicator();
                alert(error.response.data.message || 'Error logging in user with username: ' + username)
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
                           color= "white"
                           onChangeText={this.handleUsername}/>

                <TextInput style={styles.input}
                           underlineColorAndroid="transparent"
                           placeholder="Password"
                           placeholderTextColor="white"
                           autoCapitalize="none"
                           color= "white"
                           secureTextEntry={true}
                           onChangeText={this.handlePassword}/>

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

export default InputLogin

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
