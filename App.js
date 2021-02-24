import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, ProgressViewIOSComponent } from 'react-native';
import ButtonWithBackground from './button.js';

export default function App() {
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
            <ButtonWithBackground text='Sign Up' color='#d12a3b' />
        </View>



      </View>
      <StatusBar style="auto" />
    </View>
  );
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
    alignItems: 'center'
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
