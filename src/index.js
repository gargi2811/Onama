import * as React from 'react';
import Navigator from './routes';
import {NativeBaseProvider} from 'native-base';
// import {Native}
//New
function App() {
  return (
    <NativeBaseProvider>
      <Navigator />
    </NativeBaseProvider>
  );
}
export default App;
