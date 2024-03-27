import React from 'react';
import { CardStyleInterpolators, StackNavigationOptions, createStackNavigator } from '@react-navigation/stack';
import { mainRoute } from '../routes';
import screenList from '../../screens';

const Stack = createStackNavigator();

const screenOptions: StackNavigationOptions = {
  headerShown: false,
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
};

const MainNavigation = () => {
  return (
    <Stack.Navigator initialRouteName={mainRoute.welcomeScreen} screenOptions={screenOptions}>
      {Object.values(mainRoute).map(item => {
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

export default MainNavigation;
