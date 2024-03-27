import { Text, View } from 'react-native';
import React from 'react';
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from '@/components';

const AuthScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.content} />
      <Text>AuthScreen</Text>
    </SafeAreaView>
  );
};

export default AuthScreen;
