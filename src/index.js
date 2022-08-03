import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/login'
import Register from './screens/register'

const { Navigator, Screen } = createNativeStackNavigator();
import Navigator from './routes';
import { NativeBaseProvider } from 'native-base';
// import {Native}

function App() {
  return (
    <NativeBaseProvider>
      <Navigator />
    </NativeBaseProvider>
  );
}
export default App;
