import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';

import {Login, Begin, Home, Register} from './src/Screen/ath/index';
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
} from './src/Screen/tab/index';
import * as firebase from 'firebase';

import {CE, GE, EFSP} from './src/Screen/LearnScreen/index';
const Header = () => ({
  headerShown: false,
});

const firebaseConfig = {
  apiKey: 'AIzaSyBx62n-do2VU_YO-GPcy2LSVTVuXSd0VAI',
  authDomain: 'cptest-c6c7d.firebaseapp.com',
  databaseURL: 'https://cptest-c6c7d.firebaseio.com',
  projectId: 'cptest-c6c7d',
  storageBucket: 'cptest-c6c7d.appspot.com',
  messagingSenderId: '969621782459',
  appId: '1:969621782459:web:0ad70c361a8c9974e30e9e',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

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
        <Stack.Screen
          name="CE"
          component={({navigation}) => {
            return <CE navigation={navigation} />;
          }}
          options={Header}
        />
        <Stack.Screen
          name="GE"
          component={({navigation}) => {
            return <GE navigation={navigation} />;
          }}
          options={Header}
        />
        <Stack.Screen
          name="EFSP"
          component={({navigation}) => {
            return <EFSP navigation={navigation} />;
          }}
          options={Header}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
