import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

import Landing from '../pages/Landing';
import PromoteServices from '../pages/PromoteServices';
import AppTabs from './AppTabs';

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Landing" component={Landing} />
        <Screen name="PromoteServices" component={PromoteServices} />
        <Screen name="AppTabs" component={AppTabs} />
      </Navigator>
    </NavigationContainer>
  );
}

export default AppStack;