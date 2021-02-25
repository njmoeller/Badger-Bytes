import React from 'react';
import {ImageBackground, ScrollView, StyleSheet, Text, View} from "react-native";
import ButtonWithBackground from "./button";
import {StatusBar} from "expo-status-bar";
import InputSubmitOrder from "./InputSubmitOrder";

class SubmitOrder extends React.Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>

                <View style={styles.carContainer}>

                    <ImageBackground
                        source={require('./assets/HomeScreen.png')}
                        style={styles.image}
                    />

                    <ScrollView>
                        <View style={styles.titles}>
                            <Text style={styles.title}>Badger Bytes</Text>
                        </View>

                        <View style={styles.importantText}>
                            <Text style={styles.instruction}>Submit Order</Text>
                        </View>

                        <InputSubmitOrder navigation={this.props.navigation} cart={this.props.route.params.cart}/>
                    </ScrollView>

                </View>
                <StatusBar style="auto" />
            </View>
        );
    }
}

export default SubmitOrder

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
    },

    importantText: {
        marginTop: '10%',
        width: '100%',
        alignItems: 'center'
    },

    instruction: {
        fontSize: 30,
        fontWeight: '700',
        color: 'white',
        marginTop: 27
    }

});
