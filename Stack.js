import {NavigationContainer} from '@react-navigation/native';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';

import DetailScreen from './Screen/DetailScreen';
import LearnScreen from './Screen/LearnScreen';
import TravelScreen from './Screen/TravelScreen';
import CultureScreen from './Screen/CultureScreen';
import EntertaimentScreen from './Screen/EntertaimentScreen';
import MessScreen from './Screen/MessScreen';
import Begin from './Screen/Begin';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Begin">
        <Stack.Screen
          name="LearnScreen"
          component={({navigation}) => {
            return <LearnScreen navigation={navigation} />;
          }}
        />
        <Stack.Screen
          name="TravelScreen"
          component={({navigation}) => {
            return <TravelScreen navigation={navigation} />;
          }}
        />
        <Stack.Screen
          name="CultureScreen"
          component={({navigation}) => {
            return <CultureScreen navigation={navigation} />;
          }}
        />
        <Stack.Screen
          name="EntertaimentScreen"
          component={({navigation}) => {
            return <EntertaimentScreen navigation={navigation} />;
          }}
        />
        <Stack.Screen
          name="MessScreen"
          component={({navigation}) => {
            return <MessScreen navigation={navigation} />;
          }}
        />
        <Stack.Screen
          name="DetailScreen"
          component={({navigation}) => {
            return <DetailScreen navigation={navigation} />;
          }}
        />
        <Stack.Screen
          name="Begin"
          component={({navigation}) => {
            return <Begin navigation={navigation} />;
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
