import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import React from 'react';
import Account from '../screens/account/Account';
import Home from '../screens/home/Home';
import Watchlist from '../screens/watchlist/Watchlist';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();

const Tab = createMaterialTopTabNavigator();

const Navigator = ({ children }: any) => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        style={{ height: 175 }}
        //@ts-ignore
        screenOptions={{
          tabBarActiveTintColor: 'orange',
          tabBarInactiveTintColor: 'gray',
          tabBarIndicatorStyle: {
            backgroundColor: 'transparent'
          }
        }}
        tabBarPosition="bottom"
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => (
              <AntDesign
                name="home"
                size={26}
                color={focused ? 'orange' : 'black'}
              />
            ),
            tabBarLabel: () => null,
            tabBarStyle: {
              height: 75
            }
          }}
        />
        <Tab.Screen
          name="Watchlist"
          component={Watchlist}
          options={{
            tabBarIcon: ({ focused }) => (
              <MaterialCommunityIcons
                name="table-eye"
                size={26}
                color={focused ? 'orange' : 'black'}
              />
            ),
            tabBarLabel: () => null,
            tabBarStyle: {
              height: 75
            }
          }}
        />
        <Tab.Screen
          name="Account"
          component={Account}
          options={{
            tabBarIcon: ({ focused }) => (
              <AntDesign
                name="user"
                size={26}
                color={focused ? 'orange' : 'black'}
              />
            ),
            tabBarLabel: () => null,
            tabBarStyle: {
              height: 75
            }
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
