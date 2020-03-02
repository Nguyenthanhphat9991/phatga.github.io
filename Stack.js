import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';

import {Login, Begin, Home, Register} from './Screen/ath/index';
import {
  CultureScreen,
  EntertaiScreen,
  LearnScreen,
  MessScreen,
  TravelScreen,
  LearnScreenDetail,
  TravelScreenDetail,
  CultureScreenDetail,
  EntertaiScreenDetail,
  MessScreenDetail,
} from './Screen/tab/index';

const Header = () => ({
  headerShown: false,
});
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
          options={Header}
        />
        <Stack.Screen
          name="TravelScreen"
          component={({navigation}) => {
            return <TravelScreen navigation={navigation} />;
          }}
          options={Header}
        />
        <Stack.Screen
          name="CultureScreen"
          component={({navigation}) => {
            return <CultureScreen navigation={navigation} />;
          }}
          options={Header}
        />
        <Stack.Screen
          name="EntertaimentScreen"
          component={({navigation}) => {
            return <EntertaiScreen navigation={navigation} />;
          }}
          options={Header}
        />
        <Stack.Screen
          name="MessScreen"
          component={({navigation}) => {
            return <MessScreen navigation={navigation} />;
          }}
          options={Header}
        />
        <Stack.Screen
          name="Begin"
          component={({navigation}) => {
            return <Begin navigation={navigation} />;
          }}
          options={Header}
        />
        <Stack.Screen
          name="Login"
          component={({navigation}) => {
            return <Login navigation={navigation} />;
          }}
          options={Header}
        />
        <Stack.Screen
          name="Register"
          component={({navigation}) => {
            return <Register navigation={navigation} />;
          }}
          options={Header}
        />
        <Stack.Screen
          name="Home"
          component={({navigation}) => {
            return <Home navigation={navigation} />;
          }}
          options={Header}
        />
        <Stack.Screen
          name="LearnScreenDetail"
          component={({navigation}) => {
            return <LearnScreenDetail navigation={navigation} />;
          }}
          options={Header}
        />
        <Stack.Screen
          name="TravelScreenDetail"
          component={({navigation}) => {
            return <TravelScreenDetail navigation={navigation} />;
          }}
          options={Header}
        />
        <Stack.Screen
          name="CultureScreenDetail"
          component={({navigation}) => {
            return <CultureScreenDetail navigation={navigation} />;
          }}
          options={Header}
        />
        <Stack.Screen
          name="EntertaiScreenDetail"
          component={({navigation}) => {
            return <EntertaiScreenDetail navigation={navigation} />;
          }}
          options={Header}
        />
        <Stack.Screen
          name="MessScreenDetail"
          component={({navigation}) => {
            return <MessScreenDetail navigation={navigation} />;
          }}
          options={Header}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
