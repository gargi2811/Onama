import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Home';
import CardDetails from '../../../components/Buyercard/CardDetails';

const {Navigator, Screen} = createNativeStackNavigator();

function Example() {
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name="Home" component={Home} />
      <Screen name="CardDetails" component={CardDetails} />
    </Navigator>
  );
}
export default Example;
