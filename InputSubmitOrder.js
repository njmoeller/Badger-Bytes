import React, {Component} from 'react'
import {ActivityIndicator, View, Text, TouchableOpacity, TextInput, StyleSheet, AsyncStorage} from 'react-native'

const client = require('./Utilities/client');

class InputSubmitOrder extends Component {
    state = {
        carText: '',
        pickUpTime: '',
        shouldShowActivityIndicator: false
    };

    static async getUsername() {
        try {
            let myUsername = await AsyncStorage.getItem("username");
            return myUsername;
        } catch (error) {
            alert("Something went wrong")
        }
    }


        handleUsername = (text) => {
        this.setState({carText: text})
    };

    handlePassword = (text) => {
        this.setState({pickUpTime: text})
    };

    removeActivityIndicator = () => {
        this.setState({shouldShowActivityIndicator: false});
    };

    navigateToReceipt = () => {
        this.props.navigation.navigate("Receipt", {cart: this.props.cart});
    };

    login = () => {
        const cart = this.props.cart;
        let orderTotal = 0;
        let menuItems = [];
        for(let i=0; i<cart.length; i++) {
            orderTotal += cart[i].price;
            menuItems.push(cart[i].name);
        }

        InputSubmitOrder.getUsername()
            .then((username) => {
                this.setState({shouldShowActivityIndicator: true});
                client.post('/api/order/', {
                    username: username, car: this.state.carText, pickUpTime: this.state.pickUpTime, menuItems: menuItems, cost: orderTotal
                })
                    .then((response) => {
                        this.removeActivityIndicator();
                        this.navigateToReceipt();
                        alert('Successfully added order to database');
                    })
                    .catch((error) => {
                        this.removeActivityIndicator();
                        alert(error.response.data.message || 'Error adding order to database')
                    });
            });
    };

    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator size='large' color="#FFFFFF" animating={this.state.shouldShowActivityIndicator}/>
                <TextInput style={styles.input}
                           underlineColorAndroid="transparent"
                           placeholder="Car Make & Model"
                           placeholderTextColor="white"
                           autoCapitalize="none"
                           color= "white"
                           onChangeText={this.handleUsername}/>

                <TextInput style={styles.input}
                           underlineColorAndroid="transparent"
                           placeholder="Pick Up Time"
                           placeholderTextColor="white"
                           autoCapitalize="none"
                           color= "white"
                           onChangeText={this.handlePassword}/>

                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={
                        () => this.login()
                    }>
                    <Text style={styles.submitButtonText}> Submit </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default InputSubmitOrder

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
