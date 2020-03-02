import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import {Component} from 'react';
import {Text, View, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import LearnScreen from '../tab/LearnScreen';
import TravelScreen from '../tab/TravelScreen';
import CultureScreen from '../tab/CultureScreen';
import EntertaiScreen from '../tab/EntertaiScreen';
import MessScreen from '../tab/MessScreen';
import {IMAGE} from '../../src/image/image';

const Tab = createBottomTabNavigator();
export default class Home extends Component {
  render() {
    return (
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Learn') {
              iconName = focused ? IMAGE.ICON_LEARN : IMAGE.ICON_LEARN_BLACK;
            } else if (route.name === 'Travel') {
              iconName = focused ? IMAGE.ICON_TRAVEL : IMAGE.ICON_TRAVEL_BLACK;
            } else if (route.name === 'Culture') {
              iconName = focused
                ? IMAGE.ICON_CULTURE
                : IMAGE.ICON_CULTURE_BLACK;
            } else if (route.name === 'Entertai') {
              iconName = focused
                ? IMAGE.ICON_ENTERTAI
                : IMAGE.ICON_ENTERTAI_BLACK;
            } else {
              iconName = focused ? IMAGE.ICON_MESS : IMAGE.ICON_MESS_BLACK;
            }
            return (
              <Image
                source={iconName}
                style={{width: 20, height: 20, resizeMode: 'contain'}}
              />
            );
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Lobby" component={MessScreen} />
        <Tab.Screen name="Learn" component={LearnScreen} />
        <Tab.Screen name="Travel" component={TravelScreen} />
        <Tab.Screen name="Culture" component={CultureScreen} />
        <Tab.Screen name="Entertai" component={EntertaiScreen} />
      </Tab.Navigator>
    );
  }
}
