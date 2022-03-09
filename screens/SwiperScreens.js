import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Text, useTheme} from 'react-native-paper';
import Swiper from 'react-native-swiper';
import BgImageWrapper from '../components/BgImageWrapper';
import LinearGradient from 'react-native-linear-gradient';
import {height, width} from '../components/Constants';
import Button from '../components/Button';


const SwiperScreens = ({navigation}) => {
  const {colors} = useTheme();
  const learn = require('../assets/learn.jpg');
  const create = require('../assets/create.jpg');
  const connect = require('../assets/connect.jpg');
  const grow = require('../assets/grow.jpg');
  const getStarted = require('../assets/getStarted.jpg');


  const LearnScreen = () => {
    return (
      <BgImageWrapper image={learn}>
        <View
          style={{
            ...styles.stick,
            height: 5,
            width: width / 1.4,
            alignSelf: 'center',
            marginTop: 40,
          }}
        />
        <Text style={{...styles.text, textAlign: 'center', marginTop: 20}}>
          Learn
        </Text>
        <View
          style={{
            ...styles.stick,
            width: 5,
            height: height / 1.6,
            marginLeft: 40,
          }}
        />
      </BgImageWrapper>
    );
  };

  const CreateScreen = () => {
    return (
      <BgImageWrapper image={create}>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <View
            style={{
              ...styles.stick,
              height: height / 3.2,
              width: 5,
              marginLeft: 40,
            }}
          />
          <Text style={{...styles.text, textAlign: 'center', marginTop: 20}}>
            create
          </Text>
          <View
            style={{
              ...styles.stick,
              height: height / 3.2,
              width: 5,
              alignSelf: 'flex-end',
              marginRight: 40,
            }}
          />
        </View>
      </BgImageWrapper>
    );
  };

  const ConnectScreen = () => {
    return (
      <BgImageWrapper image={connect}>
        <View
          style={{
            ...styles.stick,
            height: 5,
            width: width / 1.2,
            alignSelf: 'center',
            marginTop: 40,
          }}
        />

        <Text
          style={{
            ...styles.text,
            transform: [{rotate: '270deg'}],
            position: 'absolute',
            bottom: height / 2.5,
            left: -100,
          }}>
          connect
        </Text>
        <View
          style={{
            ...styles.stick,
            height: 5,
            width: width / 2,
            alignSelf: 'flex-end',

            position: 'absolute',
            right: 40,
            bottom: 120,
          }}
        />
      </BgImageWrapper>
    );
  };

  const GrowScreen = () => {
    return (
      <BgImageWrapper image={grow}>
        <View style={{flex: 1, justifyContent: 'space-between'}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 30,
              marginTop: 20,
            }}>
            <Text
              style={{
                ...styles.text,
              }}>
              grow
            </Text>
            <View
              style={{
                ...styles.stick,
                height: height / 3.2,
                width: 5,
                marginTop: 30,
              }}
            />
          </View>
          <View
            style={{
              ...styles.stick,
              height: 5,
              width: width / 1.2,
              alignSelf: 'center',
              bottom: 120,
            }}
          />
        </View>
      </BgImageWrapper>
    );
  };

  const GetStarted = () => {
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
          <Image
            source={require('../assets/logo.png')}
            style={{height: 210, width: 200}}
          />
          <View>
          <Button
        mode="contained"
        onPress={() => navigation.navigate('Login')}
        style={{marginTop: 6}}>
       Log In
      </Button>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('Signup')}
        style={{marginTop: 6}}>
       Sign Up
      </Button>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('auth')}
        style={{marginTop: 6}}>
      FingerPrint
      </Button>
 
          </View>
        </View>
      </BgImageWrapper>
    );
  };


  return (
    <Swiper
      loop={false}
      dot={
        <View
          style={{
            ...styles.dot,
            backgroundColor: 'white',
          }}
        />
      }
      activeDot={
        <View
          style={{
            ...styles.dot,
            backgroundColor: colors.secondary,
          }}
        />
      }>
      <LearnScreen />
      <CreateScreen />
      <ConnectScreen />
      <GrowScreen />
      <GetStarted />
    </Swiper>
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

export default SwiperScreens;
