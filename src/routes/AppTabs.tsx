import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';

import FreelancersList from '../pages/Freelancerslist';
import Favorites from '../pages/Favorites';

import colors from '../assets/global';

const { Navigator, Screen } = createBottomTabNavigator();

function AppTabs() {
  return (
    <Navigator tabBarOptions={{
      style: {
        height: 64,
        borderTopWidth: 0
      },

      tabStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      },

      iconStyle: {
        flex: 0,
        width: 30,
        height: 30
      },

      labelStyle: {
        fontFamily: 'Archivo_700Bold',
        fontSize: 14,
        marginLeft: 16
      },

      inactiveBackgroundColor: colors.color7,
      activeBackgroundColor: colors.color6,
      inactiveTintColor: '#ddd',
      activeTintColor: colors.colorTextDark,
    }}>
      <Screen
        name="FreelancersList"
        component={FreelancersList}
        options={{
          tabBarLabel: 'Jobbers',
          tabBarIcon: ({ size, color, focused }) => (
            <AntDesign name="solution1" size={size} color={focused ? colors.color3 : color} />
          )
        }}
      />
      <Screen
        name="Favorites" 
        component={Favorites}
        options={{
          tabBarLabel: 'Favoritos',
          tabBarIcon: ({ size, color, focused }) => (
            <AntDesign name="heart" size={size} color={focused ? colors.color1 : color} />
          )
        }}
      />
    </Navigator>
  )
}

export default AppTabs;