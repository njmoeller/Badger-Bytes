import React from 'react';
import {ImageBackground, StyleSheet, Text, View, ScrollView, Image} from "react-native";
import {StatusBar} from "expo-status-bar";

class Receipt extends React.Component {
    moveToSubmitOrder = () => {
        this.props.navigation.navigate('SubmitOrder', { cart: this.props.route.params.cart })
    };

    totalOrder = this.cos


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

                    <View style={styles.importantText}>
                        <Text style={styles.instruction}>Thank You For Shopping With Badger Bytes!</Text>
                        <Text style={styles.instruction}>Your Receipt</Text>
                    </View>

                    <View style={styles.scrollContainer}>
                        <ScrollView>
                            {
                                this.props.route.params.cart.map((item, index) => (
                                    <View key = {index} style = {styles.item}>
                                        <Text style={{fontSize: 20, fontWeight: '600'}}> {item.name} </Text>
                                        <Text style={{fontSize: 20, fontWeight: '600'}}>{'$' + item.price}</Text>
                                        <Image source={{uri: item.imageURL}} style= {{ height:100, width: 100 }} />
                                    </View>
                                ))
                            }
                        <View style={styles.receiptContainer}>
                            <Text style={styles.receipt}>Total Amount: </Text>
                            <Text style={styles.receipt}>Payment Method: </Text>

                        </View>
                        </ScrollView>
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

    scrollContainer: {
        width: '100%',
        height: '100%',
    },

    titles: {
        marginTop: '10%',
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
    },

    importantText: {
        marginTop: '5%',
        width: '100%',
        alignItems: 'center'
      },
    
    instruction: {
        fontSize: 25,
        fontWeight: '700',
        color: 'white',
        marginTop: 27,
        textAlign: 'center'
      },

    receiptContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white'
    },

    receipt: {
        fontSize: 20,
        fontWeight: '700',
        color: 'black',
        marginTop: 10,

      },

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


});

export default Receipt
