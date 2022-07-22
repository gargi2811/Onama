import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Home';
import GoResult from './GoResult';

const {Navigator, Screen} = createNativeStackNavigator();

function App() {
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name="Home" component={Home} />
      <Screen name="GoResult" component={GoResult} />
    </Navigator>
  );
}
export default App;
