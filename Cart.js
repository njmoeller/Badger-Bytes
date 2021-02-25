import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from "react-native";
import ButtonWithBackground from "./button";
import {StatusBar} from "expo-status-bar";

class Cart extends React.Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>

                <View style={styles.carContainer}>

                    <ImageBackground
                        source={require('./assets/HomeScreen.png')}
                        style={styles.image}
                    />

                    {/*List of Items in your cart go here*/}

                    <View style={styles.button1}>
                        <ButtonWithBackground onPress={() => {navigate('Checkout')}} text='Checkout' color='#d12a3b' />
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

    button1: {
        marginTop: '40%',
        alignItems: 'center',
    },

    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute',
    }

});

export default Cart
