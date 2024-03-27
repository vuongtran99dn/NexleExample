import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar, View } from 'react-native';
import AuthNavigation from './AuthNavigation';

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <StatusBar translucent backgroundColor={'transparent'} />
      <AuthNavigation />
    </NavigationContainer>
  );
};

export default RootNavigation;
