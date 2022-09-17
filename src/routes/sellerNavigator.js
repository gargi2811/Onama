// import * as React from 'react';
// import {Text, View} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import HomeScreen from '../screens/seller/Home';
// import Profile from '../screens/seller/Profile';
// import HomeNavigator from '../screens/seller/home-navigator';

// function SettingsScreen() {
//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <Text>Settings!</Text>
//     </View>
//   );
// }
// const {Screen, Navigator} = createBottomTabNavigator();

// export default function SellerNavigator() {
//   return (
//     <Navigator
//       screenOptions={{
//         headerShown: false,
//       }}
//       initialRouteName="Home">
//       <Screen name="HomeNavigator" component={HomeNavigator} />
//       <Screen name="Settings" component={SettingsScreen} />
//       <Screen name="Profile" component={Profile} />
//     </Navigator>
//   );
// }

import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profile from '../screens/seller/Profile';
import HomeNavigator from '../screens/seller/home-navigator';
import Bin from '../screens/seller/Bin';

const {Screen, Navigator} = createBottomTabNavigator();

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
