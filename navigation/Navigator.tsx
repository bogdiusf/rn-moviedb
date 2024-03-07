import { NavigationContainer } from '@react-navigation/native';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import React from 'react';
import Account from '../screens/account/Account';
import Home from '../screens/home/Home';
import Watchlist from '../screens/watchlist/Watchlist';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createMaterialTopTabNavigator();

const Navigator = ({ children }: any) => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
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
                color={focused ? 'orange' : 'white'}
              />
            ),
            tabBarLabel: () => null,
            tabBarStyle: {
              height: 75,
              backgroundColor: 'black'
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
                color={focused ? 'orange' : 'white'}
              />
            ),
            tabBarLabel: () => null,
            tabBarStyle: {
              height: 75,
              backgroundColor: 'black'
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
                color={focused ? 'orange' : 'white'}
              />
            ),
            tabBarLabel: () => null,
            tabBarStyle: {
              height: 75,
              backgroundColor: 'black'
            }
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
