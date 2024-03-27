import React from 'react';
import { CardStyleInterpolators, StackNavigationOptions, createStackNavigator } from '@react-navigation/stack';
import { authRoute } from '../routes';
import screenList from '../../screens';

const Stack = createStackNavigator();

const screenOptions: StackNavigationOptions = {
  headerShown: false,
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
};

const AuthNavigation = () => {
  return (
    <Stack.Navigator initialRouteName={authRoute.authScreen} screenOptions={screenOptions}>
      {Object.values(authRoute).map(item => {
        return (
          <Stack.Screen
            key={item}
            name={item}
            component={screenList[item as keyof typeof screenList]}
            options={{
              headerShown: false,
            }}
          />
        );
      })}
    </Stack.Navigator>
  );
};

export default AuthNavigation;
