import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from '../screens/seller/Profile';
import HomeNavigator from '../screens/seller/home-navigator';
import Bin from '../screens/seller/Bin';


const { Screen, Navigator } = createBottomTabNavigator();

export default function SellerNavigator() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home">
      <Screen name="Home" component={HomeNavigator} />
      <Screen name="Bin" component={Bin} />
      <Screen name="Profile" component={Profile} />
    </Navigator>
  );
}
