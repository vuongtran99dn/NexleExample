import React, { PropsWithChildren } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const Wraper: React.FC<PropsWithChildren> = ({ children }) => {
  return <SafeAreaView style={{ flex: 1 }}>{children}</SafeAreaView>;
};

export default Wraper;
