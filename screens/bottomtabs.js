import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Ionicons';
import Home from './Home';
// import Call from './Call';
// import Diary from './Diary';
// import TopBarNavigator from './TopTabScreen';

const Tab = createBottomTabNavigator();

const BottomTabs = ({route}) => {
  return (
    <Tab.Navigator initialRouteName="Home" activeColor="#fff">
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarColor: '#009387',
          tabBarIcon: ({color}) => (
            <Icon name="ios-home" color={color} size={26} />
            
          ),
        }}
      />
      {/* <Tab.Screen
        name="Call"
        component={Call}
        options={{
          headerShown: false,
          tabBarLabel: 'Call',
          tabBarColor: '#1f65ff',
          tabBarIcon: ({color}) => (

            <ion-icon name="call-outline" color={color} size={26} ></ion-icon>
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
            <Icon name="ios-aperture" color={color} size={26} />
          ),
        }}
      /> */}
      {/* <Tab.Screen
        initialParams={{text: email}}
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarLabel: 'Profile',
          tabBarColor: '#d02860',
          tabBarIcon: ({color}) => (
            <Icon name="ios-person" color={color} size={26} />
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
};
export default BottomTabs;
