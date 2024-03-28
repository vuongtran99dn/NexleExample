import { View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import styles from './styles';

interface headerProps {
  onPress?: () => void;
}
const Header: React.FC<headerProps> = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <Icon name="chevron-left" style={styles.iconBack} onPress={onPress} />
    </View>
  );
};

export default Header;
