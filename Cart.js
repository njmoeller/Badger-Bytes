import React from 'react';
import {Image, ImageBackground, ScrollView, StyleSheet, Text, View} from "react-native";
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

                    <View style={styles.titles}>
                        <Text style={styles.title}>Badger Bytes</Text>
                        <Text style={styles.subtitle}>Get Your Grub On</Text>
                    </View>          

                    <ScrollView>
                        {
                            this.props.route.params.cart.map((item, index) => (
                                <View key = {index} style = {styles.item}>
                                    <Text style={{fontSize: 20, fontWeight: '600'}}>{item.name}</Text>
                                    <Text style={{fontSize: 20, fontWeight: '600'}}>{'$' + item.price}</Text>
                                    <Image source={{uri: item.imageURL}} style= {{ height:100, width: 100 }} />
                                </View>
                            ))
                        }
                        <View style={styles.button1}>
                            <ButtonWithBackground onPress={() => {navigate('Checkout', { cart: this.props.route.params.cart })}} text='Checkout' color='#d12a3b' />
                        </View>

                    </ScrollView>


                </View>
                <StatusBar style="auto" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 30,
        margin: 2,
        borderColor: '#2a4944',
        borderWidth: 1,
        backgroundColor: '#d2f7f1'
    },
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

    titles: {
       // marginTop: '10%',
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#d12a3b'
    },

    title: {
        fontSize: 35,
        fontWeight: '700',
        color: 'white',
        textAlign: 'center'
    },

    subtitle: {
        fontSize: 16,
        color: 'white',
        fontWeight: '700'
    },

    button1: {
        marginTop: '20%',
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
