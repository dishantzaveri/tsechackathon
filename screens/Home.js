import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import {colors} from '../config/colors';
import {styles} from './styles';
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

export default function Home  () {
  return (
    <View style={styles.container}>
      
      <ScrollView contentContainerStyle={styles.scrollViewWrapper}>
        <View style={styles.row}>
          <View>
            {topics.map((item, index) => {
              if (index % 2 == 0) {
                return (
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
                );
              }
            })}
          </View>
          <View style={{flex: 1}}>
            {topics.map((item, index) => {
              if (index % 2 != 0) {
                return (
                  <View
                    style={[
                      styles.card,
                      {
                        backgroundColor: item.background,

                        marginBottom: 15,
                      },
                    ]}>
                    <Image style={styles.topicImage} source={item.url} />
                    <Text style={[styles.label, {color: item.labelColor}]}>
                      {item.title}
                    </Text>
                  </View>
                );
              }
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
