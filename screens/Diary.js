import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Text,
  ImageBackground
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export default function Diary() {
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
   
    var axios = require('axios');

    var config = {
      method: 'get',
      url: 'https://dementech.pythonanywhere.com/scrapbook/',
      headers: { 
        'Authorization': 'Token 60a6b5ea81823c883d178b7b2ad57b618d712707'
      }
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      setFilteredData(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });

  };

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity 
      >
        <View style={styles.card}>
          <View style={{
            flex: 1, flexDirection: 'row', backgroundColor: '#768991', borderWidth: 1, borderColor: '#768991',
            borderStyle: 'solid', borderRadius: 15
          }}>
         
            <ImageBackground
              source={{
                uri: item.photo,
              }}
              style={styles.image}></ImageBackground>
            
          </View>
        </View>
      </TouchableOpacity>

    );
  };

  return (
    <View style={styles.container}>
   
        <FlatList
          data={filteredData}
          keyExtractor={({ id }) => id}
          contentContainerStyle={{}}
          renderItem={renderItem}

        />

      </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f2128',
  },
  input: {
    padding: 7,
    flex: 1,
    borderBottomColor: "white",
    color: "white",
  },
  inputCard: {
    margin: 20,
    flexDirection: 'row',
    backgroundColor: '#1f2128',
    alignItems: 'center',
    borderRadius: 5,
    zIndex: 100,
    borderColor: "white",
    borderWidth: 0.5
  },


  title: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  card: {
    height: 100,
    width: 370,
    paddingLeft: 10,
    margin: 15,
    marginLeft: 15,

    marginTop: 5,
    borderWidth: 1,
    backgroundColor: '#768991',
    borderColor: '#768991',
    borderStyle: 'solid',
    borderRadius: 15,
  },
  image:{
    width: 80, height: 80, margin: 5, marginTop: 8, marginLeft: 1 

  }

});