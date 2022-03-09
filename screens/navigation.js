// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import Contact from './Contact';
// import Feedback from './Feedback';
// const Tab = createMaterialTopTabNavigator();

// function TabNavigation() {
//   return (
//     <NavigationContainer independent={true}>
//       <Tab.Navigator
//         screenOptions={({ route }) => ({
//           tabBarIcon: ({ focused, size, color }) => {
//             let iconName;
//             if (route.name === 'Screen_A') {
//               iconName = 'autoprefixer';
//               size = focused ? 25 : 20;
//               // color = focused ? '#f0f' : '#555';
//             } else if (route.name === 'Screen_B') {
//               iconName = 'btc';
//               size = focused ? 25 : 20;
//               // color = focused ? '#f0f' : '#555';
//             }
//             return (
//               <FontAwesome5
//                 name={iconName}
//                 size={size}
//                 color={color}
//               />
//             )
//           }
//         })}
//         screenOptions={{
//           activeTintColor: '#f0f',
//           inactiveTintColor: '#555',
//           activeBackgroundColor: '#fff',
//           inactiveBackgroundColor: '#999',
//           showLabel: true,
//           labelStyle: { fontSize: 14 },
//           showIcon: true,
//         }}
//         activeColor='#f0edf6'
//         inactiveColor='#3e2465'
//         barStyle={{ backgroundColor: '#694fad' }}
//       >
//         <Tab.Screen
//           name="CONTACT"
//           component={Contact}
//         />
//         <Tab.Screen
//           name="FEEDBACK"
//           component={Feedback}
//         />
//       </Tab.Navigator>
//     </NavigationContainer>
//   )
// }




// export default TabNavigation;

