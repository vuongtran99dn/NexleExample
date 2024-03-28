import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import AuthNavigation from './AuthNavigation';
import { navigationRef } from './RootNavigation';
import { useAppSelector } from '@/redux/hooks';
import MainNavigation from './MainNavigation';

const RootNavigation = () => {
  const accessToken = useAppSelector(state => state.authReducer.accessToken);
  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar translucent backgroundColor={'transparent'} />
      {accessToken ? <MainNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
};

export default RootNavigation;
