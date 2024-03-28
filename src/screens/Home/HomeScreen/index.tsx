import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAppDispatch } from '@/redux/hooks';
import { logout } from '@/redux/slices/authSlice';

const HomeScreen = () => {
  const dispach = useAppDispatch();
  return (
    <SafeAreaView>
      <Text>HomeScreen</Text>
      <TouchableOpacity
        onPress={() => {
          dispach(logout());
        }}
      >
        <Text>logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomeScreen;
