import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import Background from '../components/Background';
import Header from '../components/Header';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import BackButton from '../components/BackButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Text, useTheme } from 'react-native-paper';
import { Input } from 'galio-framework';
import { width } from '../components/Constants';
import { theme } from '../core/theme';

export default function Login({ navigation }) {
  // useEffect(() => {
  //   saveData();
  // }, []);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [tok, setTok] = useState();
  const { colors } = useTheme();

  console.log(email);
  const saveData = async () => {
    const STORAGE_KEY1 = '@save_token';
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append(
      'Cookie',
      'csrftoken=aBugKE4huNVscf0CJpQYYGWYM4Zd34afYp5yIH8hSkzPLrDTiK5gmbFMxokSXQZW; sessionid=uw9jqj1994dn44tl7i2olnkpga6frsw6',
    );

    var raw = JSON.stringify({
      email: email,
      password: password,
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    await fetch('https://findmyplug.herokuapp.com/login/', requestOptions)
      .then(response => response.json())
      .then(result => {
        setTok(result.token);
        console.log(result.token);
        AsyncStorage.setItem(STORAGE_KEY1, result.token);
      })
      .catch(error => console.log('error', error));
    // try {
    //   //await AsyncStorage.clear();
    //    AsyncStorage.setItem(STORAGE_KEY1, token);
    //   console.log(STORAGE_KEY1);
    // } catch (e) {
    //   //console.log(token);
    //   Alert.alert('Failed to save the data to the storage');
    // }
  };
  return (


    <Background>
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email}
        onChangeText={text => setEmail(text)}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password}
        onChangeText={text => setPassword(text)}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry={true}
        autoCapitalize="none"
        autoCompleteType="password"
        keyboardType="default"
      />
      <Button
        mode="contained"
        onPress={() => {
          saveData();
          navigation.navigate('Info');
        }}
        style={{ marginTop: 6 , color:"#000000"}}>
       LOGIN
      </Button>
      <View style={styles.row}>
        <Text style={styles.best}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.link}> Sign Up</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },

  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  best: {

    color: '#FFFFFF'
  },

  link: {
    fontWeight: 'bold',
    color: "#FFFFFF",
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  button: {
    backgroundColor: '#0782F9',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#0782F9',
    borderWidth: 2,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonOutlineText: {
    color: '#0782F9',
    fontWeight: '700',
    fontSize: 16,
  },
});
