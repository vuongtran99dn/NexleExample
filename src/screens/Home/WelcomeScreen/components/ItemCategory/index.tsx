import { Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import styles from './styles';

interface itemCatogoryProps {
  data: {
    id: string;
    name: string;
  };
  isItemSelected: boolean;
  onChange: (value: boolean) => void;
}
const ItemCatogory: React.FC<itemCatogoryProps> = ({ data, isItemSelected, onChange }) => {
  const [isSelected, setIsSelected] = useState(isItemSelected);
  return (
    <TouchableOpacity
      style={[styles.container, isSelected ? styles.selected : {}]}
      onPress={() => {
        setIsSelected(!isSelected);
        onChange(!isSelected);
      }}
    >
      <Text style={styles.name}>{data.name}</Text>
    </TouchableOpacity>
  );
};

export default ItemCatogory;
