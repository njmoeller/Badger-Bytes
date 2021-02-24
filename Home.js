import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from "react-native";
import ButtonWithBackground from "./button";
import {StatusBar} from "expo-status-bar";

class Home extends React.Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>

                <View style={styles.carContainer}>

                    <ImageBackground
                        source={require('./assets/HomeScreen.png')}
                        style={styles.image}
                    />

                    <View style={styles.titles}>
                        <Text style={styles.title}>Badger Bytes</Text>
                        <Text style={styles.subtitle}>Get Your Grub On</Text>
                    </View>


                    <View style={styles.button1}>
                        <ButtonWithBackground text='Login' color='#d12a3b' />
                    </View>

                    <View style={styles.button2}>
                        <ButtonWithBackground onPress={() => {navigate('Signup')}} text='Sign Up' color='#d12a3b' />
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
        fontSize: 40,
        fontWeight: '700',
        color: '#d12a3b'
    },

    subtitle: {
        fontSize: 16,
        color: '#d12a3b',
        fontWeight: '700'
    },

    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute',
    }

});

export default Home
