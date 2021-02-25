import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from "react-native";
import ButtonWithBackground from "./button";
import {StatusBar} from "expo-status-bar";

class Checkout extends React.Component {
    moveToSubmitOrder = () => {
        this.props.navigation.navigate('SubmitOrder', { cart: this.props.route.params.cart })
    };


    render() {
        return (
            <View style={styles.container}>

                <View style={styles.carContainer}>

                    <ImageBackground
                        source={require('./assets/HomeScreen.png')}
                        style={styles.image}
                    />

                    <View style={styles.titles}>
                        <Text style={styles.title}>Choose Your Payment Method</Text>
                    </View>

                    <View style={styles.buttons}>
                        <ButtonWithBackground onPress={() => this.moveToSubmitOrder()} text='Credit Card' color='#d12a3b' />
                    </View>

                    <View style={styles.buttons}>
                        <ButtonWithBackground onPress={() => this.moveToSubmitOrder()} text='Paypal' color='#d12a3b' />
                    </View>

                    <View style={styles.buttons}>
                        <ButtonWithBackground onPress={() => this.moveToSubmitOrder()} text='Stripe' color='#d12a3b' />
                    </View>

                    <View style={styles.buttons}>
                        <ButtonWithBackground onPress={() => this.moveToSubmitOrder()} text='ApplePay' color='#d12a3b' />
                    </View>

                </View>
                <StatusBar style="auto" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    carContainer: {
        width: '100%',
        height: '100%',
    },

    buttons: {
        marginTop: '10%',
        alignItems: 'center',
    },

    button2: {
        marginTop: '5%',
        alignItems: 'center',

    },

    titles: {
        marginTop: '30%',
        width: '100%',
        alignItems: 'center',
        backgroundColor: 'white'
    },

    title: {
        fontSize: 35,
        fontWeight: '700',
        color: '#d12a3b',
        textAlign: 'center'
    },

    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute',
    }

});

export default Checkout
