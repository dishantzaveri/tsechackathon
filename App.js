import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './screens/Splash';
import Login from './screens/Login';
import Signup from './screens/Signup';
import SwiperScreens from './screens/SwiperScreens';
import Payment from './screens/payment';
import Profile from './screens/Profile';
import Auth from './screens/auth';
import BottomTabs from './screens/bottomtabs';
import Quiz from './screens/Quiz';

const Stack = createStackNavigator();
function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">

        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name={'SwiperScreens'} component={SwiperScreens} options={{ headerShown: false }} />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{ headerShown: false }}></Stack.Screen>

        <Stack.Screen
          name="payment"
          component={Payment}
          options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen
          name="auth"
          component={Auth}
          options={{ headerShown: false }}></Stack.Screen>
    




      </Stack.Navigator>

    </NavigationContainer>
  );
}

export default App;
