/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, Text, TextInput, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { HomeScreen } from './src/pages/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ConverterScreen } from './src/pages/ConverterScreen';
import { SendToKindleScreen } from './src/pages/SendToKindleScreen';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='HomeScreen' screenOptions={{headerShown:false}}>
        <Tab.Screen name="HomeScreen" component={HomeScreen} />
        <Tab.Screen name="SendToKindle" component={SendToKindleScreen} />
        <Tab.Screen name="Converter" component={ConverterScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
