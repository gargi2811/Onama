import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from '../screens/buyer/Profile';
import HomeNavigator from '../screens/buyer/Home';
//import Alert from '../screens/buyer/Menu/Alerts';
import Menu from '../screens/buyer/Menu/Menu';
//import RowCalculator from '../screens/buyer/RowCalculator';

const { Screen, Navigator } = createBottomTabNavigator();

export default function BuyerNavigator() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home">
      <Screen name="Home" component={HomeNavigator} />
      <Screen name="Menu" component={Menu} />
      <Screen name="Profile" component={Profile} />
    </Navigator>
  );
}