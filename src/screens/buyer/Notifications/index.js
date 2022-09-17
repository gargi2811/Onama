import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View} from 'native-base';

// import Alert from './Alerts';
// import History from './history';

const {Navigator, Screen} = createNativeStackNavigator();

function Example() {
  return (
    <View></View>
    // <Navigator
    //   initialRouteName="Alerts"
    //   screenOptions={{
    //     headerShown: false,
    //   }}>
    //   <Screen name="Alerts" component={Alert} />
    //   <Screen name="History" component={History} />
    // </Navigator>
  );
}
export default Example;
