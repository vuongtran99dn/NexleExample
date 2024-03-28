import { Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from '@/components';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import { useAppDispatch } from '@/redux/hooks';
import { logout } from '@/redux/slices/authSlice';

const WelcomeScreen = () => {
  const dispach = useAppDispatch();
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={['#1D223821', '#000000']} style={styles.linearBackground} />
      <Header
        onPress={() => {
          dispach(logout());
        }}
      />
      <Text style={styles.textWellcome}>Wellcome to Nexle Entrance Test</Text>
      <Text style={styles.desc}>
        Please select categories what you would like to see on your feed. You can set this later on Filter.
      </Text>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
