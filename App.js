import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './src/screens/HOME/WelcomeScreen';
import GetStarted from './src/screens/HOME/GetStarted';
import ChooseScreen from './src/screens/HOME/ChooseScreen';
import BgmiDashboard from './src/screens/BGMI/BgmiDashboardScreen';
import AssualtRifles from './src/screens/BGMI/Weapons/AssualtRifles/AssualtRifles';
import Sniper from './src/screens/BGMI/Weapons/Sniper/Sniper';
import Victor from './src/screens/BGMI/Characters/Victor';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown:false}} />
        <Stack.Screen name="GetStarted" component={GetStarted} options={{headerShown:false}} />
        <Stack.Screen name="ChooseScreen" component={ChooseScreen} options={{headerShown:false}} />
        <Stack.Screen name="BgmiDashboard" component={BgmiDashboard} options={{headerShown:false}} />
        <Stack.Screen name="AssualtRifles" component={AssualtRifles} options={{headerShown:false}} />
        <Stack.Screen name="Sniper" component={Sniper} options={{headerShown:false}} />
        <Stack.Screen name="Victor" component={Victor} options={{headerShown:false}} />


      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
