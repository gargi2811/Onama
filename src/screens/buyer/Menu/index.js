import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Menu from './Menu';
//import Alerts from './Alerts';
import Alert from './Alerts';
import RowCalculator from './RowCalculator';

const { Navigator, Screen } = createNativeStackNavigator();

function App() {
    return (
        <Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
            }}>
            <Screen name="Menu" component={Menu} />
            <Screen name="Alerts" component={Alert} />
            <Screen name="Calculator" component={RowCalculator} />
        </Navigator>
    );
}
export default App;