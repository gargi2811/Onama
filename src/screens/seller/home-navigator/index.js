import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Home';
import CardDetails from '../../../components/Sellercard/CardDetails';

const { Navigator, Screen } = createNativeStackNavigator();

function App() {
  return (
    <Navigator
      initialRouteName="HomeNavigator"
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name="HomeNavigator" component={Home} />
      <Screen name="CardDetails" component={CardDetails} />
    </Navigator>
  );
}
export default App;
