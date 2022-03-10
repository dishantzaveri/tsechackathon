import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Text, useTheme} from 'react-native-paper';
import Swiper from 'react-native-swiper';
import BgImageWrapper from '../components/BgImageWrapper';
import LinearGradient from 'react-native-linear-gradient';
import {height, width} from '../components/Constants';
import Button from '../components/Button';


const Info = ({navigation}) => {
    const getStarted = require('../assets/best.jpg');
    return (
      <BgImageWrapper image={getStarted}>
        <View
          style={{
            ...StyleSheet.absoluteFill,
            backgroundColor: 'rgba(0,0,0,0.5)',
          }}
        />
        <View
          style={{
            justifyContent: 'space-between',
            marginVertical: 100,
            alignItems: 'center',
            flex: 1,
          }}>
         
          <View style={{alignItems: 'center',justifyContent: 'center',
            flex: 1,}}>
          <Button
        mode="contained"
        onPress={() => navigation.navigate('payment')}
        style={{marginTop: 6}}>
       Pay A Doctor
      </Button>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('CreateJokes')}
        style={{marginTop: 6}}>
       Create A joke
      </Button>
            <Button
        mode="contained"
        onPress={() => navigation.navigate('Login')}
        style={{marginTop: 6}}>
       Logout
      </Button>
 
          </View>
        </View>
      </BgImageWrapper>
       );
    };

    const styles = StyleSheet.create({
        text: {
          fontFamily: 'Poppins-ExtraBold',
          color: 'white',
          fontSize: 70,
          textTransform: 'uppercase',
          letterSpacing: 2,
        },
        stick: {
          backgroundColor: 'white',
        },
        label: {
          fontSize: 22,
          color: 'white',
          fontWeight: 'bold',
        },
        linearGradient: {
          height: 50,
          width: width / 1.22,
          borderRadius: 10,
          marginBottom: 15,
          justifyContent: 'center',
          alignItems: 'center',
        },
        dot: {
          width: 10,
          height: 10,
          borderRadius: 5,
          marginVertical: 4,
          marginHorizontal: 4,
        },
      });
      
      export default Info;
      