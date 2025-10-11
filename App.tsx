
import {StyleSheet} from 'react-native';

import { HomeScreen } from './src/pages/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ConverterScreen } from './src/pages/ConverterScreen';
import { SendToKindleScreen } from './src/pages/SendToKindleScreen';

function App() {
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



export default App;
