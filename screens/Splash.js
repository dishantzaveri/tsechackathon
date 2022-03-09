/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import LottieView from 'lottie-react-native';

export default function Splash({navigation}) {
  return (
    <View style={styles.container}>
      <LottieView
        source={require('../assets/animation.json')}
        autoPlay={true}
        loop
      
        style={styles.animation}
      />
      <TouchableOpacity onPress={() => navigation.navigate('SwiperScreens')}>
      <Image source={require('../assets/dementechlogo.png')} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    
  },
  animation: {
    width: 300,
    height: 300,
    margin:40
    

    
    
  },
  image: {
    alignItems: 'center',
    justifyContent: 'center',
    margin:80
  },
});
