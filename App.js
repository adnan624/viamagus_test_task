import React from 'react';
import MyStack from './src/Navigation/Navigation';
import './src/sheet/sheet'
import { SheetProvider } from 'react-native-actions-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
const App = () => {

  return (

    <GestureHandlerRootView style={{flex:1}}>
      <SheetProvider context="global">
        <MyStack />
      </SheetProvider>
    </GestureHandlerRootView>



  );
}

export default App;