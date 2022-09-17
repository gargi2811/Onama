// import * as React from 'react';
// import {Text, View} from 'react-native';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// function HomeScreen() {
//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <Text>BUYER Home</Text>
//     </View>
//   );
// }

// function SettingssScreen() {
//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <Text>BUYER Settings!</Text>
//     </View>
//   );
// }

// const {Screen, Navigator} = createBottomTabNavigator();

// export default function BuyerNavigator() {
//   return (
//     <Navigator
//       screenOptions={{
//         headerShown: false,
//       }}
//       initialRouteName="Home">
//       <Screen name="Home" component={HomeScreen} />
//       <Screen name="Settings" component={SettingsScreen} />
//     </Navigator>
//   );
// }

import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profile from '../screens/buyer/Profile';
import HomeNavigator from '../screens/buyer/Home';
import Example from '../screens/buyer/Notifications';
//import Alert from '../screens/buyer/Menu/Alerts';
//import Menu from '../screens/buyer/Menu/Menu';
//import RowCalculator from '../screens/buyer/RowCalculator';

const {Screen, Navigator} = createBottomTabNavigator();

export default function BuyerNavigator() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home">
      <Screen name="Home" component={HomeNavigator} />
      {/* <Screen name="Menu" component={Menu} /> */}
      <Screen name="Notify" component={Example} />
      <Screen name="Profile" component={Profile} />
    </Navigator>
  );
}
