import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Ionicons';
import Home from './Home';
import MentalHealthNavigation from './MentalHealthNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from '@react-navigation/stack';
// import Call from './Call';
import Diary from './Diary';
import Call from './Call';
import Quiz from './Quiz';
import HomeNavigation from './HomeNavigation';
// import TopBarNavigator from './TopTabScreen';

const Tab = createBottomTabNavigator();

const BottomTabs = ({route}) => {
  return (
    <Tab.Navigator initialRouteName="Home" activeColor="#fff">
      <Tab.Screen
        name="HomeNavigation"
        component={HomeNavigation}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarColor: '#009387',
          tabBarIcon: ({color}) => (
            <Icon name="ios-home" color={color} size={26} />
            
          ),
        }}
      />
      <Tab.Screen
        name="Call"
        component={Call}
        options={{
          headerShown: false,
          tabBarLabel: 'Call',
          tabBarColor: '#1f65ff',
          tabBarIcon: ({color}) => (

            <Icon name="ios-images" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Diary"
        component={Diary}
        options={{
          headerShown: false,
          tabBarLabel: 'Diary',
          tabBarColor: '#694fad',
          tabBarIcon: ({color}) => (
            <Icon name="ios-images" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen 
        name="Profile"
        component={MentalHealthNavigation}
        options={{
          headerShown: false,
          tabBarLabel: 'Mind Power',
          tabBarColor: '#d02860',
          tabBarIcon: ({color}) => (
            <Icon name="ios-musical-notes" color={color} size={26} />
          ),
        }}
      /> 
    </Tab.Navigator>
  );
};
export default BottomTabs;

function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Quiz" component={Quiz} />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}
