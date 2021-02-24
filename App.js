import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';

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
          <Text style={styles.subtitle}>first committ test</Text>
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
