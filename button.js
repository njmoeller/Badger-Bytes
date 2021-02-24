import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text, View} from 'react-native';

const ButtonWithBackground = props => {
    const content = (
        <View style = {[styles.button, {backgroundColor: props.color}]}>
            <Text style={styles.text}>{props.text}</Text>
        </View>
    )

    return<TouchableOpacity onPress={props.onPress}>{content}</TouchableOpacity>
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 36,
        padding: 16,
        width: 200,
        alignItems: 'center'
        //backgroundColor: '#f01d71',
    },

    text:{
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
        textAlign: 'center',
    }
});

export default ButtonWithBackground;