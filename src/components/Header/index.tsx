import { View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import styles from './styles';

interface headerProps {
  onPress?: () => void;
  rightComponent?: React.ReactNode;
}
const Header: React.FC<headerProps> = ({ onPress, rightComponent }) => {
  return (
    <View style={styles.container}>
      <Icon name="chevron-left" style={styles.iconBack} onPress={onPress} />
      {rightComponent && rightComponent}
    </View>
  );
};

export default Header;
