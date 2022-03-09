import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView,Linking,} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {colors} from '../config/colors';
import {styles} from './styles';

const Home = ({navigation}) => {
  const topics = [
    {
      title: 'Reduce Stress',
      url: require('../assets/images/topics/topic1cardbg.png'),
      background: colors.white,
      labelColor: colors.black},
    {
      title: 'Improve Output',
      url: require('../assets/images/topics/topic2cardbg.png'),
      background: colors.white,
      labelColor: colors.black
      
    },
    {
      title: 'Increase Happiness',
      
      url: require('../assets/images/topics/topic3cardbg.png'),
      background: colors.white,
      labelColor: colors.black
    },
    {
      title: 'Reduce Anxiety',
      url: require('../assets/images/topics/topic4cardbg.png'),
      background: colors.white,
      labelColor: colors.black
    },
    {
      title: 'Personal Growth',
    
      url: require('../assets/images/topics/topic5cardbg.png'),
      background: colors.white,
     labelColor: '#FFECCC',labelColor: colors.black
    },
  
  ];
 
  return (
    <View style={styles.container}>
      
      <ScrollView contentContainerStyle={styles.scrollViewWrapper}>
        <View style={styles.row}>
          <View>
            {topics.map((item, index) => {
              if (index % 2 == 0) {
                return (
                  <TouchableOpacity     onPress={() => {
                    navigation.navigate('Quiz');
                  }}>
                  <View
                    style={[
                      styles.card,
                      {
                        backgroundColor: item.background,
                        marginRight: 15,
                        marginBottom: 15,
                      },
                    ]}>
                      
                    <Image style={styles.topicImage} source={item.url} />
                    <Text style={[styles.label, {color: item.labelColor}]}>
                      {item.title}
                    </Text>
                  </View>
                  </TouchableOpacity>

                );
              }
            })}
          </View>
          <View style={{flex: 1}}>
            {topics.map((item, index) => {
              if (index % 2 != 0) {
                return (
                  <TouchableOpacity     onPress={() => Linking.openURL('https://www.nytimes.com/games/wordle/index.html')}>
                  <View
                    style={[
                      styles.card,
                      {
                        backgroundColor: item.background,

                        marginBottom: 15,
                      },
                    ]}>
                      <TouchableOpacity >
                    <Image style={styles.topicImage} source={item.url} />
                    </TouchableOpacity>
                    <Text style={[styles.label, {color: item.labelColor}]}>
                      {item.title}
                    </Text>
                  </View>
                  </TouchableOpacity>
                );
              }
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;