import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './src/screens/HOME/WelcomeScreen';
import GetStarted from './src/screens/HOME/GetStarted';
import ChooseScreen from './src/screens/HOME/ChooseScreen';
import BgmiDashboard from './src/screens/BGMI/BgmiDashboardScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown:false}} />
        <Stack.Screen name="GetStarted" component={GetStarted} options={{headerShown:false}} />
        <Stack.Screen name="ChooseScreen" component={ChooseScreen} options={{headerShown:false}} />
        <Stack.Screen name="BgmiDashboard" component={BgmiDashboard} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
