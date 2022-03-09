import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import MentalHeath from './MentalHeath';
import TrackList from './TrackList';
import Track from './TrackPlayer';
import CreateJoke from './CreateJoke';
const MentalHealthNavigation = () => {
    const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="Mental Health" component={MentalHeath} />
        <Stack.Screen options={{headerShown: false}} name="TrackList" component={TrackList} />
        <Stack.Screen options={{headerShown: false}} name="Track" component={Track} />
        <Stack.Screen options={{headerShown: false}} name="CreateJoke" component={CreateJoke} />
    
    </Stack.Navigator>
  )
}

export default MentalHealthNavigation

const styles = StyleSheet.create({})