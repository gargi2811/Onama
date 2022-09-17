// import * as React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import LoginScreen from '../screens/login';
// import RegisterScreen from '../screens/register';
// import Seller from './sellerNavigator';
// import Buyer from './buyerNavigator';
// import Admin from '../screens/admin';
// const {Navigator, Screen} = createNativeStackNavigator();
// function App() {
//   return (
//     <NavigationContainer>
//       <Navigator
//         initialRouteName="Login"
//         screenOptions={{
//           headerShown: false,
//         }}>
//         <Screen name="Login" component={LoginScreen} />
//         <Screen name="Register" component={RegisterScreen} />

//         {/* Tab Navigations */}
//         <Screen name="Admin" component={Admin} />
//         <Screen name="Seller" component={Seller} />
//         <Screen name="Buyer" component={Buyer} />
//       </Navigator>
//     </NavigationContainer>
//   );
// }
// export default App;

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/login';
import RegisterScreen from '../screens/register';
import Seller from './sellerNavigator';
import Buyer from './buyerNavigator';
import Admin from '../screens/admin';
import Alert from './buyerNavigator';
import History from '../screens/admin';
// import Admin from '../screens/admin';
//import Usecase from '../screens/Usecase';
const {Navigator, Screen} = createNativeStackNavigator();

function Example() {
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}>
        <Screen name="Buyer" component={Buyer} />
        <Screen name="Seller" component={Seller} />
        <Screen name="Admin" component={Admin} />
        <Screen name="Login" component={LoginScreen} />
        <Screen name="Register" component={RegisterScreen} />
        {/* <Screen name="Usecase" component={Usecase} */}
        <Screen name="Alerts" component={Alert} />
        <Screen name="History" component={History} />
      </Navigator>
    </NavigationContainer>
  );
}
export default Example;
