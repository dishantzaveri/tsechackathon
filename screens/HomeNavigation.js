import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';

import Quiz from './Quiz';
import { Reminders } from './Reminders';

const HomeNavigation = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen options={{headerShown: false}}  name="Home" component={Home} />
      <Stack.Screen options={{headerShown: false}} name="Quiz" component={Quiz} />
      <Stack.Screen options={{headerShown: false}} name="Reminders" component={Reminders} />
     
  

    </Stack.Navigator>
  );
};

export default HomeNavigation;

const styles = StyleSheet.create({
  
});
