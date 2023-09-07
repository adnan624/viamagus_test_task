import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TodaysGame from '../Screens/TodaysGame';
import EntryTickets from '../Screens/EntryTickets';
import Profile from '../Screens/Profile';
import ExampleSheet from '../sheet/examplesheet';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='TodaysGame'>
        <Stack.Screen
          name="TodaysGame"
          component={TodaysGame}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="EntryTickets"
          component={EntryTickets}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }}
        />
          <Stack.Screen
          name="ExampleSheet"
          component={ExampleSheet}
          
          options={{ headerShown: false }}
        >
          
          {/* {props => <ExampleSheet {...props} />} */}
          </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack