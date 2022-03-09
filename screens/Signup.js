import React, { useState } from 'react';
import { View, StyleSheet, Image,TouchableOpacity , Alert} from 'react-native';
import { Text, useTheme } from 'react-native-paper';
import { width } from '../components/Constants';
import Background from '../components/Background';
import Header from '../components/Header';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import BackButton from '../components/BackButton';
import { Input } from 'galio-framework';
import { theme } from '../core/theme';

export default function Signup({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { colors } = useTheme();
  const saveData = async () => {
   
    console.log(email);
    
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append(
      'Cookie',
      'csrftoken=38nEC8N6KwnhV9tDih1n18PQdK0hhMvWBLSpsUcjpwCA4h82dChCSpUZ4rEseLqH; sessionid=1cbd4sze5lwmf948fagzpu2u53n5hi2m',
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

    await fetch('https://findmyplug.herokuapp.com/register/', requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
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
    onPress={()=>{saveData();navigation.navigate('Login');Alert.alert('Check your Mail')}}
      style={{ marginTop: 6 }}>
    SIGNUP
    </Button>
    <View style={styles.row}>
      <Text style={styles.best}>Already have an account? </Text>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.link}>  Log in</Text>
      </TouchableOpacity>
    </View>
  </Background>
 
  );
};

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

    color: '#3BCBFF',
    fontWeight: 'bold',
  },

  link: {
    fontWeight: 'bold',
    color: '#3BCBFF',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  stext: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 12,
  },
  input: {
    height: 52,
    borderColor: 'white',
    width: width / 1.15,
    color: 'black',
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

