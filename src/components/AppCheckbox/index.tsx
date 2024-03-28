import { TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './styles';

const AppCheckBox = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <TouchableOpacity
      style={styles.checkbox}
      onPress={() => {
        setIsChecked(!isChecked);
      }}
    >
      {isChecked && <Icon name="check" style={styles.check} />}
    </TouchableOpacity>
  );
};

export default AppCheckBox;
