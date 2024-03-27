import { View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import styles from './styles';

interface headerProps {}
const Header: React.FC<headerProps> = () => {
  return (
    <View style={styles.container}>
      <Icon name="chevron-left" style={styles.iconBack} />
    </View>
  );
};

export default Header;
