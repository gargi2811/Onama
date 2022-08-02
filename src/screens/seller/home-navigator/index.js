import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Home';
// import GoResult from './GoResult';
import CardDetails from '../../../components/card/CardDetails';

const {Navigator, Screen} = createNativeStackNavigator();

function App() {
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name="Home" component={Home} />
      {/* <Screen name="GoResult" component={GoResult} /> */}
      <Screen name="CardDetails" component={CardDetails} />
    </Navigator>
  );
}
export default App;
