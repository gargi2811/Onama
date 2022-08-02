import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/login';
import Register from '../screens/register';
import Seller from './sellerNavigator';
import Buyer from './buyerNavigator';

const {Navigator, Screen} = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="Seller"
        screenOptions={{
          headerShown: false,
        }}>
        <Screen name="Login" component={Login} />
        <Screen name="Register" component={Register} />

        {/* Tab Navigations */}
        <Screen name="Seller" component={Seller} />
        <Screen name="Buyer" component={Buyer} />
      </Navigator>
    </NavigationContainer>
  );
}
export default App;
